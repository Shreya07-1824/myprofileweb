# Shreya Patil Freelance Portfolio

Premium, responsive freelance portfolio website built with HTML5, CSS3, JavaScript, PHP, and MySQL-ready storage.

## Pages

- `index.html` - home page
- `pages/about.html` - profile, skills, radar chart, timeline, chatbot UI
- `pages/services.html` - services, pricing guide, estimator, FAQ
- `pages/portfolio.html` - project filters, cards, modal details, before/after showcase
- `pages/contact.html` - contact form, WhatsApp, email, phone, social links, Google Maps iframe
- `pages/resume.html` - printable resume and save-as-PDF flow

## Frontend Features

- Mobile-first responsive layout with CSS Grid and Flexbox
- Sticky navigation and hamburger menu
- Dark/light mode with `localStorage`
- Typing animation, counters, scroll reveal, loading animation
- Project category filtering and modal popup
- Testimonials carousel
- Cost estimator
- AI-like chatbot UI
- Real-time clock and voice intro button
- Contact and newsletter validation
- SEO meta tags, Open Graph, Twitter cards, canonical URLs
- `sitemap.xml` and `robots.txt`

## Backend Setup

The frontend can be opened directly, but MySQL storage requires a PHP server such as XAMPP, WAMP, MAMP, or a real hosting account.

1. Create a MySQL database by importing `database.sql`.
2. Update database credentials in `backend/config.php`.
3. Serve the project from a PHP-enabled server document root.
4. Open `pages/contact.html` and submit the form.
5. Enquiries will be stored in the `contact_enquiries` table.
6. Newsletter emails will be stored in the `newsletter_subscribers` table.

## Local Static Preview

From this folder, run:

```bash
python -m http.server 5500
```

Then open:

```text
http://localhost:5500/
```

Static preview shows all frontend features. PHP files are not executed by Python's static server, so form submissions show a demo-mode backend message until hosted with PHP.

## Customize Before Launch

- Replace placeholder phone number `+91 98765 43210`
- Replace `hello@shreyapatil.dev`
- Replace social links in `js/site-data.js`
- Replace Google Analytics ID `G-XXXXXXXXXX`
- Update canonical URLs and sitemap domain from `shreyapatil.dev`
- Add your real resume details and project links
- Add local video files in `videos/` if you want a background video loop

## Security Notes

- PHP endpoints use PDO prepared statements.
- Uploaded files are type and size checked.
- Keep `backend/config.php` private on production servers.
- Add server-side rate limiting or CAPTCHA before high-traffic public launch.
