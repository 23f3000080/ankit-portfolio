document.addEventListener("DOMContentLoaded", function () {
  // --- Load Navbar ---
  fetch("components/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      const navbarContainer = document.getElementById("navbar");
      if (navbarContainer) {
        navbarContainer.innerHTML = data;

        // Initialize after navbar is loaded
        initializeThemeToggle();
        initializeMobileMenu();
        setActiveNavLink();
        animateSkillBars();
      }
    })
    .catch((err) => console.error("Navbar load error:", err));

  // --- Smooth scrolling for anchor links ---
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        });

        // Close mobile menu if open
        const mobileMenu = document.getElementById("mobile-menu");
        const mobileMenuButton = document.getElementById("mobile-menu-button");
        if (mobileMenu && mobileMenuButton && !mobileMenu.classList.contains("max-h-0")) {
          mobileMenu.classList.add("max-h-0");
          mobileMenu.classList.remove("max-h-[500px]");
          mobileMenuButton.classList.remove("open");
        }
      }
    });
  });

  // --- Animate elements on scroll ---
  const animatedElements = document.querySelectorAll(".project-card, .skill-category, .testimonial-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// --- Theme toggle ---
function initializeThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleMobile = document.getElementById("theme-toggle-mobile");
  const body = document.body;

  function toggleTheme() {
    if (body.classList.contains("light")) {
      body.classList.remove("light");
      body.classList.add("dark");
      if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      if (themeToggleMobile) themeToggleMobile.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark");
      body.classList.add("light");
      if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      if (themeToggleMobile) themeToggleMobile.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem("theme", "light");
    }
  }

  if (themeToggle) themeToggle.addEventListener("click", toggleTheme);
  if (themeToggleMobile) themeToggleMobile.addEventListener("click", toggleTheme);

  // Load saved theme
  if (
    localStorage.getItem("theme") === "dark" ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches && !localStorage.getItem("theme"))
  ) {
    body.classList.remove("light");
    body.classList.add("dark");
    if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    if (themeToggleMobile) themeToggleMobile.innerHTML = '<i class="fas fa-sun"></i>';
  }
}

// --- Mobile menu ---
function initializeMobileMenu() {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.contains("max-h-0");
      if (isOpen) {
        mobileMenu.classList.remove("max-h-0");
        mobileMenu.classList.add("max-h-[500px]");
        mobileMenuButton.classList.add("open");
      } else {
        mobileMenu.classList.add("max-h-0");
        mobileMenu.classList.remove("max-h-[500px]");
        mobileMenuButton.classList.remove("open");
      }
    });
  }
}

// --- Active link highlighting ---
function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.getAttribute("href") === currentPage) link.classList.add("active");
  });

  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    if (link.getAttribute("href") === currentPage) link.classList.add("active");
  });
}

// --- Animate skill bars ---
function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillBar = entry.target;
          const level = skillBar.getAttribute("data-level");
          skillBar.style.width = level + "%";
          observer.unobserve(skillBar);
        }
      });
    },
    { threshold: 0.5 }
  );

  skillBars.forEach((bar) => observer.observe(bar));
}


// About page specific functionality
function initAboutPage() {
  // Animate progress circles
  const progressCircles = document.querySelectorAll('.progress-circle');
  
  progressCircles.forEach(circle => {
    const percent = circle.getAttribute('data-percent');
    circle.style.background = `conic-gradient(var(--primary) ${percent}%, var(--secondary-bg) ${percent}%)`;
  });
  
  // Add intersection observer for timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
        timelineObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    timelineObserver.observe(item);
  });
}

// Initialize about page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Check if we're on the about page
  if (document.querySelector('.about-hero')) {
    initAboutPage();
  }
});