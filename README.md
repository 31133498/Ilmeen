Ilmeen — Landing Page (Redesign)

This commit includes a redesigned, responsive, luxury-style landing page for Ilmeen with:

- Full-screen hero with Arabic calligraphy and phone mockup
- Problem / Solution / Showcase / Audience / Ethos / Impact / CTA / Footer sections
- Responsive layout and mobile-first tweaks
- High-quality imagery referenced from Unsplash (remote URLs used so no large assets added locally)
- Fonts: Amiri (Arabic serif) + Poppins (body) are referenced in `index.html`

	To download local copies into `public/assets/` (recommended for stability and offline previews), run the included PowerShell helper script:

```powershell
cd "c:\Users\HP\Desktop\Shazily Projects\Ilmeen"
.\scripts\download-assets.ps1
```

This will create `public/assets/hero.jpg`, `before.jpg`, `after.jpg`, and `phone.jpg`. After downloading run `npm run build` to include them in the production build.
How to run locally

1. Install deps:

```powershell
cd "c:\Users\HP\Desktop\Shazily Projects\Ilmeen"
npm install
```

2. Dev server:

```powershell
npm run dev
```

3. Build & preview production:

```powershell
npm run build
npm run preview
# preview will start a local server (Vite preview)
```

Git / Push

- I will create a local commit for these changes. To push to GitHub, add a remote and push:

```powershell
# add remote (replace with your repository URL)
git remote add origin https://github.com/<your-username>/<repo>.git
# push main (or your default branch)
git push -u origin main
```

If you want, I can try to add a remote and push, but you'll need to provide the repo URL or set up authentication on your machine.

Design notes

- Color palette: midnight emerald, gold accents, ivory
- Typography: Amiri for Arabic headings, Poppins for body text
- Images: Unsplash images are used as remote backgrounds and mockups for now

If you'd like, I can:
- Add local optimized images under `public/assets/` instead of remote URLs
- Wire up small interactive pieces (before/after slider, modal video demo)
- Attempt to push these changes to a GitHub repo (I will create the local commit first)
