// Main JS interactions for Horizonte Carretero

document.addEventListener("DOMContentLoaded", () => {
  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(13, 44, 84, 1)";
      navbar.style.padding = "10px 0";
    } else {
      navbar.style.background = "rgba(13, 44, 84, 0.95)";
      navbar.style.padding = "20px 0";
    }
  });

  // Smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });

  // Simple fade-in effect on scroll using Intersection Observer
  const sections = document.querySelectorAll("section");
  const observerOptions = {
    threshold: 0.1,
  };

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
    sectionObserver.observe(section);
  });
});
