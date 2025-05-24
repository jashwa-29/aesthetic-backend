const ftp = require('basic-ftp');

module.exports = async function deleteHTMLFromHostinger(slug) {
  const client = new ftp.Client();
  try {
    await client.access({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASS,
      secure: false,
    });
    await client.remove(`/public_html/blog/${slug}.html`);
  } catch (err) {
    console.error('FTP Delete error:', err.message);
  } finally {
    client.close();
  }
};
