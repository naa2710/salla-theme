# Salla Antigravity Premium Theme 🚀

A modern, high-performance Salla theme built with the **Twilight Engine**, **Twig**, and **Tailwind CSS**.

## 🎯 Features
- **Modern Responsive Design**: Mobile-first approach for perfect viewing on all devices.
- **Tailwind CSS Integration**: Fully customizable styling using the latest Tailwind standards.
- **High Performance**: Optimized Twig templates and minimal JS footprint.
- **GitHub Automation**: Pre-configured CI/CD workflow for building and validating the theme on every push.

## 🧱 Folder Structure
```text
salla-theme/
├── .github/workflows/      # CI/CD (GitHub Actions)
├── src/
│   ├── views/              # Twig Templates
│   │   ├── layouts/        # Master layouts
│   │   ├── pages/          # Core page templates
│   │   └── components/     # Reusable components
│   ├── assets/             # Raw Assets (CSS/JS/Images)
│   │   ├── css/            # Tailwind CSS
│   │   └── js/             # Vanilla JavaScript
│   └── layouts/            # (Link to views/layouts)
├── public/                 # Static public files
├── salla.config.json       # Custom theme configuration
├── twilight.json           # Salla Engine configuration
├── package.json            # Scripts & Dependencies
└── README.md
```

## ⚙️ Local Development

### 1. Install Salla CLI
If you haven't already, install the Salla CLI globally:
```bash
npm install -g @salla.sa/cli
```

### 2. Login to Salla
Log in with your Salla Partner account:
```bash
salla login
```

### 3. Start Development Preview
Run the following command to start the live preview on your store:
```bash
npm run dev
```

### 4. Build for Production
To bundle the theme and prepare it for publishing:
```bash
npm run build
```

## 🔗 GitHub Integration
This project is ready for GitHub. To connect your repository:

1. Initialize Git:
   ```bash
   git init
   git add .
   git commit -m "Initial theme setup"
   ```
2. Add your remote (replace with your repo URL):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/salla-theme.git
   ```
3. Push to main:
   ```bash
   git push -u origin main
   ```

## 🤖 CI/CD Automation
The included `.github/workflows/salla-deploy.yml` will automatically:
- Install dependencies.
- Build the theme to ensure it's error-free.
- Validate that all required Salla files exist.

---
Built with ❤️ by **Antigravity AI**
