// Systek CLM tanıtım sitesi: menü, kaydırıcı, iletişim formu (sunucusuz: e-posta taslağı açar).
(function () {
  var ust = document.querySelector('.ust');
  if (ust) {
    var golge = function () { ust.classList.toggle('golgeli', window.scrollY > 8); };
    window.addEventListener('scroll', golge, { passive: true });
    golge();
  }

  var dugme = document.querySelector('.menu-dugme');
  var menu = document.querySelector('.menu');
  if (dugme && menu) {
    dugme.addEventListener('click', function () {
      var acik = menu.classList.toggle('acik-menu');
      dugme.setAttribute('aria-expanded', acik ? 'true' : 'false');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) { menu.classList.remove('acik-menu'); dugme.setAttribute('aria-expanded', 'false'); }
    });
  }

  var kaydirici = document.querySelector('.kaydirici');
  if (kaydirici) {
    var slaytlar = kaydirici.querySelectorAll('.slayt');
    var noktalar = kaydirici.querySelectorAll('.noktalar button');
    var bag = kaydirici.querySelector('[data-incele]');
    var goster = function (i) {
      slaytlar.forEach(function (s, j) { s.classList.toggle('etkin', i === j); });
      noktalar.forEach(function (n, j) { n.classList.toggle('etkin', i === j); n.setAttribute('aria-current', i === j ? 'true' : 'false'); });
      if (bag) bag.setAttribute('href', slaytlar[i].getAttribute('data-sayfa'));
    };
    noktalar.forEach(function (n, i) { n.addEventListener('click', function () { goster(i); }); });
    goster(0);
  }

  var form = document.querySelector('#iletisim-formu');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var not = form.querySelector('.form-not');
      var v = function (ad) { return (form.elements[ad].value || '').trim(); };
      if (!form.elements.kvkk.checked) { not.textContent = 'Devam etmek için aydınlatma metnini onaylayın.'; return; }
      var alici = form.getAttribute('data-alici');
      var govde = 'Ad Soyad: ' + v('ad') + '\nE-posta: ' + v('eposta') + '\n\n' + v('mesaj');
      window.location.href = 'mailto:' + alici + '?subject=' + encodeURIComponent(v('konu') || 'Systek CLM demo talebi') + '&body=' + encodeURIComponent(govde);
      not.textContent = 'E-posta programınız açılıyor; mesajı oradan gönderin.';
    });
  }
})();
