/* ═══════════════════════════════════════════
   RANG KARAVAN — script.js
   Pakistani Artisan Bag Store
   Real images for: clutch, crossbody
   SVG illustrations for: potli, jhola, tote, travel
═══════════════════════════════════════════ */
'use strict';

/* ══ HELPERS ══ */
const $  = id => document.getElementById(id);
const Rs = n  => 'Rs. ' + n.toLocaleString('en-PK');

let _uid = 0;
function uid() { return 'u' + (++_uid); }
function shade(hex) {
  const r = parseInt(hex.slice(1,3),16),
        g = parseInt(hex.slice(3,5),16),
        b = parseInt(hex.slice(5,7),16);
  return `rgb(${Math.max(0,r-40)},${Math.max(0,g-28)},${Math.max(0,b-22)})`;
}

/* ══ SVG BAG GENERATORS ══ */

function svgPotli(c1, c2, c3) {
  const id = uid();
  return `<svg viewBox="0 0 400 460" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="pg${id}" cx="38%" cy="28%" r="68%">
        <stop offset="0%" stop-color="${c1}"/>
        <stop offset="100%" stop-color="${shade(c1)}"/>
      </radialGradient>
    </defs>
    <rect width="400" height="460" fill="${c3}" opacity=".1"/>
    <path d="M200 55 Q98 80 78 185 Q58 292 118 360 Q158 410 200 416 Q242 410 282 360 Q342 292 322 185 Q302 80 200 55Z" fill="url(#pg${id})"/>
    <path d="M138 55 Q200 34 262 55" stroke="${c2}" stroke-width="3" fill="none"/>
    <circle cx="200" cy="22" r="8" fill="${c2}"/>
    <circle cx="200" cy="220" r="70" fill="none" stroke="${c2}" stroke-width="1.1" opacity=".55"/>
    <polygon points="200,154 215,182 246,182 224,202 232,232 200,213 168,232 176,202 154,182 185,182" fill="none" stroke="${c3}" stroke-width="1.3" opacity=".85"/>
    <circle cx="200" cy="220" r="12" fill="${c3}" opacity=".6"/>
    <path d="M162,198 Q200,178 238,198 Q255,220 238,242 Q200,262 162,242 Q145,220 162,198Z" fill="none" stroke="${c2}" stroke-width=".9" opacity=".5"/>
    <circle cx="148" cy="268" r="5" fill="${c3}" opacity=".5"/>
    <circle cx="200" cy="282" r="5" fill="${c3}" opacity=".5"/>
    <circle cx="252" cy="268" r="5" fill="${c3}" opacity=".5"/>
    <line x1="162" y1="398" x2="150" y2="444" stroke="${c3}" stroke-width="2.2"/>
    <line x1="200" y1="408" x2="200" y2="454" stroke="${c3}" stroke-width="2.2"/>
    <line x1="238" y1="398" x2="250" y2="444" stroke="${c3}" stroke-width="2.2"/>
    <circle cx="150" cy="449" r="6" fill="${c3}" opacity=".9"/>
    <circle cx="200" cy="459" r="6" fill="${c3}" opacity=".9"/>
    <circle cx="250" cy="449" r="6" fill="${c3}" opacity=".9"/>
  </svg>`;
}

function svgJhola(c1, c2, c3) {
  const id = uid();
  return `<svg viewBox="0 0 400 460" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="jp${id}" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
        <path d="M0,11 L11,0 L22,11 L11,22 Z" fill="none" stroke="${c3}" stroke-width=".5" opacity=".4"/>
        <circle cx="11" cy="11" r="2" fill="${c3}" opacity=".2"/>
      </pattern>
      <linearGradient id="jg${id}" x1="0" y1="0" x2=".4" y2="1">
        <stop offset="0%" stop-color="${c1}"/>
        <stop offset="100%" stop-color="${shade(c1)}"/>
      </linearGradient>
    </defs>
    <rect width="400" height="460" fill="${c3}" opacity=".1"/>
    <path d="M68 165 Q68 130 108 122 L292 122 Q332 130 332 165 L332 358 Q334 392 294 395 L106 395 Q66 392 68 358Z" fill="url(#jg${id})"/>
    <rect x="68" y="122" width="264" height="273" fill="url(#jp${id})" opacity=".35"/>
    <path d="M148 122 L148 68 Q148 42 200 42 Q252 42 252 68 L252 122" stroke="${c2}" stroke-width="2.2" fill="none"/>
    <line x1="68" y1="220" x2="332" y2="220" stroke="${c2}" stroke-width=".8" opacity=".28"/>
    <rect x="148" y="248" width="104" height="80" rx="2" fill="none" stroke="${c2}" stroke-width="1.1"/>
    <ellipse cx="200" cy="248" rx="18" ry="10" fill="none" stroke="${c2}" stroke-width="1"/>
    <line x1="68" y1="310" x2="48" y2="355" stroke="${c3}" stroke-width="1.8"/>
    <circle cx="48" cy="360" r="5" fill="${c3}" opacity=".8"/>
    <line x1="332" y1="310" x2="352" y2="355" stroke="${c3}" stroke-width="1.8"/>
    <circle cx="352" cy="360" r="5" fill="${c3}" opacity=".8"/>
  </svg>`;
}

