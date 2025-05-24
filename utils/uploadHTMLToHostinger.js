const ftp = require('basic-ftp');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const Blog = require('../models/Blog'); // adjust path as needed
const mongoose = require('mongoose');


module.exports = async function uploadHTMLToHostinger(slug, htmlContent) {
  const client = new ftp.Client();
  client.ftp.verbose = true;

  const remoteDir = process.env.FTP_TARGET_DIR || 'blog'; // note: no leading slash
  const remotePath = `${remoteDir}/${slug}.html`;
  const tempFile = path.join(__dirname, `${slug}.html`);

  try {
    console.log(`🔗 Connecting to FTP server at ${process.env.FTP_HOST}...`);
    await client.access({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASS,
      secure: false,
    });

    const currentDir = await client.pwd();
    console.log(`📂 FTP current directory after login: ${currentDir}`);

    console.log(`📁 Ensuring remote directory exists: ${remoteDir}`);
    await client.ensureDir(remoteDir);

    console.log(`📝 Writing temporary HTML file: ${tempFile}`);
    fs.writeFileSync(tempFile, htmlContent, 'utf8');

    console.log(`⏫ Uploading HTML to Hostinger: ${remotePath}`);
    await client.uploadFrom(tempFile, remotePath);

    console.log(`✅ Upload complete: ${remotePath}`);
    fs.unlinkSync(tempFile);
    console.log(`🗑️ Deleted local temp file: ${tempFile}`);
    await Blog.updateOne(
  { slug },
  { $set: { staticHtmlPath: `${slug}.html` } }
);

console.log(`✅ staticHtmlPath saved to DB: ${slug}.html`);

  } catch (err) {
    console.error(`❌ FTP Upload error: ${err.message}`);
  } finally {
    client.close();
    console.log('🔌 FTP connection closed');
  }
};
