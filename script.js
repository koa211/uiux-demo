// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll progress bar
const progressBar = document.getElementById('progressBar');
function onScroll(){
  const h = document.documentElement;
  const scrollTop = h.scrollTop || document.body.scrollTop;
  const scrollHeight = h.scrollHeight - h.clientHeight;
  const pct = Math.max(0, Math.min(1, scrollTop / scrollHeight));
  progressBar.style.width = (pct * 100).toFixed(2) + '%';
}
document.addEventListener('scroll', onScroll, { passive:true });
onScroll();

// Scroll spy (highlights current era in sticky nav)
const spyLinks = Array.from(document.querySelectorAll('#scrollspy a'));
const targets = spyLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const idx = targets.indexOf(entry.target);
    if (idx >= 0) {
      spyLinks.forEach(a => a.classList.remove('active'));
      spyLinks[idx].classList.add('active');
    }
  });
}, { rootMargin: '-45% 0px -45% 0px', threshold: 0.001 });
targets.forEach(sec => spyObserver.observe(sec));

// Reveal animation on enter
const revealEls = document.querySelectorAll('.era .container');
revealEls.forEach(el => el.classList.add('reveal'));
const revObs = new IntersectionObserver((entries)=>{
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
}, { threshold: 0.1 });
revealEls.forEach(el => revObs.observe(el));
