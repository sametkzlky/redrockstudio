# Redrock Studio — Web Sitesi

Bağımsız mobil oyun stüdyosu Redrock Studio için tek sayfalık, modern ve animasyonlu tanıtım sitesi.

## Teknoloji

Saf **HTML + CSS + JavaScript**. Derleme adımı, framework veya bağımlılık yok.
Tek ihtiyaç: bir tarayıcı. Her statik hosting'de çalışır (GitHub Pages, Netlify, Vercel, Cloudflare Pages, kendi sunucun...).

## Yerelde çalıştırma

```bash
# Proje klasöründe
python3 -m http.server 8000
# sonra tarayıcıda: http://localhost:8000
```

Ya da `index.html` dosyasına çift tıkla.

## Dosya yapısı

```
.
├── index.html              # Tüm sayfa içeriği
├── assets/
│   ├── css/style.css       # Tema, düzen, animasyonlar
│   ├── js/main.js          # Scroll animasyonları, sayaçlar, menü
│   └── img/
│       ├── redrock-logo.jpeg
│       ├── blastchain-icon.jpeg
│       ├── blastchain-poster.jpeg
│       └── forestquest-icon.png
```

## Özelleştirme

| Ne | Nerede |
|----|--------|
| Renkler | `assets/css/style.css` → `:root` değişkenleri |
| Metinler | `index.html` |
| Mağaza linkleri | `index.html` içinde `store-btn` ve footer bağlantıları |

> Not: İletişim ve stüdyo bilgi bölümleri şimdilik siteden kaldırıldı.

## Oyun linkleri

- **BlastChain** — [App Store](https://apps.apple.com/tr/app/blastchain-match-blast/id6760842437?l=tr) · [Google Play](https://play.google.com/store/apps/details?id=com.blastchain&hl=tr)
- **Forest Quest** (çok oyunculu + yapay zekaya karşı strateji) — [Google Play](https://play.google.com/store/apps/details?id=com.forestquest&hl=tr)
- **Tüm oyunlar / geliştirici sayfası** — [Google Play](https://play.google.com/store/apps/developer?id=RedRock+Studio&hl=tr)

## Yayınlama (GitHub Pages örneği)

1. Bu klasörü bir GitHub deposuna yükle.
2. Repo ayarları → Pages → Branch: `main`, klasör: `/root`.
3. Birkaç dakika içinde `https://kullaniciadi.github.io/repo-adi/` adresinde yayında.
