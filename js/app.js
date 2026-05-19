/* ============================================================
   APP.JS — Toda la lógica del sitio
   ============================================================ */

// ── NAVEGACIÓN ──────────────────────────────────────────────
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('abierto');
});

navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('abierto'))
);


// ── MENÚ: construir tarjetas desde datos.js ──────────────────
function construirMenu() {
  Object.entries(MENU).forEach(([categoria, platos]) => {
    const panel = document.getElementById('panel-' + categoria);
    if (!panel) return;

    panel.innerHTML = platos.map(plato => `
      <div class="card" onclick="abrirPlato(this)"
        data-nombre="${plato.nombre}"
        data-emoji="${plato.emoji}"
        data-imagen="${plato.imagen}"
        data-desc="${plato.descLarga}"
        data-precio="${plato.precio}">

        <div class="card-foto">
          <img
            src="imagenes/${plato.imagen}"
            alt="${plato.nombre}"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
          />
          <!-- Si la foto no existe, se muestra el emoji -->
          <div class="card-emoji" style="display:none">${plato.emoji}</div>
        </div>

        <div class="card-cuerpo">
          <h3 class="card-nombre">${plato.nombre}</h3>
          <p class="card-desc">${plato.desc}</p>
          <div class="card-pie">
            <span class="card-precio">${plato.precio}</span>
            <span class="badge">${plato.badge}</span>
          </div>
        </div>
      </div>
    `).join('');
  });
}

// Cambiar categoría del menú
function cambiarTab(categoria, boton) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('activo'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('activo'));
  document.getElementById('panel-' + categoria).classList.add('activo');
  boton.classList.add('activo');
}


// ── LIGHTBOX DE PLATO ────────────────────────────────────────
function abrirPlato(card) {
  const lb = document.getElementById('lightboxPlato');

  const imgPath = 'imagenes/' + card.dataset.imagen;
  const wrap    = lb.querySelector('.lb-foto');

  wrap.innerHTML = `
    <img src="${imgPath}" alt="${card.dataset.nombre}"
      onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
    />
    <div class="lb-emoji" style="display:none">${card.dataset.emoji}</div>
  `;

  lb.querySelector('.lb-nombre').textContent = card.dataset.nombre;
  lb.querySelector('.lb-desc').textContent   = card.dataset.desc;
  lb.querySelector('.lb-precio').textContent = card.dataset.precio;

  lb.classList.add('abierto');
  document.body.style.overflow = 'hidden';
}

function cerrarPlato(e) {
  const lb = document.getElementById('lightboxPlato');
  if (!e || e.target === lb || e.target.closest('.lb-cerrar')) {
    lb.classList.remove('abierto');
    document.body.style.overflow = '';
  }
}


// ── GALERÍA: construir desde datos.js ────────────────────────
function construirGaleria() {
  const grid = document.getElementById('galeriaGrid');
  if (!grid) return;

  grid.innerHTML = GALERIA.map((item, i) => `
    <div class="gal-item" onclick="abrirFoto(${i})">
      <img
        src="imagenes/${item.imagen}"
        alt="${item.texto}"
        loading="lazy"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
      />
      <!-- Si la foto no existe, se muestra el emoji con color de fondo -->
      <div class="gal-emoji" style="display:none">${item.emoji}</div>
      <div class="gal-overlay">
        <span class="gal-texto">${item.texto}</span>
      </div>
    </div>
  `).join('');
}

// Lightbox de galería con navegación
let fotoActual = 0;

function abrirFoto(indice) {
  fotoActual = indice;
  const lb   = document.getElementById('lightboxGaleria');
  const item = GALERIA[indice];

  lb.querySelector('.galb-img').src         = 'imagenes/' + item.imagen;
  lb.querySelector('.galb-img').alt         = item.texto;
  lb.querySelector('.galb-caption').textContent = item.texto;

  lb.classList.add('abierto');
  document.body.style.overflow = 'hidden';
}

function cerrarGaleria(e) {
  const lb = document.getElementById('lightboxGaleria');
  if (!e || e.target === lb || e.target.closest('.lb-cerrar')) {
    lb.classList.remove('abierto');
    document.body.style.overflow = '';
  }
}

function fotoAnterior() { abrirFoto((fotoActual - 1 + GALERIA.length) % GALERIA.length); }
function fotoSiguiente() { abrirFoto((fotoActual + 1) % GALERIA.length); }


// ── FORMULARIO DE RESERVA ────────────────────────────────────
const WHATSAPP = '59163456789'; // ← CAMBIA ESTO por tu número real

function enviarReserva() {
  const nombre   = document.getElementById('rNombre').value.trim();
  const telefono = document.getElementById('rTelefono').value.trim();
  const fecha    = document.getElementById('rFecha').value;
  const hora     = document.getElementById('rHora').value;
  const personas = document.getElementById('rPersonas').value;
  const ocasion  = document.getElementById('rOcasion').value;
  const notas    = document.getElementById('rNotas').value.trim();

  if (!nombre || !telefono || !fecha || !hora || !personas) {
    mostrarToast('⚠️ Completa todos los campos obligatorios.', 'error');
    return;
  }

  const [a, m, d] = fecha.split('-');
  const mensaje = encodeURIComponent(
    `🍽️ *Nueva reserva — El Sabor Paceño*\n\n` +
    `👤 Nombre:   ${nombre}\n` +
    `📅 Fecha:    ${d}/${m}/${a} a las ${hora}\n` +
    `👥 Personas: ${personas}\n` +
    `📞 Teléfono: ${telefono}\n` +
    (ocasion ? `🎉 Ocasión:  ${ocasion}\n` : '') +
    (notas   ? `📝 Notas:   ${notas}` : '')
  );

  document.getElementById('camposReserva').style.display = 'none';
  document.getElementById('exitoReserva').style.display  = 'block';
  mostrarToast('✅ ¡Reserva enviada! Abriendo WhatsApp…');

  setTimeout(() => window.open(`https://wa.me/${WHATSAPP}?text=${mensaje}`, '_blank'), 1200);
}

function nuevaReserva() {
  document.getElementById('camposReserva').style.display = '';
  document.getElementById('exitoReserva').style.display  = 'none';
  document.getElementById('formReserva').reset();
}


// ── TOAST ────────────────────────────────────────────────────
function mostrarToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('visible');
  setTimeout(() => t.classList.remove('visible'), 4000);
}


// ── SCROLL REVEAL ────────────────────────────────────────────
function initReveal() {
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    }),
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}


// ── TECLADO ──────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { cerrarPlato(); cerrarGaleria(); }
  const galLb = document.getElementById('lightboxGaleria');
  if (galLb.classList.contains('abierto')) {
    if (e.key === 'ArrowLeft')  fotoAnterior();
    if (e.key === 'ArrowRight') fotoSiguiente();
  }
});


// ── ARRANQUE ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Bloquear fechas pasadas
  document.getElementById('rFecha').min = new Date().toISOString().split('T')[0];

  construirMenu();
  construirGaleria();
  initReveal();
});
