module.exports = function generateBlogHTML(blog) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="icon" type="image/png" href="../assets/favicon.ico">  <link rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
  <title>${blog.title}</title>
  <meta name="description" content="${blog.metaDescription || ''}" />
  
    <link
      href="../../www.datocms-assets.com/59206/1644539047-logomarka2a1.png?auto=format,compress&amp;w=96"
      rel="icon"
      type="image/x-icon"
    />

    <meta
      property="og:title"
      content="About aesthetic studio"
    />
    <meta
      property="og:description"
      content="Find out more about aesthetic studio and Dr. David Kahng MD, the areas we serve and what our patients have to say about their experience."
    />
    <meta property="og:type" content="Website" />
    <meta property="og:url" content="index.html" />
  








    <script>
      window._s3trackingConfig = { disableFormFields: true };
    </script>
    <script
      src="../../tracking.tresio.co/dist/bundle.js"
      type="text/javascript"
      async
      defer="defer"
    ></script>

    <link
      rel="preload"
      href="../../scripts.iconnode.com/61325.js"
      as="script"
    />
    <script
      type="text/javascript"
      src="../../scripts.iconnode.com/61325.js"
      async
    ></script>

    <link rel="dns-prefetch" href="https://acsbapp.com/" />

    <script
      defer
      src="../../connect.podium.com/widget.js#ORG_TOKEN=24659e29-032e-42bd-9ade-29bf1f4c99df"
      id="podium-widget"
      data-organization-api-token="24659e29-032e-42bd-9ade-29bf1f4c99df"
    ></script>

    <link rel="dns-prefetch" href="https://use.typekit.net/" />
    <link
      rel="preload"
      href="https://use.typekit.net/af/6799c3/000000000000000000012e92/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&amp;fvd=n4&amp;v=3"
      as="font"
      type="font/woff2"
      crossorigin
    />
    <link
      rel="preload"
      href="https://use.typekit.net/af/abf6a1/00000000000000007735c958/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&amp;fvd=n4&amp;v=3"
      as="font"
      type="font/woff2"
      crossorigin
    />
    <link
      rel="preload"
      href="https://use.typekit.net/af/4b8d23/00000000000000007735c962/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&amp;fvd=n6&amp;v=3"
      as="font"
      type="font/woff2"
      crossorigin
    />

    <linK rel="stylesheet" href="../style.css" />
