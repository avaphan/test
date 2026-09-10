// Reveal each section once as it scrolls into view.
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('main section');

  if (!('IntersectionObserver' in window)) {
    // Fallback: just show everything if the browser can't observe.
    sections.forEach(section => section.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  sections.forEach(section => observer.observe(section));
});
