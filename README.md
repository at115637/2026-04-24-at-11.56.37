# 2026-04-24 at 11.56.37

Magazin-Website. Gebaut mit Astro, deployed auf GitHub Pages.

---

## Setup

### 1. Repo auf GitHub anlegen
Neues Repo erstellen, z.B. `magazin`.

### 2. astro.config.mjs anpassen
```js
site: 'https://DEIN-USERNAME.github.io',
base: '/magazin',  // Name des Repos
```

### 3. GitHub Pages aktivieren
Repo → Settings → Pages → Source: **GitHub Actions**

### 4. Lokal starten (optional)
```bash
npm install
npm run dev
```

---

## Neuen Artikel hinzufügen

1. Neue Datei in `src/content/articles/` anlegen, z.B. `artikel-02.md`
2. Bild in `public/media/` ablegen
3. Frontmatter ausfüllen:

```markdown
---
title: "Titel des Artikels"
date: "2026-05-01"
coverImage: "/media/artikel-02.jpg"
---

Text hier...

![Bild](/media/artikel-02-bild.jpg)

<audio controls src="/media/audio.mp3"></audio>

<video controls src="/media/video.mp4"></video>
```

4. `git add . && git commit -m "neuer artikel" && git push`

→ Website baut sich automatisch in ~1 Minute.

---

## Dateistruktur

```
src/
  content/articles/   ← .md Dateien
  pages/              ← index + [slug]
  layouts/            ← Base Layout
public/
  media/              ← Bilder, Audio, Video
.github/workflows/    ← Auto-Deploy
```
