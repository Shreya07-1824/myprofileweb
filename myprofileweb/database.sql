CREATE DATABASE IF NOT EXISTS shreya_portfolio
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE shreya_portfolio;

CREATE TABLE IF NOT EXISTS contact_enquiries (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(180) NOT NULL,
  phone VARCHAR(32) NOT NULL,
  service VARCHAR(120) NOT NULL,
  budget VARCHAR(80) NOT NULL,
  message TEXT NOT NULL,
  attachment_name VARCHAR(180) NULL,
  attachment_path VARCHAR(255) NULL,
  status ENUM('new', 'contacted', 'converted', 'closed') NOT NULL DEFAULT 'new',
  ip_address VARCHAR(45) NULL,
  user_agent VARCHAR(255) NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_contact_status (status),
  INDEX idx_contact_created (created_at)
);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(180) NOT NULL UNIQUE,
  status ENUM('active', 'unsubscribed') NOT NULL DEFAULT 'active',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS testimonials (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  client_name VARCHAR(120) NOT NULL,
  role VARCHAR(120) NOT NULL,
  photo_url VARCHAR(255) NULL,
  quote TEXT NOT NULL,
  rating TINYINT UNSIGNED NOT NULL DEFAULT 5,
  is_featured TINYINT(1) NOT NULL DEFAULT 1,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS portfolio_projects (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(160) NOT NULL,
  category ENUM('Frontend', 'Java', 'Full Stack', 'UI/UX', 'Database Projects') NOT NULL,
  summary VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  demo_url VARCHAR(255) NULL,
  github_url VARCHAR(255) NULL,
  technologies JSON NULL,
  sort_order INT UNSIGNED NOT NULL DEFAULT 0,
  is_featured TINYINT(1) NOT NULL DEFAULT 1,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_project_category (category),
  INDEX idx_project_featured (is_featured, sort_order)
);

INSERT INTO testimonials (client_name, role, photo_url, quote, rating, is_featured) VALUES
('Aarav Mehta', 'Startup Founder', 'images/client-a.svg', 'Shreya turned a rough idea into a polished website that made our product feel investor-ready.', 5, 1),
('Neha Kulkarni', 'Institute Coordinator', 'images/client-b.svg', 'The project structure was clean, responsive, and easy to explain. The form and database flow were especially helpful.', 5, 1),
('Rohan Shah', 'Local Business Owner', 'images/client-c.svg', 'Our old page looked basic. The redesign made our services clearer and brought more WhatsApp enquiries.', 5, 1);

INSERT INTO portfolio_projects (title, category, summary, description, image_url, demo_url, github_url, technologies, sort_order, is_featured) VALUES
('Startup SaaS Analytics Dashboard', 'Full Stack', 'Responsive dashboard with metrics and lead capture.', 'A premium startup dashboard concept with charts, metric cards, account actions, and backend-ready structure.', 'images/project-saas-dashboard.svg', 'pages/contact.html', 'https://github.com/', JSON_ARRAY('HTML5', 'CSS Grid', 'JavaScript', 'PHP', 'MySQL'), 1, 1),
('Local Cafe Ordering Website', 'Frontend', 'Local business website with WhatsApp ordering.', 'A polished cafe website concept with menu highlights, testimonials, WhatsApp CTAs, and SEO-ready sections.', 'images/project-cafe-commerce.svg', 'pages/contact.html', 'https://github.com/', JSON_ARRAY('HTML5', 'CSS3', 'JavaScript', 'Responsive UI'), 2, 1),
('Institute Management System', 'Java', 'Java and MySQL system for student records.', 'A Java academic project concept for admissions, fees, attendance, and report-friendly screens.', 'images/project-java-institute.svg', 'pages/contact.html', 'https://github.com/', JSON_ARRAY('Java', 'JDBC', 'MySQL', 'Swing'), 3, 1),
('Founder UI Kit and Landing System', 'UI/UX', 'Reusable design system for landing pages.', 'A UI kit with hero sections, cards, buttons, color tokens, and mobile components.', 'images/project-ui-kit.svg', 'pages/contact.html', 'https://github.com/', JSON_ARRAY('UI Design', 'CSS Tokens', 'Components'), 4, 1),
('Enquiry CRM Database System', 'Database Projects', 'Secure MySQL enquiry storage concept.', 'A database-backed enquiry system with prepared statements, lead status tracking, and admin-ready data structure.', 'images/project-database.svg', 'pages/contact.html', 'https://github.com/', JSON_ARRAY('MySQL', 'PHP', 'Prepared Statements', 'CRUD'), 5, 1);
