/* ============================================
   EMTERRACY — Shared JavaScript
   Handles: mobile menu, scroll effects, 
   fade-in animations, and quote form.
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ---------- Navbar scroll effect ----------
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // ---------- Mobile menu toggle ----------
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      // Update icon
      hamburger.innerHTML = isOpen
        ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
        : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
    });
  }

  // ---------- Scroll fade-in animations ----------
  const fadeElements = document.querySelectorAll('.fade-up');
  if (fadeElements.length > 0) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '-50px' });

    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ---------- Service checkbox toggle (Get Quote page) ----------
  const serviceCheckboxes = document.querySelectorAll('.service-checkbox');
  serviceCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener('click', function () {
      this.classList.toggle('selected');
    });
  });

  // ---------- Quote form submission ----------
  const quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const contact = document.getElementById('contact').value.trim();
      const address = document.getElementById('address').value.trim();
      const selected = document.querySelectorAll('.service-checkbox.selected');

      if (!name || !contact || !address) {
        showToast('Please fill in all required fields.', 'error');
        return;
      }

      if (selected.length === 0) {
        showToast('Please select at least one service.', 'error');
        return;
      }

      // Gather selected service names
      var services = [];
      selected.forEach(function (el) {
        services.push(el.getAttribute('data-service'));
      });

      // Show success state
      var formSection = document.getElementById('form-section');
      var successSection = document.getElementById('success-section');
      if (formSection && successSection) {
        formSection.style.display = 'none';
        successSection.style.display = 'block';

        // Fill in summary
        var summaryName = document.getElementById('summary-name');
        var summaryServices = document.getElementById('summary-services');
        var summaryAddress = document.getElementById('summary-address');
        if (summaryName) summaryName.textContent = name;
        if (summaryServices) summaryServices.textContent = services.join(', ');
        if (summaryAddress) summaryAddress.textContent = address;

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      showToast('Quote request submitted! We\'ll be in touch within 24 hours.', 'success');
    });
  }

  // ---------- Toast notification ----------
  function showToast(message, type) {
    // Remove existing toast
    var existing = document.querySelector('.toast');
    if (existing) existing.remove();

    var toast = document.createElement('div');
    toast.className = 'toast toast-' + type;
    toast.textContent = message;
    document.body.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(function () {
      toast.classList.add('show');
    });

    // Auto-remove
    setTimeout(function () {
      toast.classList.remove('show');
      setTimeout(function () { toast.remove(); }, 300);
    }, 4000);
  }

  // ---------- Year in footer ----------
  var yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
