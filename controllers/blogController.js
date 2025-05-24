const Blog = require('../models/Blog');
const cloudinary = require('../config/cloudinary');
const streamifier = require('streamifier');
const slugify = require('slugify');
const generateBlogHTML = require('../utils/generateBlogHTML');
const uploadHTMLToHostinger = require('../utils/uploadHTMLToHostinger.js');
const deleteHTMLFromHostinger = require('../utils/deleteHTMLFromHostinger.js');


// Helper to upload image buffer to Cloudinary
const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: 'blogs' },
      (error, result) => {
        if (error) return reject(error);
        resolve(result.secure_url); // Only return the URL
      }
    );
    streamifier.createReadStream(buffer).pipe(stream);
  });
};

// Helper to safely parse JSON or return fallback
const parseJSON = (input, fallback = null) => {
  if (!input) return fallback;
  if (typeof input !== 'string') return input; // already parsed
  try {
    return JSON.parse(input);
  } catch {
    return fallback;
  }
};

// Generate a unique slug by appending suffix if needed
const generateUniqueSlug = async (title, blogId = null) => {
  let baseSlug = slugify(title, { lower: true, strict: true });
  let slug = baseSlug;
  let suffix = 1;

  while (true) {
    const existing = await Blog.findOne({
      slug,
      ...(blogId ? { _id: { $ne: blogId } } : {}),
    });
    if (!existing) break;
    slug = `${baseSlug}-${suffix++}`;
  }
  return slug;
};

// Create a new blog
exports.createBlog = async (req, res) => {
  try {
    const {
      title,
      content,
      author,
      category,
      sections,
      faqs,
      highlightBox,
      tags,
      metaDescription,
      publishedDate,
      isPublished
    } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    let featuredImage = '';
    if (req.file) {
      featuredImage = await uploadToCloudinary(req.file.buffer);
    }

    const slug = await generateUniqueSlug(title);

    const blog = new Blog({
      title,
      slug,
      content,
      author: author || 'Anonymous',
      category,
      featuredImage,
      sections: parseJSON(sections, []),
      faqs: parseJSON(faqs, []),
      highlightBox: parseJSON(highlightBox, null),
      tags: Array.isArray(tags)
        ? tags.map(tag => tag.trim())
        : typeof tags === 'string'
          ? tags.split(',').map(tag => tag.trim())
          : [],
      metaDescription,
      publishedDate: publishedDate ? new Date(publishedDate) : null,
      isPublished: isPublished === 'true' || isPublished === true
    });

    await blog.save();
    const html = generateBlogHTML(blog);
await uploadHTMLToHostinger(blog.slug, html);

    res.status(201).json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create blog: ' + err.message });
  }
};

// Get all blogs with pagination support
exports.getAllBlogs = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const total = await Blog.countDocuments();
    const blogs = await Blog.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.json({
      total,
      page,
      pages: Math.ceil(total / limit),
      blogs,
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch blogs: ' + err.message });
  }
};

// Get blog by ID
exports.getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });

    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch blog: ' + err.message });
  }
};

// Update a blog
exports.updateBlog = async (req, res) => {
  try {
    const {
      title,
      content,
      author,
      category,
      sections,
      faqs,
      highlightBox,
      tags,
      metaDescription,
      publishedDate,
      isPublished
    } = req.body;

    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    if (req.file) {
      blog.featuredImage = await uploadToCloudinary(req.file.buffer);
    }

    if (title) {
      blog.title = title;
      blog.slug = await generateUniqueSlug(title, blog._id);
    }

    blog.content = content ?? blog.content;
    blog.author = author ?? blog.author;
    blog.category = category ?? blog.category;
    blog.sections = sections ? parseJSON(sections, blog.sections) : blog.sections;
    blog.faqs = faqs ? parseJSON(faqs, blog.faqs) : blog.faqs;
    blog.highlightBox = highlightBox ? parseJSON(highlightBox, blog.highlightBox) : blog.highlightBox;
    blog.tags = Array.isArray(tags)
      ? tags.map(tag => tag.trim())
      : typeof tags === 'string'
        ? tags.split(',').map(tag => tag.trim())
        : blog.tags;
    blog.metaDescription = metaDescription ?? blog.metaDescription;
    blog.publishedDate = publishedDate ? new Date(publishedDate) : blog.publishedDate;
    blog.isPublished = isPublished === 'true' || isPublished === true || blog.isPublished;

    await blog.save();
    const html = generateBlogHTML(blog);
await uploadHTMLToHostinger(blog.slug, html);

    res.json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update blog: ' + err.message });
  }
};

// Delete a blog
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    // Optional: delete image from Cloudinary here if storing public_id

    await blog.deleteOne();
    await deleteHTMLFromHostinger(blog.slug);

    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete blog: ' + err.message });
  }
};
