// ===== 頁面計數器 =====
// COUNTER_URL 部署 Google Apps Script 後填入
var COUNTER_URL = 'https://script.google.com/macros/s/AKfycbxX6ktYYxO0Nvg_bbd6Af66nn88DmfpSIPNLLi1VY_KX2Myk-8A3Tm62f-hpQDMv3oIfg/exec';
var PAGE_ID = 'product-calculator';

(function () {
  if (!COUNTER_URL) return;
  fetch(COUNTER_URL + '?page=' + PAGE_ID)
    .then(function (r) { return r.json(); })
    .then(function (data) {
      var el = document.getElementById('page-counter');
      if (el) el.setAttribute('data-count', data.count || 0);
    })
    .catch(function () {});
})();
