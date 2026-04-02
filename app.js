// ===== 產品資料 =====
const BRANDS = [
  {
    id: "icd",
    name: "ICD 映皙美",
    products: [
      { id: "icd-cleansing-oil",      name: "淨膚卸妝油",          spec: "145ml",          price: 990,  sp: 27,  bp: 21 },
      { id: "icd-cleansing-powder",   name: "活膚潔顏粉",          spec: "80g",            price: 990,  sp: 27,  bp: 21 },
      { id: "icd-gel-cleanser",       name: "平衡潔顏凝膠",        spec: "120g",           price: 960,  sp: 26,  bp: 17 },
      { id: "icd-calming-gel",        name: "舒緩平衡凝露",        spec: "100ml",          price: 1160, sp: 32,  bp: 24 },
      { id: "icd-oil-mist",           name: "油水平衡噴霧",        spec: "50ml",           price: 1160, sp: 32,  bp: 24 },
      { id: "icd-multi-stick",        name: "亮采全能精華棒",      spec: "8.5g",           price: 790,  sp: 23,  bp: 17 },
      { id: "icd-derma-set",          name: "活妍專科保養組",      spec: "噴霧130ml+精華45ml", price: 2980, sp: 81, bp: 63 },
      { id: "icd-derma-cream",        name: "活妍奇肌霜",          spec: "50ml",           price: 1980, sp: 54,  bp: 42 },
      { id: "icd-r100-toner",         name: "光點100精華水",       spec: "100ml",          price: 2650, sp: 72,  bp: 48 },
      { id: "icd-r100-ampoule",       name: "光點100精華",         spec: "50ml",           price: 3970, sp: 108, bp: 72 },
      { id: "icd-r100-cream",         name: "光點100乳霜",         spec: "50ml",           price: 3300, sp: 90,  bp: 60 },
      { id: "icd-collagen-mask",      name: "膠原100瞬透水面膜",  spec: "2.5g x 6包",     price: 1980, sp: 54,  bp: 42 },
      { id: "icd-sunscreen",          name: "極效保濕防曬乳 SPF50+", spec: "50ml",         price: 830,  sp: 23,  bp: 18 },
      { id: "icd-bb-cream",           name: "輕透光感BB霜",        spec: "30g",            price: 830,  sp: 23,  bp: 18 },
      { id: "icd-cushion-21",         name: "水光保濕氣墊粉餅 #21淺膚", spec: "15g x 2",  price: 1800, sp: 50,  bp: 38 },
      { id: "icd-cushion-23",         name: "水光保濕氣墊粉餅 #23自然", spec: "15g x 2",  price: 1800, sp: 50,  bp: 38 },
      { id: "icd-setting-spray",      name: "定妝噴霧",            spec: "80ml",           price: 960,  sp: 26,  bp: 20 },
      { id: "icd-lip-oil",            name: "水光潤唇釉",          spec: "4.5g",           price: 890,  sp: 24,  bp: 18 },
      { id: "icd-butter-lip-semi",    name: "奶油柔潤唇彩",        spec: "4.5g",           price: 890,  sp: 24,  bp: 18 },
      { id: "icd-butter-lip-velvet",  name: "奶油柔霧唇彩",        spec: "4.5g",           price: 890,  sp: 24,  bp: 18 },
    ]
  },
  {
    id: "botalab",
    name: "博萃瓶 BOTALAB",
    products: [
      { id: "botalab-shampoo",        name: "絲蔻植護洗髮露",      spec: "500ml",          price: 1090, sp: 29,  bp: 22 },
      { id: "botalab-conditioner",    name: "絲蔻植護養髮液",      spec: "300ml",          price: 890,  sp: 23,  bp: 18 },
      { id: "botalab-hair-oil",       name: "絲蔻植護魔髮精油",    spec: "100ml",          price: 1160, sp: 30,  bp: 23 },
      { id: "botalab-body-wash",      name: "秀魅淨潤沐浴露",      spec: "500ml",          price: 990,  sp: 26,  bp: 20 },
      { id: "botalab-body-cream",     name: "秀魅柔潤身體乳",      spec: "250ml",          price: 860,  sp: 23,  bp: 17 },
      { id: "botalab-feminine-wash",  name: "秀魅私密植淨慕斯",    spec: "150ml",          price: 830,  sp: 22,  bp: 16 },
    ]
  },
  {
    id: "lifening",
    name: "來沛寧 LIFENING",
    products: [
      { id: "lifening-collagen",      name: "微分子膠原飲",        spec: "25ml x 28瓶",   price: 2980, sp: 77,  bp: 60 },
      { id: "lifening-energy",        name: "活力超能飲",          spec: "12g x 30包",    price: 2980, sp: 77,  bp: 60 },
      { id: "lifening-shake",         name: "隨型手搖蛋白飲",      spec: "40g x 14包",    price: 3490, sp: 89,  bp: 70 },
    ]
  }
];

