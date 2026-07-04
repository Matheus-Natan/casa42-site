function showPage(id, navEl) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  if (navEl) {
    navEl.classList.add('active');
  } else {
    const map = { home: 'Início', programacao: 'Programação', sobre: 'Quem Somos', geracao: 'Geração On' };
    document.querySelectorAll('nav a').forEach(a => {
      if (a.textContent.trim() === map[id]) a.classList.add('active');
    });
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(observeElements, 100);
}

function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.page.active .fade-up').forEach(el => {
    if (!el.classList.contains('visible')) observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(observeElements, 200);
});
