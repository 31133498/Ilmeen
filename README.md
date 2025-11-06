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

Optional: Add a recitation/ambient audio file to `public/assets/recitation.mp3` if you want the AudioToggle to play something. If the file is not present the app will use a low-volume WebAudio oscillator fallback.

Deploying to Vercel

1. Go to https://vercel.com and log in.
2. Import your GitHub repository (31133498/Ilmeen) into Vercel using "New Project → Import Git Repository".
3. Vercel should auto-detect a static build. Set (if asked):
	- Build Command: npm run build
	- Output Directory: dist
4. (Optional) Add any environment variables in Vercel dashboard if your app needs them.
5. Deploy. Vercel will run the build and serve the content from the `dist` folder.

I added `vercel.json` to the repo to help Vercel detect the static build output and routing.

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
