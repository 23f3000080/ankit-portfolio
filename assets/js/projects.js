// Projects page functionality
class ProjectsPage {
  constructor() {
    this.projects = document.querySelectorAll('.project-card');
    this.filterButtons = document.querySelectorAll('.filter-btn');
    this.modal = document.getElementById('project-modal');
    this.modalClose = document.getElementById('modal-close');
    
    this.init();
  }
  
  init() {
    this.initFilter();
    this.initModal();
    this.initProjectDetails();
  }
  
  // Initialize project filtering
  initFilter() {
    this.filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        this.filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        this.filterProjects(filter);
      });
    });
  }
  
  // Filter projects based on technology
  filterProjects(filter) {
    this.projects.forEach(project => {
      if (filter === 'all') {
        project.style.display = 'block';
        setTimeout(() => {
          project.style.opacity = '1';
          project.style.transform = 'translateY(0)';
        }, 50);
      } else {
        const projectTech = project.getAttribute('data-tech');
        if (projectTech.includes(filter)) {
          project.style.display = 'block';
          setTimeout(() => {
            project.style.opacity = '1';
            project.style.transform = 'translateY(0)';
          }, 50);
        } else {
          project.style.opacity = '0';
          project.style.transform = 'translateY(20px)';
          setTimeout(() => {
            project.style.display = 'none';
          }, 300);
        }
      }
    });
  }
  
  // Initialize modal functionality
  initModal() {
    // Close modal when clicking close button
    this.modalClose.addEventListener('click', () => {
      this.closeModal();
    });
    
    // Close modal when clicking outside content
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.closeModal();
      }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('active')) {
        this.closeModal();
      }
    });
  }
  
  // Initialize project detail buttons
  initProjectDetails() {
    const detailButtons = document.querySelectorAll('.project-detail-btn');
    
    detailButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        const projectCard = button.closest('.project-card');
        this.openProjectModal(projectCard);
      });
    });
  }
  
  // Open project modal with details
  openProjectModal(projectCard) {
    const title = projectCard.querySelector('.project-title').textContent;
    const image = projectCard.querySelector('.project-image img').src;
    const description = projectCard.querySelector('.project-description').textContent;
    const features = projectCard.querySelector('.project-features').innerHTML;
    const tech = projectCard.querySelector('.project-tech').innerHTML;
    const links = projectCard.querySelector('.project-links').innerHTML;
    
    // Populate modal content
    document.getElementById('modal-project-title').textContent = title;
    document.getElementById('modal-image').src = image;
    document.getElementById('modal-image').alt = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal-features').innerHTML = features;
    document.getElementById('modal-tech').innerHTML = tech;
    document.getElementById('modal-links').innerHTML = links;
    
    // Show modal
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  // Close modal
  closeModal() {
    this.modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// Initialize projects page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.projects-section')) {
    new ProjectsPage();
  }
});

// Add intersection observer for project cards
document.addEventListener('DOMContentLoaded', () => {
  const projectCards = document.querySelectorAll('.project-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});