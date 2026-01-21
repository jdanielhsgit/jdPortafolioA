/* Custom Corporate Styles for Horizonte Carretero */
:root {
  --primary-color: #0d2c54; /* Navy Blue */
  --secondary-color: #c1121f; /* Accent Red */
  --accent-color: #669bbc; /* Light Blue */
  --text-dark: #333333;
  --text-light: #fdf0d5;
  --bg-light: #f8f9fa;
  --transition-speed: 0.3s;
}

body {
  font-family: "Inter", sans-serif;
  color: var(--text-dark);
  line-height: 1.6;
  overflow-x: hidden;
}

/* Navbar */
.navbar {
  background-color: rgba(13, 44, 84, 0.95) !important;
  backdrop-filter: blur(5px);
  transition: var(--transition-speed);
}

.navbar-brand {
  font-weight: 800;
  letter-spacing: 1px;
  color: white !important;
}

.nav-link {
  color: rgba(255, 255, 255, 0.8) !important;
  font-weight: 500;
  margin-left: 20px;
}

.nav-link:hover {
  color: white !important;
}

/* Hero Section */
.hero {
  height: 100vh;
  background:
    linear-gradient(rgba(13, 44, 84, 0.6), rgba(13, 44, 84, 0.6)),
    url("../img/hero.png");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 20px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
}

.hero p {
  font-size: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
}

/* Sections General */
section {
  padding: 100px 0;
}

.section-title {
  font-weight: 800;
  color: var(--primary-color);
  margin-bottom: 50px;
  position: relative;
  padding-bottom: 15px;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 4px;
  background-color: var(--secondary-color);
}

/* History Section */
.history-bg {
  background-color: var(--bg-light);
}

/* Mission & Vision */
.card-mv {
  border: none;
  border-radius: 15px;
  padding: 40px;
  height: 100%;
  transition: transform var(--transition-speed);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.card-mv:hover {
  transform: translateY(-10px);
}

.card-mv i {
  font-size: 3rem;
  color: var(--secondary-color);
  margin-bottom: 20px;
}

/* Gallery */
.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  margin-bottom: 30px;
}

.gallery-item img {
  transition: transform 0.5s ease;
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(13, 44, 84, 0.9));
  height: 50%;
  display: flex;
  align-items: flex-end;
  padding: 20px;
  color: white;
  opacity: 0;
  transition: opacity var(--transition-speed);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

/* Values */
.value-box {
  text-align: center;
  padding: 20px;
}

.value-box i {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 15px;
}

/* Footer */
footer {
  background-color: var(--primary-color);
  color: white;
  padding: 60px 0 20px;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 20px;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 40px;
  padding-top: 20px;
  font-size: 0.9rem;
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  .hero p {
    font-size: 1.2rem;
  }
}