function svgTote(c1, c2, c3) {
  const id = uid();
  return `<svg viewBox="0 0 400 460" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="tg${id}" x1="0" y1="0" x2=".5" y2="1">
        <stop offset="0%" stop-color="${c1}"/>
        <stop offset="100%" stop-color="${shade(c1)}"/>
      </linearGradient>
    </defs>
    <rect width="400" height="460" fill="${c3}" opacity=".1"/>
    <path d="M72 188 Q72 152 115 144 L285 144 Q328 152 328 188 L340 370 Q343 402 308 404 L92 404 Q57 402 60 370Z" fill="url(#tg${id})"/>
    <path d="M152 144 L152 88 Q152 64 200 64 Q248 64 248 88 L248 144" fill="none" stroke="${c2}" stroke-width="2.5"/>
    <line x1="90" y1="232" x2="310" y2="232" stroke="${c2}" stroke-width=".8" opacity=".28"/>
    <rect x="172" y="264" width="56" height="42" rx="3" fill="none" stroke="${c2}" stroke-width="1.4"/>
    <circle cx="200" cy="285" r="7" fill="${c2}" opacity=".65"/>
    <circle cx="105" cy="180" r="10" fill="none" stroke="${c3}" stroke-width=".8" opacity=".4"/>
    <circle cx="295" cy="180" r="10" fill="none" stroke="${c3}" stroke-width=".8" opacity=".4"/>
    <circle cx="105" cy="380" r="10" fill="none" stroke="${c3}" stroke-width=".8" opacity=".4"/>
    <circle cx="295" cy="380" r="10" fill="none" stroke="${c3}" stroke-width=".8" opacity=".4"/>
    <path d="M80 188 L80 375" stroke="${c2}" stroke-width=".6" stroke-dasharray="4,6" opacity=".22"/>
    <path d="M320 188 L320 375" stroke="${c2}" stroke-width=".6" stroke-dasharray="4,6" opacity=".22"/>
  </svg>`;
}

function svgTravel(c1, c2, c3) {
  const id = uid();
  return `<svg viewBox="0 0 400 460" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="tvg${id}" x1="0" y1="0" x2=".6" y2="1">
        <stop offset="0%" stop-color="${c1}"/>
        <stop offset="100%" stop-color="${shade(c1)}"/>
      </linearGradient>
      <pattern id="tarp${id}" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M0,0 L20,20 M20,0 L0,20" stroke="${c3}" stroke-width=".4" opacity=".15"/>
      </pattern>
    </defs>
    <rect width="400" height="460" fill="${c3}" opacity=".1"/>
    <rect x="48" y="138" width="304" height="278" rx="10" fill="url(#tvg${id})"/>
    <rect x="48" y="138" width="304" height="278" rx="10" fill="url(#tarp${id})"/>
    <path d="M152 138 L152 96 Q152 72 200 72 Q248 72 248 96 L248 138" fill="none" stroke="${c2}" stroke-width="2.5"/>
    <rect x="48" y="200" width="304" height="6" fill="${c3}" opacity=".5"/>
    <rect x="48" y="348" width="304" height="6" fill="${c3}" opacity=".5"/>
    <polygon points="200,235 210,256 234,256 216,270 222,294 200,280 178,294 184,270 166,256 190,256" fill="none" stroke="${c3}" stroke-width="1.2" opacity=".8"/>
    <circle cx="200" cy="265" r="8" fill="${c3}" opacity=".5"/>
    <line x1="68" y1="206" x2="332" y2="206" stroke="${c2}" stroke-width="1" opacity=".4" stroke-dasharray="5,3"/>
    <circle cx="92" cy="420" r="12" fill="${c2}" opacity=".5"/>
    <circle cx="308" cy="420" r="12" fill="${c2}" opacity=".5"/>
    <rect x="86" y="130" width="22" height="10" rx="5" fill="${c2}" opacity=".5"/>
    <rect x="292" y="130" width="22" height="10" rx="5" fill="${c2}" opacity=".5"/>
  </svg>`;
}

