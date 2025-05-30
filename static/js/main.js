document.addEventListener("DOMContentLoaded", () => {
  // Animation for feature cards and other elements with data-animate
  const animatedElements = document.querySelectorAll('[data-animate]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  animatedElements.forEach(element => observer.observe(element));

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for header
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Add animation classes to testimonial cards
  document.querySelectorAll('.testimonial-card').forEach((card, index) => {
    card.setAttribute('data-animate', '');
    card.style.transitionDelay = `${index * 0.1}s`;
  });
});
