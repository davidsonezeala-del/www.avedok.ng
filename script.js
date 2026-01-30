/**
 * AVEDOK - Premium Educational Platform
 * Main JavaScript File
 * 
 * @version 1.0.0
 * @author AVEDOK Team
 */

(function() {
  'use strict';

  // ========================
  // DOM Elements
  // ========================
  const header = document.querySelector('.header');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.nav');
  const accordions = document.querySelectorAll('.accordion');
  const forms = document.querySelectorAll('form');
  const animatedElements = document.querySelectorAll('[data-animate]');

  // ========================
  // Header Scroll Effect
  // ========================
  let lastScroll = 0;
  
  function handleScroll() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // ========================
  // Mobile Menu Toggle
  // ========================
  if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      nav.classList.toggle('mobile-open');
      document.body.classList.toggle('menu-open');
      
      // Change icon
      const icon = mobileMenuBtn.querySelector('svg');
      if (!isExpanded) {
        icon.innerHTML = `
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        `;
      } else {
        icon.innerHTML = `
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        `;
      }
    });

    // Close menu on link click
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('mobile-open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
      });
    });
  }

  // ========================
  // FAQ Accordion
  // ========================
  accordions.forEach(accordion => {
    const button = accordion.querySelector('button');
    
    button.addEventListener('click', () => {
      const isOpen = accordion.classList.contains('open');
      
      // Close all accordions (optional - remove for multi-open)
      // accordions.forEach(acc => acc.classList.remove('open'));
      // accordions.forEach(acc => acc.querySelector('button').setAttribute('aria-expanded', 'false'));
      
      // Toggle current
      accordion.classList.toggle('open');
      button.setAttribute('aria-expanded', !isOpen);
    });

    // Keyboard accessibility
    button.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        button.click();
      }
    });
  });

  // ========================
  // Form Handling
  // ========================
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      // Show loading state
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spinner">
          <circle cx="12" cy="12" r="10"/>
        </svg>
        Sending...
      `;
      
      // Simulate form submission
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Success state
        submitBtn.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          Sent Successfully!
        `;
        submitBtn.classList.add('btn-success');
        
        // Reset form
        form.reset();
        
        // Show success message
        showNotification('Thank you! Your message has been sent successfully.', 'success');
        
        // Reset button after delay
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          submitBtn.classList.remove('btn-success');
        }, 3000);
        
      } catch (error) {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        showNotification('Something went wrong. Please try again.', 'error');
      }
    });
  });

  // ========================
  // Notification System
  // ========================
  function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        ${type === 'success' 
          ? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'
          : type === 'error'
          ? '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>'
          : '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>'
        }
      </svg>
      <span>${message}</span>
      <button class="notification-close" aria-label="Close notification">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
      notification.classList.add('show');
    });
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
      closeNotification(notification);
    });
    
    // Auto close after 5 seconds
    setTimeout(() => {
      closeNotification(notification);
    }, 5000);
  }

  function closeNotification(notification) {
    notification.classList.remove('show');
    notification.addEventListener('transitionend', () => {
      notification.remove();
    });
  }

  // ========================
  // Smooth Scroll for Anchor Links
  // ========================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href === '#') return;
      
      e.preventDefault();
      
      const target = document.querySelector(href);
      if (target) {
        const headerHeight = header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ========================
  // Intersection Observer for Animations
  // ========================
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all cards and sections
  document.querySelectorAll('.card, .section-header, .testimonial-card, .stat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    observer.observe(el);
  });

  // ========================
  // Lazy Loading Images
  // ========================
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  }

  // ========================
  // Active Navigation Highlighting
  // ========================
  function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.pageYOffset + 150;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const navLink = document.querySelector(`.nav a[href="#${id}"]`);

      if (navLink) {
        if (scrollPos >= top && scrollPos < top + height) {
          document.querySelectorAll('.nav a').forEach(a => a.classList.remove('active'));
          navLink.classList.add('active');
        }
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // ========================
  // Counter Animation
  // ========================
  function animateCounters() {
    const counters = document.querySelectorAll('.stat-number, .stat-value');
    
    counters.forEach(counter => {
      const target = counter.textContent;
      const numericValue = parseInt(target.replace(/[^0-9]/g, ''));
      const suffix = target.replace(/[0-9]/g, '');
      
      if (isNaN(numericValue)) return;
      
      let current = 0;
      const increment = numericValue / 50;
      const duration = 2000;
      const stepTime = duration / 50;
      
      const updateCounter = () => {
        current += increment;
        if (current < numericValue) {
          counter.textContent = Math.floor(current) + suffix;
          setTimeout(updateCounter, stepTime);
        } else {
          counter.textContent = target;
        }
      };
      
      // Only animate when in view
      const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            updateCounter();
            counterObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      
      counterObserver.observe(counter);
    });
  }

  animateCounters();

  // ========================
  // Keyboard Navigation
  // ========================
  document.addEventListener('keydown', (e) => {
    // ESC to close mobile menu
    if (e.key === 'Escape' && nav.classList.contains('mobile-open')) {
      mobileMenuBtn.click();
    }
  });

  // ========================
  // Initialize
  // ========================
  function init() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--transition-fast', '0s');
      document.documentElement.style.setProperty('--transition-normal', '0s');
      document.documentElement.style.setProperty('--transition-slow', '0s');
    }
    
    // Add loaded class to body
    document.body.classList.add('loaded');
    
    console.log('🎓 AVEDOK - Premium Educational Platform');
    console.log('📚 Ready to transform futures!');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

// ========================
// CSS for Notifications (added dynamically)
// ========================
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
  .notification {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: var(--white);
    border: 1px solid var(--border-200);
    border-radius: var(--radius-lg);
    padding: 1rem 1.25rem;
    display: flex;
    align-items: center;
    gap: .75rem;
    box-shadow: var(--shadow-lg);
    z-index: 9999;
    transform: translateX(120%);
    transition: transform .3s ease;
    max-width: 400px;
  }
  
  .notification.show {
    transform: translateX(0);
  }
  
  .notification-success {
    border-color: var(--success);
  }
  
  .notification-success svg {
    color: var(--success);
  }
  
  .notification-error {
    border-color: var(--error);
  }
  
  .notification-error svg {
    color: var(--error);
  }
  
  .notification-close {
    background: none;
    border: none;
    padding: .25rem;
    cursor: pointer;
    color: var(--text-400);
    margin-left: auto;
  }
  
  .notification-close:hover {
    color: var(--text-700);
  }
  
  .spinner {
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  .btn-success {
    background: var(--success) !important;
  }
  
  /* Mobile menu styles */
  @media (max-width: 980px) {
    .nav.mobile-open {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: var(--white);
      padding: 1rem;
      border-bottom: 1px solid var(--border-200);
      box-shadow: var(--shadow-md);
    }
    
    .nav.mobile-open a {
      padding: 1rem;
      border-bottom: 1px solid var(--border-100);
    }
    
    body.menu-open {
      overflow: hidden;
    }
  }
  
  @media (max-width: 500px) {
    .notification {
      left: 1rem;
      right: 1rem;
      max-width: none;
    }
  }
`;
document.head.appendChild(notificationStyles);
