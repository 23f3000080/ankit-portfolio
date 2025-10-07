// Contact page functionality
class ContactPage {
  constructor() {
    this.form = document.getElementById('contact-form');
    this.formStatus = document.getElementById('form-status');
    this.faqItems = document.querySelectorAll('.faq-item');
    
    this.init();
  }
  
  init() {
    this.initForm();
    this.initFAQ();
    this.initSmoothScroll();
  }
  
  // Initialize contact form
  initForm() {
    if (this.form) {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleFormSubmit();
      });
    }
  }
  
  // Handle form submission
  async handleFormSubmit() {
    const formData = new FormData(this.form);
    const submitButton = this.form.querySelector('.form-submit');
    const originalText = submitButton.innerHTML;
    
    // Show loading state
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
    submitButton.disabled = true;
    
    try {
      // Replace 'your-form-id' with your actual Formspree form ID
      const response = await fetch(this.form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        this.showFormStatus('success', 'Thank you! Your message has been sent successfully. I\'ll get back to you within 24 hours.');
        this.form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      this.showFormStatus('error', 'Sorry, there was an error sending your message. Please try again or email me directly at 23f3000080@ds.study.iitm.ac.in');
    } finally {
      // Reset button state
      submitButton.innerHTML = originalText;
      submitButton.disabled = false;
    }
  }
  
  // Show form status message
  showFormStatus(type, message) {
    this.formStatus.textContent = message;
    this.formStatus.className = `form-status ${type}`;
    
    // Hide status message after 5 seconds
    setTimeout(() => {
      this.formStatus.style.display = 'none';
    }, 5000);
  }
  
  // Initialize FAQ functionality
  initFAQ() {
    this.faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      
      question.addEventListener('click', () => {
        // Close all other FAQ items
        this.faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
          }
        });
        
        // Toggle current item
        item.classList.toggle('active');
      });
    });
  }
  
  // Initialize smooth scroll for anchor links
  initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 100;
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }
}

// Initialize contact page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.contact-section')) {
    new ContactPage();
  }
});