/* real image renderer — returns img tag HTML */
function imgCard(src, alt) {
  return `<img src="${src}" alt="${alt}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy"/>`;
}

/* ══ PRODUCT DATA ══
   imgType: 'svg' | 'img'
   For 'img' products, imgSrc should be the data-URI from images.js
   svgArgs: [c1, c2, c3] for SVG bags
   svgFn: function ref for SVG bags
══════════════════════════════════════════ */
const products = [
  /* ── POTLI ── */
  {
    id:1, name:'Multani Shaadi Potli', cat:'potli', badge:'New',
    price:8500,
    imgType:'img', imgSrc:'multani shadi potli.jpg',
    desc:'Hand-embroidered in Multan\'s Kashi tradition. Red velvet with golden thread star motif and silk tassels.',
    craft:'Multani Kashi Embroidery', origin:'Multan, Punjab', material:'Velvet + silk thread', size:'22×22 cm'
  },
  {
    id:2, name:'Balochi Mirror Potli', cat:'potli', badge:'',
    price:9800,
    imgType:'img', imgSrc:'balochi potli',
    desc:'Balochi hand-embroidery with traditional shisha mirror work. Deep indigo silk with golden thread detailing.',
    craft:'Balochi Mirror Work', origin:'Quetta, Balochistan', material:'Silk + shisha mirrors', size:'24×24 cm'
  },
  
  /* ── CLUTCH (real photos) ── */
  {
    id:4, name:'Pearl Bridal Clutch', cat:'clutch', badge:'Limited',
    price:12500,
    imgType:'img', imgSrc: null, imgKey:'clutch',
    desc:'Handcrafted pearl-beaded clutch with crystal ring closure. The ultimate wedding evening accessory.',
    craft:'Pearl Beadwork', origin:'Karachi, Sindh', material:'Faux pearls + satin', size:'18×10 cm'
  },
  {
    id:5, name:'Noir Suede Clutch', cat:'clutch', badge:'New',
    price:9200,
    imgType:'img', imgSrc: null, imgKey:'clutchs',
    desc:'Minimalist black suede clutch with gold chain strap and brass bar hardware. Effortless evening elegance.',
    craft:'Lahori Suede Work', origin:'Lahore, Punjab', material:'Premium suede', size:'28×14 cm'
  },
  /* ── JHOLA ── */
  
  /* ── CROSSBODY (real photo) ── */
  {
    id:9, name:'Ivory Pebble Crossbody', cat:'crossbody', badge:'New',
    price:11800,
    imgType:'img', imgSrc: null, imgKey:'crossbody',
    desc:'Soft pebble-grain leather crossbody with embroidered geometric strap inspired by Pakistani tilework. Spacious triple-zip design.',
    craft:'Embroidered Strap Weave', origin:'Lahore, Punjab', material:'Pebble grain leather', size:'26×18 cm'
  },
  /* extra clutch / potli */
  
];

/* ══ INIT IMAGE SOURCES from images.js globals ══ */
function resolveImages() {
  products.forEach(p => {
    if (p.imgType === 'img') {
      if (p.imgKey === 'clutch')     p.imgSrc = typeof IMG_CLUTCH    !== 'undefined' ? IMG_CLUTCH    : '';
      if (p.imgKey === 'clutchs')    p.imgSrc = typeof IMG_CLUTCHS   !== 'undefined' ? IMG_CLUTCHS   : '';
      if (p.imgKey === 'crossbody')  p.imgSrc = typeof IMG_CROSSBODY !== 'undefined' ? IMG_CROSSBODY : '';
    }
  });
}

/* ══ RENDER PRODUCT IMAGE ══ */
function renderImg(p) {
  if (p.imgType === 'img' && p.imgSrc) {
    return `<img src="${p.imgSrc}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy"/>`;
  }
  return p.svgFn(p.c1, p.c2, p.c3);
}