// ===== State =====
const quantities = {};

// ===== Init =====
function init() {
  const container = document.getElementById('product-sections');
  container.innerHTML = BRANDS.map(brand => `
    <div class="accordion open" id="accordion-${brand.id}">
      <div class="accordion-header" onclick="toggleAccordion('${brand.id}')">
        <div class="accordion-brand">
          <span class="accordion-brand-name">${brand.name}</span>
          <span class="accordion-brand-count" id="count-${brand.id}">0</span>
        </div>
        <span class="accordion-arrow">&#9660;</span>
      </div>
      <div class="accordion-body">
        <div class="accordion-inner">
          ${brand.products.map(p => renderProductRow(p)).join('')}
        </div>
      </div>
    </div>
  `).join('');

  // Init quantities
  BRANDS.forEach(b => b.products.forEach(p => { quantities[p.id] = 0; }));

  // Summary bar click → open modal
  document.getElementById('summary-bar').addEventListener('click', openModal);

  updateSummary();
}

function renderProductRow(p) {
  return `
    <div class="product-row" id="row-${p.id}">
      <div class="product-info">
        <div class="product-name">
          ${p.name}
          <span class="product-spbp">SP ${p.sp} <span class="spbp-sep">/</span> BP ${p.bp}</span>
        </div>
        <div class="product-spec">${p.spec}</div>
      </div>
      <div class="product-price">NT$ ${p.price.toLocaleString()}</div>
      <div class="qty-control">
        <button class="qty-btn minus" onclick="changeQty('${p.id}', -1)">&#8722;</button>
        <div class="qty-value" id="qty-${p.id}">0</div>
        <button class="qty-btn plus" onclick="changeQty('${p.id}', 1)">&#43;</button>
      </div>
    </div>`;
}

// ===== Accordion =====
function toggleAccordion(brandId) {
  const el = document.getElementById(`accordion-${brandId}`);
  el.classList.toggle('open');
}

// ===== Quantity =====
function changeQty(productId, delta) {
  const newQty = Math.max(0, (quantities[productId] || 0) + delta);
  quantities[productId] = newQty;

  const qtyEl = document.getElementById(`qty-${productId}`);
  qtyEl.textContent = newQty;
  qtyEl.classList.toggle('active', newQty > 0);

  updateSummary();
}

// ===== Summary =====
function updateSummary() {
  let totalItems = 0;
  let totalPrice = 0;

  BRANDS.forEach(brand => {
    let brandCount = 0;
    brand.products.forEach(p => {
      const qty = quantities[p.id] || 0;
      if (qty > 0) {
        totalItems += qty;
        totalPrice += qty * p.price;
        brandCount += qty;
      }
    });

    // Update brand count badge
    const countEl = document.getElementById(`count-${brand.id}`);
    countEl.textContent = brandCount;
    countEl.classList.toggle('visible', brandCount > 0);
  });

  document.getElementById('summary-count').textContent = `已選 ${totalItems} 項`;
  document.getElementById('summary-total').textContent = `NT$ ${totalPrice.toLocaleString()}`;
}

// ===== Modal =====
function openModal() {
  const selected = [];
  let total = 0;
  let totalSP = 0;
  let totalBP = 0;

  BRANDS.forEach(brand => {
    brand.products.forEach(p => {
      const qty = quantities[p.id] || 0;
      if (qty > 0) {
        const subtotal = qty * p.price;
        total += subtotal;
        totalSP += qty * p.sp;
        totalBP += qty * p.bp;
        selected.push({ name: p.name, qty, price: p.price, sp: p.sp, bp: p.bp, subtotal });
      }
    });
  });

  const body = document.getElementById('modal-body');
  if (selected.length === 0) {
    body.innerHTML = '<p style="text-align:center;color:#888;padding:24px 0;">尚未選擇任何產品</p>';
  } else {
    body.innerHTML = selected.map(item => `
      <div class="modal-item">
        <div>
          <div class="modal-item-name">${item.name}</div>
          <div class="modal-item-qty">NT$ ${item.price.toLocaleString()} x ${item.qty}</div>
        </div>
        <div class="modal-item-subtotal">NT$ ${item.subtotal.toLocaleString()}</div>
      </div>
    `).join('');
  }

  document.getElementById('modal-footer').innerHTML = `
    <span class="modal-footer-label">合計</span>
    <div class="modal-footer-right">
      <span class="modal-footer-total">NT$ ${total.toLocaleString()}</span>
      <span class="modal-footer-spbp" style="color:red;font-size:14px;">SP ${totalSP} / BP ${totalBP}</span>
    </div>
  `;

  document.getElementById('modal-overlay').classList.add('active');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
}

// ===== Start =====
document.addEventListener('DOMContentLoaded', init);
