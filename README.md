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
├── public/                 # Static public files
├── salla.config.json       # Custom theme configuration
├── twilight.json           # Salla Engine configuration
├── package.json            # Scripts & Dependencies
└── README.md