/* ══ STATE ══ */
const SHOW_INIT = 6;
let currentCat = 'all';
let showAll    = false;
let cart       = [];

/* ══ NAVBAR ══ */
const navbar = $('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 60), { passive:true });

/* ══ SMOOTH SCROLL ══ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior:'smooth', block:'start' }); }
  });
});

/* ══ MOBILE MENU ══ */
const mobOv = $('mob-overlay');
$('hamburger').addEventListener('click', () => { mobOv.classList.add('open'); document.body.style.overflow='hidden'; });
$('mob-close').addEventListener('click', closeMob);
document.querySelectorAll('.mob-link').forEach(l => l.addEventListener('click', closeMob));
function closeMob() { mobOv.classList.remove('open'); document.body.style.overflow=''; }

/* ══ HERO IMAGE ══ */
function setHeroImg() {
  const img = $('hero-bag-img');
  if (img) img.src = 'cover.webp';
}

/* ══ FILTERS ══ */
document.querySelectorAll('.fb').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.fb').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCat = btn.dataset.cat;
    showAll = false;
    renderProducts();
  });
});

/* ══ PRODUCTS ══ */
function filtered() {
  return currentCat === 'all' ? products : products.filter(p => p.cat === currentCat);
}

function renderProducts() {
  const grid    = $('prod-grid');
  const moreBtn = $('btn-more');
  const list    = filtered();
  const shown   = showAll ? list : list.slice(0, SHOW_INIT);

  grid.innerHTML = '';
  shown.forEach((p, i) => {
    const inCart = cart.some(c => c.id === p.id);
    const card   = document.createElement('div');
    card.className   = 'p-card';
    card.dataset.id  = p.id;
    card.style.animationDelay = `${i * 0.07}s`;
    card.innerHTML = `
      <div class="p-img-wrap">
        ${renderImg(p)}
        ${p.badge ? `<span class="p-badge${p.badge==='New'?' new-badge':''}">${p.badge}</span>` : ''}
        <div class="p-acts">
          <button class="act-b" data-act="view"  title="Quick View"><i class="fa-regular fa-eye"></i></button>
          <button class="act-b" data-act="wish"  title="Wishlist"><i class="fa-regular fa-heart"></i></button>
        </div>
      </div>
      <div class="p-body">
        <p class="p-cat">${p.cat.charAt(0).toUpperCase()+p.cat.slice(1)}</p>
        <h3 class="p-name">${p.name}</h3>
        <p class="p-desc">${p.desc}</p>
        <div class="p-foot">
          <span class="p-price">${Rs(p.price)}</span>
          <button class="p-atc${inCart?' added':''}" data-act="atc">${inCart?'Added ✓':'Add to Cart'}</button>
        </div>
      </div>`;
    grid.appendChild(card);
  });

  if (list.length <= SHOW_INIT) { moreBtn.style.display = 'none'; }
  else { moreBtn.style.display = 'block'; moreBtn.textContent = showAll ? 'Show Less' : 'Show More'; }
}

/* ══ CARD CLICK ══ */
$('prod-grid').addEventListener('click', e => {
  const card = e.target.closest('.p-card');
  if (!card) return;
  const p   = products.find(x => x.id === +card.dataset.id);
  if (!p) return;
  const act = e.target.closest('[data-act]');
  if (act) {
    const a = act.dataset.act;
    if (a === 'atc')  { addToCart(p, act); return; }
    if (a === 'view') { openModal(p);      return; }
    if (a === 'wish') {
      act.innerHTML = act.innerHTML.includes('fa-regular')
        ? '<i class="fa-solid fa-heart" style="color:var(--saffron)"></i>'
        : '<i class="fa-regular fa-heart"></i>';
      return;
    }
  }
  openModal(p);
});

/* ══ SHOW MORE ══ */
$('btn-more').addEventListener('click', () => {
  showAll = !showAll;
  renderProducts();
  if (!showAll) $('collections').scrollIntoView({ behavior:'smooth', block:'start' });
});

/* ══ CART ══ */
function addToCart(p, btn) {
  if (cart.find(c => c.id === p.id)) { openCart(); return; }
  cart.push(p);
  syncCart();
  if (btn) { btn.textContent = 'Added ✓'; btn.classList.add('added'); }
  openCart();
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  syncCart();
  renderCartItems();
  renderProducts();
}

