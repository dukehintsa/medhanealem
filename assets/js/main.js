// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Hero slideshow
const slides = document.querySelectorAll('.hero-slides .slide');
let current = 0;
if (slides.length > 1) {
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 6000);
}

// Gallery lightbox
const lightbox = document.querySelector('.lightbox');
const lbImg = lightbox.querySelector('img');
document.querySelectorAll('.gallery a').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    lbImg.src = a.href;
    lbImg.alt = a.querySelector('img').alt;
    lightbox.hidden = false;
  });
});
lightbox.addEventListener('click', e => {
  if (e.target !== lbImg) lightbox.hidden = true;
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') lightbox.hidden = true; });

// Share the GoFundMe campaign
const GFM_URL = 'https://gofund.me/287dd9adf';
document.querySelector('.share-btn').addEventListener('click', async e => {
  const btn = e.currentTarget;
  const data = {
    title: "Support Debre Mehret Medhane Alem's Building Fund",
    text: 'Help us build our new church in Jamestown, NC. Together in Faith, We Build His House.',
    url: GFM_URL,
  };
  if (navigator.share) {
    try { await navigator.share(data); } catch (_) { /* user cancelled */ }
  } else {
    await navigator.clipboard.writeText(GFM_URL);
    const old = btn.textContent;
    btn.textContent = 'Link copied!';
    setTimeout(() => (btn.textContent = old), 2000);
  }
});

// Copy bank detail buttons
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      btn.textContent = 'Copied!';
      setTimeout(() => (btn.textContent = 'Copy'), 1500);
    } catch (_) { /* clipboard unavailable */ }
  });
});
