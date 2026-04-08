// /* NovaCraft — script.js */

// // ===== NAVBAR SCROLL EFFECT =====
// const navbar = document.getElementById('navbar');
// const backToTop = document.getElementById('backToTop');

// window.addEventListener('scroll', () => {
//   const y = window.scrollY;

//   // Sticky navbar style
//   if (y > 60) {
//     navbar.classList.add('scrolled');
//   } else {
//     navbar.classList.remove('scrolled');
//   }

//   // Back-to-top button
//   if (y > 400) {
//     backToTop.classList.add('visible');
//   } else {
//     backToTop.classList.remove('visible');
//   }
// });

// // ===== HAMBURGER MENU =====
// const hamburger = document.getElementById('hamburger');
// const navLinks = document.getElementById('navLinks');

// hamburger.addEventListener('click', () => {
//   hamburger.classList.toggle('open');
//   navLinks.classList.toggle('open');
//   document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
// });

// // Close menu when a link is clicked
// navLinks.querySelectorAll('a').forEach(link => {
//   link.addEventListener('click', () => {
//     hamburger.classList.remove('open');
//     navLinks.classList.remove('open');
//     document.body.style.overflow = '';
//   });
// });

// // ===== SCROLL REVEAL =====
// const revealElements = document.querySelectorAll('.reveal');

// const revealObserver = new IntersectionObserver((entries) => {
//   entries.forEach((entry, i) => {
//     if (entry.isIntersecting) {
//       // Stagger sibling cards
//       const siblings = entry.target.parentElement.querySelectorAll('.reveal');
//       let delay = 0;
//       siblings.forEach((sib, idx) => {
//         if (sib === entry.target) delay = idx * 80;
//       });
//       setTimeout(() => {
//         entry.target.classList.add('visible');
//       }, delay);
//       revealObserver.unobserve(entry.target);
//     }
//   });
// }, {
//   threshold: 0.12,
//   rootMargin: '0px 0px -40px 0px'
// });

// revealElements.forEach(el => revealObserver.observe(el));

// // ===== CONTACT FORM =====
// function handleSubmit(e) {
//   e.preventDefault();
//   const note = document.getElementById('formNote');
//   const btn = e.target.querySelector('button[type="submit"]');

//   btn.textContent = 'Sending...';
//   btn.disabled = true;

//   setTimeout(() => {
//     note.textContent = '✦ Message sent! We\'ll be in touch within 24 hours.';
//     btn.textContent = 'Send Message ✦';
//     btn.disabled = false;
//     e.target.reset();

//     setTimeout(() => { note.textContent = ''; }, 5000);
//   }, 1200);
// }

// // ===== ACTIVE NAV LINK HIGHLIGHT =====
// const sections = document.querySelectorAll('section[id]');
// const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

// const sectionObserver = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       const id = entry.target.getAttribute('id');
//       navItems.forEach(link => {
//         link.style.color = link.getAttribute('href') === `#${id}`
//           ? 'var(--clr-text)'
//           : '';
//       });
//     }
//   });
// }, { threshold: 0.35 });

// sections.forEach(sec => sectionObserver.observe(sec));

// // ===== SMOOTH BACK-TO-TOP =====
// document.getElementById('backToTop').addEventListener('click', (e) => {
//   e.preventDefault();
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// });





























/* ============================================
   NovaCraft — Improved Responsive script.js
   ============================================ */

// ===== NAVBAR + BACK TO TOP =====
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  const y = window.scrollY;

  // Navbar blur effect
  navbar.classList.toggle('scrolled', y > 60);

  // Back to top visibility
  backToTop.classList.toggle('visible', y > 400);

}, { passive: true });


// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

function closeMenu() {
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {

  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');

  // prevent background scroll when menu open
  if (navLinks.classList.contains('open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

});

// close menu on link click (mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// close menu when resizing to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 640) {
    closeMenu();
  }
});


// ===== SCROLL REVEAL ANIMATION =====
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      const siblings =
        entry.target.parentElement.querySelectorAll('.reveal');

      let delay = 0;

      siblings.forEach((sib, i) => {
        if (sib === entry.target) delay = i * 80;
      });

      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);

      revealObserver.unobserve(entry.target);

    }

  });

}, {
  threshold: 0.15,
  rootMargin: '0px 0px -60px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));


// ===== CONTACT FORM =====
function handleSubmit(e) {

  e.preventDefault();

  const note = document.getElementById('formNote');
  const btn = e.target.querySelector('button');

  btn.textContent = 'Sending...';
  btn.disabled = true;

  setTimeout(() => {

    note.textContent =
      "✦ Message sent! We'll contact you soon.";

    btn.textContent = 'Send Message ✦';
    btn.disabled = false;

    e.target.reset();

    setTimeout(() => {
      note.textContent = '';
    }, 4000);

  }, 1200);

}


// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
const navItems =
  document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      const id = entry.target.id;

      navItems.forEach(link => {

        link.classList.toggle(
          'active',
          link.getAttribute('href') === `#${id}`
        );

      });

    }

  });

}, {
  threshold: 0.4
});

sections.forEach(sec =>
  sectionObserver.observe(sec)
);


// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function (e) {

    const target = document.querySelector(
      this.getAttribute('href')
    );

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: 'smooth'
    });

  });

});


// ===== BACK TO TOP CLICK =====
backToTop.addEventListener('click', e => {

  e.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

});