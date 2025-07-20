document.addEventListener('DOMContentLoaded', () => {
    // Select all sections to animate on scroll
    const sections = document.querySelectorAll('section');
  
    // IntersectionObserver callback
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate the section in using Anime.js
          anime({
            targets: entry.target,
            opacity: [0, 1],
            translateY: [50, 0],
            easing: 'easeOutCubic',
            duration: 800,
          });
          obs.unobserve(entry.target); // Animate only once
        }
      });
    }, observerOptions);
  
    // Observe each section
    sections.forEach(section => {
      observer.observe(section);
    });
  
    // Button hover animation
    const btn = document.querySelector('.btn');
    if (btn) {
      btn.addEventListener('mouseenter', () => {
        anime({
          targets: btn,
          scale: 1.05,
          duration: 300,
          easing: 'easeOutQuad'
        });
      });
      btn.addEventListener('mouseleave', () => {
        anime({
          targets: btn,
          scale: 1,
          duration: 300,
          easing: 'easeOutQuad'
        });
      });
    }

  // 1. Hero Title and Subtitle Animation on Page Load
  const heroTitle = document.querySelector('.hero-section h1');
  const heroSubtitle = document.querySelector('.hero-section p');
  anime({
    targets: heroTitle,
    opacity: [0, 1],
    translateY: [40, 0],
    duration: 900,
    easing: 'easeOutCubic',
    delay: 200
  });
  anime({
    targets: heroSubtitle,
    opacity: [0, 1],
    translateY: [40, 0],
    duration: 900,
    easing: 'easeOutCubic',
    delay: 500
  });

  // 2. Sequential Pop-in for Feature Icons
  const featureIcons = document.querySelectorAll('.feature-item i');
  const featuresSection = document.querySelector('.features-section');
  let featuresAnimated = false;
  if (featuresSection) {
    const featuresObs = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !featuresAnimated) {
          anime({
            targets: featureIcons,
            scale: [0, 1],
            opacity: [0, 1],
            easing: 'easeOutBack',
            duration: 700,
            delay: anime.stagger(150)
          });
          featuresAnimated = true;
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    featuresObs.observe(featuresSection);
  }

  // 3. Floating Animation for Download Button
  if (btn) {
    anime({
      targets: btn,
      translateY: [0, -8, 0],
      duration: 2500,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine'
    });
  }

  // 4. Staggered Fade-in for Screenshots
  const screenshotsSection = document.querySelector('.screenshots-section');
  const screenshotImgs = document.querySelectorAll('.screens-grid img');
  let screenshotsAnimated = false;
  if (screenshotsSection) {
    const screenshotsObs = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !screenshotsAnimated) {
          anime({
            targets: screenshotImgs,
            opacity: [0, 1],
            translateY: [40, 0],
            duration: 700,
            delay: anime.stagger(200)
          });
          screenshotsAnimated = true;
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    screenshotsObs.observe(screenshotsSection);
  }

  // 5. Footer Fade/Slide-in on Scroll
  const footer = document.querySelector('footer.footer');
  if (footer) {
    footer.style.opacity = 0;
    footer.style.transform = 'translateY(50px)';
    const footerObs = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: footer,
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 800,
            easing: 'easeOutCubic'
          });
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    footerObs.observe(footer);
  }

  // Feature card hover animation
  const featureCards = document.querySelectorAll('.feature-item');
  featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      anime({
        targets: card,
        scale: 1.05,
        translateY: -8,
        duration: 350,
        easing: 'easeOutQuad'
      });
    });
    card.addEventListener('mouseleave', () => {
      anime({
        targets: card,
        scale: 1,
        translateY: 0,
        duration: 350,
        easing: 'easeOutQuad'
      });
    });
  });

  // Animate background paws
  const paws = document.querySelectorAll('.paw');
  paws.forEach((paw, i) => {
    anime({
      targets: paw,
      translateY: [0, -30, 0],
      direction: 'alternate',
      loop: true,
      duration: 3500 + i * 700,
      delay: i * 400,
      easing: 'easeInOutSine'
    });
    anime({
      targets: paw,
      translateX: [0, 20 * ((i % 2) ? 1 : -1), 0],
      direction: 'alternate',
      loop: true,
      duration: 5000 + i * 600,
      delay: 200 + i * 300,
      easing: 'easeInOutSine'
    });
  });
  });
  