</head>
<body>
    <header class="partial_nav_header light" data-s3-partial>
      <div class="top-header">
        <div class="inside">
          <span>Heritage Vijayendra Nagar phase 2, telephone Nagar Main Road,
            Perungudi, Chennai 96</span>
        </div>
        <div class="lang">
          <!-- Language options can be added here -->
        </div>
      </div>
      <div class="row">
        <div class="inner">
          <div class="logo-holder">
            <a href="../index.html">
              <picture>
                <!-- Original logo for larger screens -->
                <source media="(min-width: 1025px)" srcset="../assets/logoblack.webp">
                <!-- Black logo for small and medium screens -->
                <source media="(max-width: 1024px)" srcset="../assets/logoblack.webp">
                <img
                  src="../assets/logo.webp"
                  loading="lazy"
                  class="logo"
                  alt="aesthetic studio"
                  draggable="false" />
              </picture>
            </a>
          </div>
          <div class="nav-links">
            <nav
              class="tresio-nav"
              data-type-desktop="horizontal"
              data-type-tablet="hamburger"
              data-type-mobile="hamburger"
              data-variant-desktop="focus"
              data-variant-tablet="default"
              data-variant-mobile="default"
              data-breakpoint-mobile="640"
              data-breakpoint-tablet="1024"
              data-dropdown-label
              data-hamburger-color="#fff"
              data-hamburger-color-expanded="#fff"
              data-menu-offset="0"
              data-menu-offset-mobile="0">
              <ul class="list partial_nav" data-s3-partial>
                <li class="partial_nav_item " data-s3-partial>
                  <a href="../index.html">Home</a>
                </li>
    
                <li class="partial_nav_item is-active" data-s3-partial>
                  <a href="../about.html">About</a>
                  <ul class>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../meet-dr.html">
                        know your Dr.Bharathi
                      </a>
                    </li>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../specials-and-promotions.html">Specials and Promotions</a>
                    </li>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../reviews.html">Reviews</a>
                    </li>
                  </ul>
                </li>
    
                <li class="partial_nav_item" data-s3-partial>
                  <a href="../breast.html">Breast</a>
                  <ul class>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../breast-implant.html">Breast Implant</a>
                    </li>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../breast-fatfill.html">Breast Fatfill</a>
                    </li>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../breast-reduction.html">Breast Reduction</a>
                    </li>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../axillary-breast-removal.html">Axillary Breast removal</a>
                    </li>
                  </ul>
                </li>
    
                <li class="partial_nav_item" data-s3-partial>
                  <a href="../hair.html">Hair</a>
                  <ul class>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../hair-transplant.html">Hair Transplant</a>
                    </li>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../prp.html">PRP/GFC/QR678</a>
                    </li>
                  </ul>
                </li>
    
                <li class="partial_nav_item" data-s3-partial>
                  <a href="../body.html">Body</a>
                  <ul class>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../male-breast-reduction.html">Male Breast Reduction (Gynecomastia)</a>
                    </li>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../liposuction.html">Liposuction</a>
                    </li>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../tummy-tuck.html">Tummy Tuck</a>
                    </li>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../mommy-makeover.html">Mommy Make over</a>
                    </li>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../multiple-liopmo-excision.html">Multiple Lipmo Excision</a>
                    </li>

                                       <li class="partial_nav_item" data-s3-partial>
                  <a href="../cosmetic-gynecology.html">Cosmetic Gynecology</a>
                  <ul class>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../vaginoplasty.html">Vaginoplasty</a>
                    </li>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../labiaplasty.html">Labiaplasty</a>
                    </li>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../hymen-repair.html">Hymen Repair</a>
                    </li>
                  </ul>
                </li>
                  </ul>
                </li>
                
              
    
                <li class="partial_nav_item" data-s3-partial>
                  <a href="../medspa.html">Medspa</a>
                  <ul class>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../botox.html">BOTOX</a>
                    </li>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../facial-fillers.html">Facial Fillers</a>
                    </li>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../skin-tightening.html">Skin Tightening / Rejuvenation</a>
                    </li>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../acne-acne-scar-treatment.html">Acne Scar Treatment</a>
                    </li>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../iv-therapy.html">IV Therapy</a>
                    </li>
                  </ul>
                </li>
    
                <li class="partial_nav_item" data-s3-partial>
                  <a href="../face.html">Face</a>
                  <ul class>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../lip-reduction.html">Lip Reduction</a>
                    </li>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../otoplasty.html">Otoplasty</a>
                    </li>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../fat-transfer.html">Fat Transfer</a>
                    </li>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../chin-augmentation.html">Chin Augmentation</a>
                    </li>
                  </ul>
                </li>
    
                <li class="partial_nav_item" data-s3-partial>
                  <a href="../blog.html">Blogs</a>
                </li>
    
                <li class="partial_nav_item" data-s3-partial>
                  <a href="../gallery.html">Gallery</a>
                  <ul class>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../gallery-breast.html">Breast</a>
                    </li>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../gallery-face.html">Face</a>
                    </li>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../gallery-body.html">Body</a>
                    </li>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../gallery-medspa.html">Medspa</a>
                    </li>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../gallery-hair.html">Hair</a>
                    </li>
                    <li class="partial_nav_item" data-s3-partial>
                      <a href="../gallery-cosmetic-gynecology.html">Cosmetic Gynecology</a>
                    </li>
                  </ul>
                </li>
    
                <li class="partial_nav_item" data-s3-partial>
                  <a href="../contact.html">Contact</a>
                </li>
                <li class="ignore">
                  <div class="info">
                    <ul class="partial_socials" data-s3-partial>
                      <li><a rel="noopener"
                          title="aesthetic studio & Laser Center on Instagram"
                          href target="_blank"
                          aria-label="aesthetic studio & Laser Center on Instagram opens in a new tab"><span
                            class="instagram-icon"
                            role="presentation"></span></a></li>
                      <li><a rel="noopener"
                          title="aesthetic studio & Laser Center on Facebook"
                          href target="_blank"
                          aria-label="aesthetic studio & Laser Center on Facebook opens in a new tab"><span
                            class="facebook-icon"
                            role="presentation"></span></a></li>
                      <li><a rel="noopener"
                          title="aesthetic studio & Laser Center on Youtube"
                          href target="_blank"
                          aria-label="aesthetic studio & Laser Center on Youtube opens in a new tab"><span
                            class="youtube-icon"
                            role="presentation"></span></a></li>
                      <li><a rel="noopener"
                          title="aesthetic studio & Laser Center on Yelp" href
                          target="_blank"
                          aria-label="aesthetic studio & Laser Center on Yelp opens in a new tab"><span
                            class="yelp-icon"
                            role="presentation"></span></a></li>
                    </ul>
                    <p>
                      <a
                        class="tel ppc-href"
                        href="tel:+91-9361228737"
                        data-s3-event="Phone - Mobile Nav"
                        role="link"
                        aria-label="Give Cara Plastic Surgery & Laser Center a phone call"><span
                          class="ppc-number">+91-80 4803 9063</span></a>
                    </p>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div class="phone-holder">
            <a
              class="tel ppc-href"
              href="tel:+91-9361228737"
              role="link"
              aria-label="Give aesthetic studio & Laser Center a phone call">
              <span class="phone-icon"><picture class>
                  <source
                    srcset="
                      data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
                    "
                    data-lazyload-srcset="https://www.datocms-assets.com/59206/1710453059-phone-icon-solid.png?auto=format,compress&w=80" />
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-lazyload-src="https://www.datocms-assets.com/59206/1710453059-phone-icon-solid.png?auto=format,compress&w=80"
                    loading="lazy"
                    data-lazyload="img"
                    width="80"
                    height="102"
                    alt="aesthetic studio - Phone Icon"
                    draggable="false" /></picture></span>
              <span class="ppc-number">+91-9361228737</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  <main id="main">
    <!-- Page Layout -->
    <!-- Hero Module -->
    <div class="mod_hero banner" data-s3-module>
      <div class="wrapper">
        <div class="row">
          <div class="inner">
            <h1 class="">Blogs</h1>
            <ul class="partial_breadcrumb" data-s3-partial>
              <li>
                <a href="/index.html" role="link" aria-label="Breadcrumbs to help navigate the user">Home</a>
              </li>
              <li>
                <a href="/" role="link" aria-label="Breadcrumbs to help navigate the user">Blogs</a>
              </li>
            </ul>
            <div class="text"></div>
          </div>
        </div>
        <div class="media">
          <picture class="background">
            <img src="../assets/aboutspecials.webp" loading="lazy" width="1440" height="965" alt="" draggable="false">
          </picture>
        </div>
        <div class="mediaLeft">
               <picture class="background">
          
            <img src="../assets/Background Picture (2).webp" data-lazyload-src="../assets/Background Picture (2).webp" loading="lazy" data-lazyload="img" width="1440" height="965" alt="Cara Plastic Surgery media" draggable="false">
          </picture>
        </div>
      </div>
    </div>

    <section class="blog-details">
      <div class="blog-header">
        <h1>${blog.title}</h1>
        <div class="meta">Posted on ${new Date(blog.publishedDate || Date.now()).toDateString()}</div>
      </div>

      ${blog.featuredImage ? `
        <div class="blog-image">
          <img src="${blog.featuredImage}" alt="Featured Image">
        </div>` : ''
      }

      <div class="blog-body">
        ${blog.content ? `<p>${blog.content}</p>` : ''}

        ${blog.sections?.map(s => `
          <h2>${s.heading}</h2>
          <p>${s.content}</p>
        `).join('') || ''}

        ${blog.highlightBox ? `
          <div class="highlight-box">
            <h3>${blog.highlightBox.title}</h3>
            <p>${blog.highlightBox.intro}</p>
            <ul>${blog.highlightBox.points.map(p => `<li>${p}</li>`).join('')}</ul>
          </div>` : ''}

        ${blog.faqs?.length ? `
          <h2>Frequently Asked Questions (FAQs)</h2>
          ${blog.faqs.map(faq => `
            <h3>${faq.question}</h3>
            <p>${faq.answer}</p>
          `).join('')}
        ` : ''}
      </div>
    </section>
  </main>

           <footer class="partial_footer container" data-s3-partial>
      <!-- contact cta for mobile -->
      <div class="fixed-cta">
        <a href="contact.html" class="btn" role="button" aria-label="Contact aesthetic studio & Laser Center">Contact Us</a>
        <a class="tel ppc-href btn" href="tel:+91-9361228737" aria-label="Call aesthetic studio & Laser Center on the phone" role="button">
          <span class="ppc-number">+91-9361228737</span>
        </a>
      </div>
      <div class="nav-links">
        <div class="row">
          <nav class="tresio-nav" data-type-desktop="horizontal">
            <ul class="list partial_nav" data-s3-partial>
              <li class="partial_nav_item " data-s3-partial>
                <a href="../index.html">Home</a>
              </li>
              <li class="partial_nav_item" data-s3-partial>
                <a href="../about.html">About</a>
              </li>
              <li class="partial_nav_item" data-s3-partial>
                <a href="../breast.html">Breast</a>
              </li>
              <li class="partial_nav_item" data-s3-partial>
                <a href="../hair.html">Hair</a>
              </li>
              <li class="partial_nav_item" data-s3-partial>
                <a href="../body.html">Body</a>
              </li>
              <li class="partial_nav_item" data-s3-partial>
                <a href="../medspa.html">Medspa</a>
              </li>
              <li class="partial_nav_item" data-s3-partial>
                <a href="../face.html">Face</a>
              </li>
              <li class="partial_nav_item" data-s3-partial>
                <a href="../blogs.html">Blogs</a>
              </li>
              <li class="partial_nav_item" data-s3-partial>
                <a href="../gallery.html">Gallery</a>
              </li><li class="partial_nav_item" data-s3-partial>
                <a href="../faq.html">Faq</a>
              </li>
              <li class="partial_nav_item" data-s3-partial>
                <a href="../contact.html">Contact</a>
              </li>
    
            
            </ul>
          </nav>
        </div>
      </div>
      <div class="row main">
        <div class="item left-holder wow fadeInLeft" data-wow-duration="2.2s">
          <a href="../reviews.html" target="_blank" rel="noopener" class="reviews-holder block" aria-label="aesthetic studio & Laser Center reviews opens in a new tab" role="link">
            <p>4.9 Stars & Above +300 Reviews</p>
            <div class="stars">
              <span class="star">★</span>
              <span class="star">★</span>
              <span class="star">★</span>
              <span class="star">★</span>
             <span class="star">★</span>
            </div>
          </a>
          <div class="locations">
            <span class="label">Locations: </span>
            <a target="_blank" aria-label="open link to Chennai address" href="https://maps.google.com">
              <span>Number 8, Heritage Vijayendra Nagar phase 2, telephone Nagar Main Road, Perungudi, Chennai 96</span>
            </a>
          </div>
        </div>
        <div class="item logo-holder wow fadeInUp" data-wow-duration="2.2s">
          <a href="../index.html" class="logo">
            <img src="./../assets/logo.webp" loading="lazy" class="logo" alt="aesthetic studio" draggable="false" style="width: 400px">
          </a>
        </div>
        <div class="item right-holder wow fadeInRight" data-wow-duration="2.2s">
          <div class="inner">
            <ul class="partial_socials" data-s3-partial>
              <li><a rel="noopener" title="aesthetic studio " href="https://www.instagram.com/aestheticstudioin?utm_source=qr&igsh=MW90c3czNGZ0bmdreg==" target="_blank" aria-label="aesthetic studio "><span class="instagram-icon" role="presentation"></span></a></li>
                    <li><a rel="noopener" title="aesthetic studio " href="https://www.facebook.com/sharer/sharer.php?u=https://www.aestheticstudio.in" target="_blank" aria-label="aesthetic studio "><span class="facebook-icon" role="presentation"></span></a></li>
                  
                    <li><a rel="noopener" title="aesthetic studio " href="https://www.linkedin.com/cws/share?url=https://www.aestheticstudio.in" target="_blank" aria-label="aesthetic studio "><span class="linkedin-icon" role="presentation"></span></a></li>
                    <li><a rel="noopener" title="aesthetic studio " href="https://twitter.com/intent/tweet?text=Check+out+&url=https://www.aestheticstudio.in" target="_blank" aria-label="aesthetic studio "><span class="twitter-icon" role="presentation"></span></a></li>
                    <li><a rel="noopener" title="aesthetic studio" href="http://pinterest.com/pin/create/button/?url=https://www.aestheticstudio.in" target="_blank" aria-label="aesthetic studio "><span class="pinterest-icon" role="presentation"></span></a></li>
                  
        </ul>
    
            <a class="tel ppc-href" href="tel:+91-9361228737" data-s3-event="Phone - Mobile Nav" role="link" aria-label="Give aesthetic studio & Laser Center a phone call">
              <span class="ppc-number">+91-9361228737</span>
            </a>
          </div>
        </div>
      </div>
    
      <div class="footer-location">
        <div class="inside">
          <span>Heritage Vijayendra Nagar phase 2, telephone Nagar Main Road, Perungudi, Chennai 96</span>
        </div>
      </div>
      <div class="floating_btn">
        <a target="_blank" href="https://wa.me/919361228737">

          <div class="contact_icon">
            <i class="fa fa-whatsapp my-float"></i>
          </div>
        </a>
        <p class="text_icon">Talk to us?</p>
      </div>
    </footer>

    <div class="row trademark">
      <div class="item reserved">
        <p>&copy; Aesthetic Studio. All Rights Reserved. | Designed & Developed by <a href="https://www.swiflare.com" target="_blank">Swiflare Ai Innovations</a></p>
      </div>
      <div class="item">
        <p>
          <a href="../../terms-and-conditions/index.html">Terms & Conditions</a>
          <a href="../../privacy-policy/index.html">Privacy Policy</a>
          <a href="../../privacy-policy/index.html">Return Policy</a>
        </p>
      </div>
    </div>


   <script>
      (function () {
        var s = document.createElement("script"),
          e = !document.body ? document.querySelector("head") : document.body;
        s.src = "../../acsbapp.com/apps/app/dist/js/app.js";
        s.async = true;
        s.onload = function () {
          acsbJS.init({
            statementLink: "",
            footerHtml: "",
            hideMobile: false,
            hideTrigger: false,
            language: "en",
            position: "left",
            leadColor: "#000",
            triggerColor: "#C3AB69",
            triggerRadius: "50%",
            triggerPositionX: "left",
            triggerPositionY: "bottom",
            triggerIcon: "people",
            triggerSize: "medium",
            triggerOffsetX: 20,
            triggerOffsetY: 30,
            mobile: {
              triggerSize: "small",
              triggerPositionX: "right",
              triggerPositionY: "center",
              triggerOffsetX: 10,
              triggerOffsetY: 0,
              triggerRadius: "50%",
            },
            ...{},
          });
        };
        e.appendChild(s);
      })();
    </script>

    <!--[endlocalize]-->
    <script type="text/javascript">
      (() => {
        var m = (t) => {
            let o = document.readyState;
            if (typeof $ != "function") {
              setTimeout(() => {
                m(t);
              }, 100);
              return;
            }
            o === "complete" ||
            (o !== "loading" && !document.documentElement.doScroll)
              ? t()
              : document.addEventListener("DOMContentLoaded", t);
          },
          g = m;
        var y = () => {
            [...document.querySelectorAll("video")].forEach((t, o) => {
              let e = t.getAttribute("data-lazyload"),
                i = t.getAttribute("data-lazyload-loaded"),
                r = t.querySelectorAll("source");
              if (!e || i) {
                let u = t.getAttribute("src"),
                  a = window.innerWidth,
                  n = t.getAttribute("data-desktop-vid"),
                  f = t.getAttribute("data-tablet-vid"),
                  l = t.getAttribute("data-mobile-vid"),
                  s = a <= 640 ? l : a <= 920 ? f : n;
                s !== null && s !== u && t.setAttribute("src", s);
              }
            });
          },
          E = (t) => ("scrollTop" in t ? t.scrollTop : t.pageYOffset),
          b = (t) => {
            let o = t.getBoundingClientRect();
            return {
              top: o.top + window.scrollY,
              left: o.left + window.scrollX,
            };
          },
          C = (t) => {
            for (var o = [], e = t.parentNode.firstChild; e; )
              e.nodeType === 1 && e !== t && o.push(e), (e = e.nextSibling);
            return o;
          },
          c = {
            run() {
              y(),
                [...document.querySelectorAll("[data-lazyload]")].forEach(
                  function (t, o) {
                    var e = t.getAttribute("data-lazyload"),
                      i = t.getAttribute("data-lazyload-src");
                    let r = (window.tresioConfig || {}).lazyload || {};
                    var u = r.homeOffset !== void 0 ? r.homeOffset : 300,
                      a = r.offset !== void 0 ? r.offset : 300;
                    e === "bg" &&
                      (a =
                        r.backgroundOffset !== void 0
                          ? r.backgroundOffset
                          : 300);
                    var n = E(window),
                      f =
                        t.nodeName === "SOURCE"
                          ? b(t.parentNode).top
                          : b(t).top;
                    window.location.pathname === "/" &&
                      u !== void 0 &&
                      n < 300 &&
                      (a = u);
                    var l = f - a,
                      s = l + t.getBoundingClientRect().height,
                      h = n + document.querySelector("html").clientHeight,
                      w = f - n,
                      A = l < -a,
                      S = (s > n && l < h) || w < a;
                    let z = t.style.display;
                    if (
                      S &&
                      z !== "none" &&
                      t.getAttribute("data-lazyload-loaded") !== "true" &&
                      !A
                    ) {
                      if (
                        (e === "bg" &&
                          (t.style.backgroundImage = 'url(%24%7bi%7d/index.html)'),
                        e === "img" &&
                          (t.getAttribute("src") !== i &&
                            t.setAttribute("src", i),
                          C(t).forEach((d, x) => {
                            if (d.nodeName === "SOURCE") {
                              let p = d.getAttribute("data-lazyload-srcset"),
                                T = d.getAttribute("srcset");
                              p && p !== T && d.setAttribute("srcset", p);
                            }
                          })),
                        e === "video")
                      ) {
                        if (t.getAttribute("data-desktop-vid"))
                          t.setAttribute("data-lazyload-loaded", "true"), y();
                        else if (
                          (t.setAttribute("src", i), t.nodeName === "SOURCE")
                        ) {
                          let d = t.parentNode;
                          d.load && d.load();
                        }
                      }
                      t.setAttribute("data-lazyload-loaded", "true");
                    }
                  }
                );
            },
            init() {
              document.readyState === "loading" && c.run(),
                g(() => {
                  window.addEventListener("resize", c.run, !1),
                    window.addEventListener("scroll", c.run, !1),
                    c.run();
                });
            },
          },
          v = c;
        v.init();
      })();
    </script>

    <script
      onload="$(document).trigger('cms.init')"
      type="text/javascript"
      src="../assets/app.min5403.js?build=97bd01728a0296021a83fb242007da54a9980b84"
      defer
      async
    ></script>

    <script
      type="text/javascript"
      src="../master/assets/core/js/treCaptcha.min5403.js?build=97bd01728a0296021a83fb242007da54a9980b84"
      defer
      async
    ></script>

    <script>
      (function () {
        var s = document.createElement("script"),
          e = !document.body ? document.querySelector("head") : document.body;
        s.src = "../../acsbapp.com/apps/app/dist/js/app.js";
        s.async = true;
        s.onload = function () {
          acsbJS.init({
            statementLink: "",
            footerHtml: "",
            hideMobile: false,
            hideTrigger: false,
            language: "en",
            position: "left",
            leadColor: "#000",
            triggerColor: "#C3AB69",
            triggerRadius: "50%",
            triggerPositionX: "left",
            triggerPositionY: "bottom",
            triggerIcon: "people",
            triggerSize: "medium",
            triggerOffsetX: 20,
            triggerOffsetY: 30,
            mobile: {
              triggerSize: "small",
              triggerPositionX: "right",
              triggerPositionY: "center",
              triggerOffsetX: 10,
              triggerOffsetY: 0,
              triggerRadius: "50%",
            },
            ...{},
          });
        };
        e.appendChild(s);
      })();
    </script>


</body>
</html>
`;
};
