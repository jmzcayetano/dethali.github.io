
// carrusel cada 6 segundos 
const opinionesCarousel = document.querySelector('#opinionesCarousel');
const carousel = new bootstrap.Carousel(opinionesCarousel, {
  interval: 6000,
  ride: 'carousel',
  pause: false, // no se detiene al pasar el mouse
  wrap: true    // vuelve al inicio después del último
});


document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const parent = q.parentElement;
    const answer = parent.querySelector('.faq-a');
    const icon = q.querySelector('i');

    // Cierra todos los demás FAQ antes de abrir otro
    document.querySelectorAll('.faq-a').forEach(a => {
      if (a !== answer) a.style.display = 'none';
    });
    document.querySelectorAll('.faq-q i').forEach(i => {
      if (i !== icon) i.style.transform = 'rotate(0deg)';
    });

    // Alterna el actual
    const visible = answer.style.display === 'block';
    answer.style.display = visible ? 'none' : 'block';
    icon.style.transform = visible ? 'rotate(0deg)' : 'rotate(180deg)';
  });
});


// Efecto fade-in al hacer scroll
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('appear');
  });
});
fadeElements.forEach(el => observer.observe(el));



// Efecto fade-in
const footerElements = document.querySelectorAll('footer .fade-in');
const footerObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('appear');
  });
});
footerElements.forEach(el => footerObserver.observe(el));

// Newsletter
document.getElementById('newsletterForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('💌 ¡Gracias por suscribirte a Dethali! Muy pronto recibirás novedades encantadoras 🎀');
  this.reset();
});


// NAV scroll class
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('scrolled'); else navbar.classList.remove('scrolled');
});

// Modal dinámico WhatsApp
const modalConsulta = document.getElementById('modalConsulta');
modalConsulta?.addEventListener('show.bs.modal', function (event) {
  const button = event.relatedTarget;
  const producto = button?.getAttribute('data-producto') ?? 'Detalle';
  document.getElementById('productoSeleccionado').textContent = producto;

  // WHATSAPP por número
  const numero = "51924070879";
  const mensaje = encodeURIComponent(`Hola 👋, quisiera más información sobre: ${producto}`);
  document.getElementById('whatsappLink').href = `https://wa.me/${numero}?text=${mensaje}`;
});

// Floating WhatsApp default link + pulse
const whatsappFab = document.getElementById('whatsappFab');
const numero = "51924070879"; // <-- reemplaza aquí también
whatsappFab.href = `https://wa.me/${numero}?text=${encodeURIComponent('Hola 👋, quiero información sobre sus cajas de regalo')}`;

// FAQ toggle
document.querySelectorAll('.faq .faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const next = q.nextElementSibling;
    const open = q.getAttribute('data-open') === 'true';
    if (open) {
      next.style.display = 'none';
      q.setAttribute('data-open', 'false');
      q.querySelector('i')?.classList.remove('rotated');
    } else {
      next.style.display = 'block';
      q.setAttribute('data-open', 'true');
    }
  });
});

// IntersectionObserver reveal for sections (subtle)
const reveal = (selector) => {
  const els = document.querySelectorAll(selector);
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.style.opacity = 1; e.target.style.transform = 'none'; io.unobserve(e.target); }
    });
  }, { threshold: .12 });
  els.forEach(el => {
    el.style.opacity = 0; el.style.transform = 'translateY(12px)'; io.observe(el);
  });
};
reveal('section');