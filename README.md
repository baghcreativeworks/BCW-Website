# Bagh Creative Works × Greyscale Studio Portfolio

A modern retro-themed portfolio website built with Vite and React, optimized for Firebase Hosting.

## 🚀 Features

- Modern retro aesthetic with vibrant color palette
- Fully responsive design
- Smooth scrolling navigation
- Optimized for performance
- Ready for Firebase Hosting deployment

## 📦 Tech Stack

- **Vite** - Fast build tool and dev server
- **React** - UI library
- **Firebase Hosting** - Static site hosting

## 🛠️ Setup & Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase CLI (for deployment)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 🔥 Firebase Deployment

### Initial Setup

1. **Install Firebase CLI** (if not already installed):
```bash
npm install -g firebase-tools
```

2. **Login to Firebase**:
```bash
firebase login
```

3. **Initialize Firebase in your project** (if not already done):
```bash
firebase init hosting
```
   - Select "Use an existing project" or create a new one
   - Set public directory to: `dist`
   - Configure as single-page app: `Yes`
   - Set up automatic builds: `No` (we'll build manually)
   - Overwrite index.html: `No`

4. **Update `.firebaserc`**:
   - Replace `"your-project-id"` with your actual Firebase project ID

### Deployment Steps

1. **Build the project**:
```bash
npm run build
```
   This creates an optimized production build in the `dist` folder.

2. **Deploy to Firebase**:
```bash
firebase deploy --only hosting
```

3. **View your site**:
   After deployment, Firebase will provide you with a hosting URL like:
   `https://your-project-id.web.app`

### Optimized Deployment Workflow

For the best performance, follow this workflow:

1. **Build locally**:
```bash
npm run build
```

2. **Test the build locally** (optional):
```bash
npm run preview
```

3. **Deploy**:
```bash
firebase deploy --only hosting
```

### Continuous Deployment (Optional)

For automated deployments, you can set up:

1. **GitHub Actions** - Automatically deploy on push to main branch
2. **Firebase GitHub Action** - Use the official Firebase GitHub Action
3. **CI/CD Pipeline** - Integrate with your preferred CI/CD service

Example GitHub Actions workflow (`.github/workflows/deploy.yml`):
```yaml
name: Deploy to Firebase

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
          projectId: your-project-id
```

## 📁 Project Structure

```
├── public/              # Static assets
├── src/
│   ├── components/     # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Main app component
│   ├── App.css         # App styles
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── .firebaserc         # Firebase project configuration
├── firebase.json       # Firebase hosting configuration
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

## 🎨 Customization

### Colors

Edit the CSS variables in `src/index.css`:
```css
:root {
  --retro-primary: #ff6b6b;
  --retro-secondary: #4ecdc4;
  --retro-accent: #ffe66d;
  /* ... */
}
```

### Content

- Update portfolio items in `src/components/Portfolio.jsx`
- Modify about section in `src/components/About.jsx`
- Update contact information in `src/components/Contact.jsx`

## 📝 Notes

- The site uses client-side routing, so Firebase hosting is configured with rewrites to serve `index.html` for all routes
- Static assets are cached for optimal performance
- The build output (`dist/`) is ignored by git - it's generated during deployment

## 🔗 Useful Links

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting)

## 📄 License

This project is private and proprietary to Bagh Creative Works × Greyscale Studio.