function syncCart() {
  const badge = $('cart-count');
  badge.textContent = cart.length;
  badge.classList.toggle('show', cart.length > 0);
  $('cart-tot-price').textContent = Rs(cart.reduce((s,c) => s+c.price, 0));
  $('cart-foot').style.display = cart.length ? '' : 'none';
}

function renderCartItems() {
  const body = $('cart-body');
  if (!cart.length) {
    body.innerHTML = `<div class="cart-empty">
      <i class="fa-light fa-bag-shopping"></i>
      <p>Your cart is empty</p>
      <p class="ur-empty">آپ کا کارٹ خالی ہے</p>
    </div>`; return;
  }
  body.innerHTML = '';
  cart.forEach(p => {
    const item = document.createElement('div');
    item.className = 'c-item';
    // thumb: real img or svg
    const thumb = p.imgType === 'img' && p.imgSrc
      ? `<img src="${p.imgSrc}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;"/>`
      : p.svgFn(p.c1, p.c2, p.c3);
    item.innerHTML = `
      <div class="c-img">${thumb}</div>
      <div class="c-info">
        <p class="c-name">${p.name}</p>
        <p class="c-cat">${p.cat}</p>
        <p class="c-price">${Rs(p.price)}</p>
      </div>
      <button class="c-rm" data-id="${p.id}" title="Remove"><i class="fa-solid fa-xmark"></i></button>`;
    body.appendChild(item);
  });
  body.querySelectorAll('.c-rm').forEach(b => b.addEventListener('click', () => removeFromCart(+b.dataset.id)));
}

function openCart()  { renderCartItems(); $('cart-side').classList.add('open'); $('cart-veil').classList.add('open'); document.body.style.overflow='hidden'; }
function closeCart() { $('cart-side').classList.remove('open'); $('cart-veil').classList.remove('open'); document.body.style.overflow=''; }

$('cart-btn').addEventListener('click', openCart);
$('cart-x').addEventListener('click', closeCart);
$('cart-veil').addEventListener('click', closeCart);

/* ══ MODAL ══ */
function openModal(p) {
  const inner = $('modal-inner');
  const imgHtml = p.imgType === 'img' && p.imgSrc
    ? `<div class="m-img"><img src="${p.imgSrc}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;display:block;"/></div>`
    : `<div class="m-img">${p.svgFn(p.c1, p.c2, p.c3)}</div>`;
  inner.innerHTML = `
    ${imgHtml}
    <div class="m-info">
      <p class="m-cat">${p.cat.charAt(0).toUpperCase()+p.cat.slice(1)}${p.badge?' · '+p.badge:''}</p>
      <h2 class="m-name">${p.name}</h2>
      <p class="m-price">${Rs(p.price)}</p>
      <p class="m-desc">${p.desc} Each piece is handmade to order and ships within 5–10 business days.</p>
      <div class="m-specs">
        <div class="m-spec"><span>Craft</span><span>${p.craft}</span></div>
        <div class="m-spec"><span>Origin</span><span>${p.origin}</span></div>
        <div class="m-spec"><span>Material</span><span>${p.material}</span></div>
        <div class="m-spec"><span>Size</span><span>${p.size}</span></div>
        <div class="m-spec"><span>Shipping</span><span>Nationwide + International</span></div>
      </div>
      <button class="m-atc" id="m-atc-btn">${cart.find(c=>c.id===p.id)?'Already in Cart ✓':'Add to Cart'}</button>
    </div>`;
  $('m-atc-btn').addEventListener('click', function() {
    addToCart(p, null);
    this.textContent = 'Added to Cart ✓';
    this.style.background = 'var(--saffron)'; this.style.color = '#fff';
    renderProducts();
  });
  $('prod-modal').classList.add('open');
  $('modal-veil').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  $('prod-modal').classList.remove('open');
  $('modal-veil').classList.remove('open');
  document.body.style.overflow = '';
}
$('modal-x').addEventListener('click', closeModal);
$('modal-veil').addEventListener('click', closeModal);

