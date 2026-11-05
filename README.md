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
├── gizlilik.html           # Gizlilik ve çerez bilgilendirmesi
├── assets/
│   ├── css/style.css       # Tema, düzen, animasyonlar
│   ├── js/main.js          # Scroll animasyonları, menü, e-posta kopyalama
│   ├── fonts/              # Yerel yazı tipleri (Inter, Bricolage Grotesque; SIL OFL)
│   └── img/
│       ├── redrock-logo.png    # şeffaf arka plan
│       ├── favicon.png
│       ├── blastchain-icon.jpg
│       ├── blastchain-poster.jpeg  # og:image
│       ├── forestquest-icon.jpg
│       ├── risefc-icon.jpg
│       ├── globuzzle-icon.jpg
│       └── henvasion-icon.jpg
```

## Özelleştirme

| Ne | Nerede |
|----|--------|
| Renkler | `assets/css/style.css` → `:root` değişkenleri |
| Metinler | `index.html` |
| Mağaza linkleri | `index.html` içinde `store-btn` ve footer bağlantıları |

İletişim: studioredr@gmail.com

> `assets/` bir yıl önbelleğe alınır (`vercel.json`). CSS veya JS değişince HTML'deki `?v=` değerini artır.

## Oyun linkleri

- **BlastChain** — [App Store](https://apps.apple.com/tr/app/blastchain-match-blast/id6811445180?l=tr) · [Google Play](https://play.google.com/store/apps/details?id=com.blastchain&hl=tr)
- **Forest Quest** (çok oyunculu + yapay zekaya karşı strateji) — [Google Play](https://play.google.com/store/apps/details?id=com.forestquest&hl=tr)
- **Rise FC Manager** (futbol menajerlik) — [App Store](https://apps.apple.com/tr/app/rise-fc-manager/id6811374192?l=tr) (yalnızca iOS)
- **Globuzzle** (dünya turu bulmaca) — yakında
- **Henvasion** (dikey arcade nişancı) — geliştiriliyor
- **Tüm oyunlar / geliştirici sayfası** — [Google Play](https://play.google.com/store/apps/developer?id=RedRock+Studio&hl=tr)

## Yayınlama (GitHub Pages örneği)

1. Bu klasörü bir GitHub deposuna yükle.
2. Repo ayarları → Pages → Branch: `main`, klasör: `/root`.
3. Birkaç dakika içinde `https://kullaniciadi.github.io/repo-adi/` adresinde yayında.
