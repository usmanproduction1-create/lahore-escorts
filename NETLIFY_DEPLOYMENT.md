# Netlify Deployment Guide for Lahore Night Girls

This project is built with React 19, TypeScript, Vite, and Tailwind CSS. It is configured to deploy seamlessly to Netlify as a modern Single-Page Application (SPA).

---

## 1. Quick Automatic Deployment (via GitHub / GitLab)

1. Push or export this repository to **GitHub** or **GitLab**.
2. Log in to [Netlify](https://app.netlify.com/).
3. Click **"Add new site"** &rarr; **"Import an existing project"**.
4. Select your repository.
5. Netlify will auto-detect the included `netlify.toml` settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **"Deploy site"**. Your site will be live on a `*.netlify.app` domain within 1–2 minutes!

---

## 2. Drag & Drop Manual Deployment (Zero-CLI option)

If you have downloaded the code or generated the build locally:

1. Run the build command locally:
   ```bash
   npm run build
   ```
2. Log in to [Netlify](https://app.netlify.com/).
3. Go to the **"Sites"** tab and drag the generated `dist` folder into the Netlify drag-and-drop dropzone.
4. Netlify will publish the site instantly.

---

## 3. Deployment via Netlify CLI

If you prefer using the terminal:

```bash
# Install Netlify CLI globally if needed
npm install -g netlify-cli

# Log in to Netlify
ntl login

# Build production assets
npm run build

# Deploy to production
ntl deploy --prod --dir=dist
```

---

## Key Configurations Included:
- **`netlify.toml`**: Configures publish directory (`dist`), build command (`npm run build`), security headers, and asset caching.
- **`public/_redirects`**: Ensures clean client-side routing (`/* /index.html 200`) without 404 errors on page refresh.
