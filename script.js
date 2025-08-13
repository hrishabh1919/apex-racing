function openLightbox(img) {
  const lightbox = document.createElement('div');
  Object.assign(lightbox.style, {
    position:'fixed', left:0, top:0, width:'100vw', height:'100vh',
    background:'rgba(0,0,0,0.85)', display:'flex',
    alignItems:'center', justifyContent:'center', zIndex:9999
  });
  lightbox.onclick = () => document.body.removeChild(lightbox);
  const imgTag=document.createElement('img');
  imgTag.src=img;
  imgTag.style.maxWidth='90vw';
  imgTag.style.maxHeight='85vh';
  imgTag.style.borderRadius='14px';
  imgTag.style.boxShadow='0 20px 60px rgba(0,0,0,0.6), 0 0 24px rgba(0,255,255,0.25)';
  lightbox.appendChild(imgTag);
  document.body.appendChild(lightbox);
}

// Splash animation logic
document.documentElement.classList.add('splash-lock');
document.body.classList.add('splash-lock');
const logoSplash = document.getElementById('splash-overlay-logo');
const carSplash = document.getElementById('splash-overlay-car');

setTimeout(() => {
  logoSplash.style.display = 'none';
  carSplash.style.display = 'flex';
}, 2500);
setTimeout(() => {
  carSplash.style.display = 'none';
  document.documentElement.classList.remove('splash-lock');
  document.body.classList.remove('splash-lock');
}, 5500);

// Carousel typewriter effect
const lines = [
  'Thank you for downloading my product, I really appreciate you.',
  'This font is free for personal use only.',
  'Find the full version at Creative Fabrica.',
  'More fonts on my Behance portfolio.',
  'Happy Designing!'
];
let lineIdx = 0, charIdx = 0;
const msgEl = document.getElementById('carousel-msg');

function typeNext() {
  const current = lines[lineIdx];
  msgEl.textContent = current.slice(0, charIdx++);
  if (charIdx <= current.length) {
    setTimeout(typeNext, 35);
  } else {
    setTimeout(() => { eraseNext(); }, 1400);
  }
}
function eraseNext() {
  const current = lines[lineIdx];
  msgEl.textContent = current.slice(0, charIdx--);
  if (charIdx >= 0) {
    setTimeout(eraseNext, 18);
  } else {
    lineIdx = (lineIdx + 1) % lines.length;
    setTimeout(typeNext, 300);
  }
}
typeNext();
