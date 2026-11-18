# Afebina & Ameer Wedding Invitation

A responsive React + Vite wedding invitation site inspired by the supplied ivory/champagne floral reference.

## 1. Install Node.js
Install the current Node.js LTS version from https://nodejs.org if it is not already installed.

## 2. Open the project
Extract this ZIP, then open the `afebina-wedding-site` folder in VS Code.

## 3. Install packages
Open the VS Code terminal in this folder and run:

```bash
npm install
```

## 4. Start the website
```bash
npm run dev
```
Open the local address printed by Vite, usually http://localhost:5173.

## 5. Build for publishing
```bash
npm run build
```
The production website will be in the `dist` folder.

## Important customizations
- Edit wedding names, family details and wording in `src/App.jsx`.
- Change the wedding date in `WEDDING_DATE` near the top of `src/App.jsx`.
- The RSVP form currently prepares a WhatsApp message using `919447503279`. Replace this with the correct RSVP number if needed. This is currently the bride's family contact from the supplied content.
- Replace the image URLs in the `cards` array with your own wedding photos when available.
- Decorative floral shapes are CSS-based; Google Fonts and gallery images require internet access.
- Check the venue spelling and location before publishing: the content supplied says **Varsha Convention Centre, Punalur**.