/* ══ TESTIMONIALS ══ */
const testimonials = [
  { text:'My Multani Shaadi Potli arrived and I cried. My dadi used to carry one just like it. RANG KARAVAN gave me back a memory.', stars:5, name:'Fatima Malik', place:'Lahore' },
  { text:'The Pearl Bridal Clutch was the most-admired item at my walima. Three aunties asked where I got it. I told them: nowhere else.', stars:5, name:'Sana Chaudhry', place:'Karachi' },
  { text:'The Ivory Crossbody goes with everything. Shalwar kameez, jeans, office, Sunday bazaar. Perfect bag.', stars:5, name:'Zainab Raza', place:'Islamabad' },
  { text:'The Truck Art Duffel is a piece of art. My husband thought it was a painting. Real Pakistani pride in every stitch.', stars:5, name:'Amna Sheikh', place:'Rawalpindi' },
  { text:'As a Pakistani in London, RANG KARAVAN brings home to me. People stop me to ask about my bag every single week.', stars:5, name:'Hira Baig', place:'London (Originally Multan)' },
];

let curSlide = 0;
function buildSlider() {
  const track = $('sl-track'), dots = $('sl-dots');
  track.innerHTML = dots.innerHTML = '';
  testimonials.forEach((t, i) => {
    const s = document.createElement('div');
    s.className = 'sl-slide' + (i===0?' active':'');
    s.innerHTML = `<div class="sl-stars">${'★'.repeat(t.stars)}</div>
      <p class="sl-quote">${t.text}</p>
      <p class="sl-author"><strong>${t.name}</strong> · ${t.place}</p>`;
    track.appendChild(s);
    const d = document.createElement('button');
    d.className = 'dot-b' + (i===0?' active':'');
    d.addEventListener('click', () => goSlide(i));
    dots.appendChild(d);
  });
}
function goSlide(n) {
  document.querySelectorAll('.sl-slide').forEach((s,i) => s.classList.toggle('active', i===((n+testimonials.length)%testimonials.length)));
  document.querySelectorAll('.dot-b').forEach((d,i)  => d.classList.toggle('active', i===((n+testimonials.length)%testimonials.length)));
  curSlide = (n+testimonials.length)%testimonials.length;
}
$('sl-prev').addEventListener('click', () => goSlide(curSlide-1));
$('sl-next').addEventListener('click', () => goSlide(curSlide+1));
let slInt = setInterval(() => goSlide(curSlide+1), 5500);
$('sl-track').addEventListener('mouseenter', () => clearInterval(slInt));
$('sl-track').addEventListener('mouseleave', () => { slInt = setInterval(() => goSlide(curSlide+1), 5500); });

/* ══ CONTACT FORM ══ */
$('ct-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const msg = $('form-msg'), btn = this.querySelector('[type=submit]');
  const name = $('fn').value.trim(), email = $('fe').value.trim(),
        subj = $('fs').value,   message = $('fm').value.trim();
  if (!name||!email||!subj||!message) { msg.textContent='Please fill in all required fields.'; msg.className='form-msg err'; return; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { msg.textContent='Please enter a valid email.'; msg.className='form-msg err'; return; }
  btn.textContent='Sending…'; btn.disabled=true; msg.textContent='';
  setTimeout(()=>{
    msg.textContent=`شکریہ! Thank you, ${name}. We'll respond within 24 hours on WhatsApp or email.`;
    msg.className='form-msg ok';
    this.reset(); btn.textContent='Send Message — بھیجیں'; btn.disabled=false;
  }, 1800);
});

/* ══ SCROLL REVEAL ══ */
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity='1'; e.target.style.transform='translateY(0)';
      revObs.unobserve(e.target);
    }
  });
}, { threshold:0.1 });
document.querySelectorAll('.sec-head, .about-wrap, .contact-wrap, .foot-wrap').forEach(el => {
  el.style.opacity='0'; el.style.transform='translateY(30px)';
  el.style.transition='opacity .75s cubic-bezier(.16,1,.3,1), transform .75s cubic-bezier(.16,1,.3,1)';
  revObs.observe(el);
});

/* ══ KEYBOARD ══ */
document.addEventListener('keydown', e => {
  if (e.key==='Escape') { closeModal(); closeCart(); closeMob(); }
  if (e.key==='ArrowRight') goSlide(curSlide+1);
  if (e.key==='ArrowLeft')  goSlide(curSlide-1);
});

/* ══ INIT ══ */
resolveImages();
setHeroImg();
buildSlider();
renderProducts();
