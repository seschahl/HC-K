# HC-K Cowboy Eventapp

Statisk webbapp för telefon + dator. Körs direkt på GitHub Pages (ingen build behövs).

## Struktur
- `index.html` – laddar React, Tailwind och `app.jsx` via CDN
- `app.jsx` – all app-logik i React. Cowboy-tema. 6 flikar. Speeddejt-data inbyggt.
- `assets/UploadedImage*.jpg` – alla bilder.

## Publicering till GitHub
1. Skapa (eller rensa) repo **HC-K** eller **HC-K1**.
2. Ladda upp allt i denna ZIP till repo-roten.
3. Aktivera GitHub Pages: *Settings → Pages → Deploy from Branch* (branch `main`, folder `/ (root)`).
4. Öppna den visade Pages-URL:en.

## Ändra Speeddejt-data
- Data är embed: ändra konstanten `SPEED_DATA` i `app.jsx`.
- Strukturen per rad: `{ Tid, Säljare, Leverantör }`.

## Ändra bilder
- Byt filerna i `assets/` eller ändra sökvägarna i `app.jsx`.
