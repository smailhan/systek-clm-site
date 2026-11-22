# Systek CLM tanıtım sitesi

Statik site, sunucu tarafı kod yok. Klasörün tamamı herhangi bir statik barındırmaya (nginx, Netlify, GitHub Pages, hosting paneli) olduğu gibi yüklenir.

| Dosya | İçerik |
|---|---|
| `index.html` | Ana sayfa |
| `muzakere.html`, `onay-imza.html`, `raporlar.html`, `yapay-zeka.html` | Özellik ayrıntı sayfaları |
| `styles.css` | Ortak stil |
| `site.js` | Telefon menüsü, ürün kaydırıcısı, iletişim formu |
| `assets/` | Uygulamanın ekran görüntüleri (kurgusal demo verisi); giriş görseli `sozlesme.webp` |

Dış bağımlılık yalnız Google Fonts (Manrope, Inter); erişilemezse sistem yazı tipine düşer.

## Yayından önce doldurulacaklar
- `[e-posta]`: bütün sayfalarda iletişim kutusu, alt şerit ve formun `data-alici` özniteliği (`id="iletisim-formu"`).
- Telefon ve adres şirket kartından alındı (0262 341 48 07, Teknopark / Başiskele); doğru olduğunu kontrol edin.
- "KVKK aydınlatma metni" ve "Kullanım koşulları" bağlantıları şimdilik `#`.

## İletişim formu
Sunucu olmadığı için form, ziyaretçinin e-posta programında doldurulmuş bir mesaj açar (`mailto`). Formun doğrudan size ulaşması istenirse bir form hizmeti (ör. barındırma firmasının form özelliği) bağlanır; `site.js`'te tek yer değişir.

## Not
- Ekran görüntülerinde yalnız kurgusal kişiler ve şirketler var; gerçek çalışan adı yok.
- Şablondaki müşteri yorumları, iş ortağı logoları ve vaka çalışmaları için gerçek veri olmadığından bunların yerine başlangıç adımları, birlikte çalışılan araçlar ve uygulama ekranlarından örnekler konuldu.

## Konsept notu
- Bu site yayına alınmayacak; ekip içi konsept tasarımdır. Ad ve logo kurumsal kimlik çalışmasından sonra değişecek.
- `assets/logo-gecici.png` geçici yer tutucudur: bir tasarım pazarında satışta olan, bize ait olmayan bir logodan alınmıştır. Kullanım hakkı yoktur; kurumsal logo hazır olunca kaldırılacaktır.
