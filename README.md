# THE BEAN - Coffee Landing Page

A beautiful, modern Next.js website for THE BEAN specialty coffee shop.

## Features

- 🏠 **Home Page** - Hero section, heritage story, and feature highlights
- 📝 **Blog/Journal** - Coffee stories and articles
- 📧 **Contact Page** - Contact form and location information
- 🎨 **Modern Design** - Elegant brown and cream color palette
- 📱 **Responsive** - Mobile-friendly design

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
.
├── app/
│   ├── page.tsx                 # Home page
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   ├── blog/
│   │   ├── page.tsx            # Blog listing page
│   │   └── lavender-honey-latte/
│   │       └── page.tsx        # Blog post detail
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── components/
│   ├── Header.tsx              # Navigation header
│   └── Footer.tsx              # Footer component
└── package.json
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Next/Image** - Optimized image loading

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette. The current theme uses:
- Brown shades for primary colors
- Cream tones for backgrounds
- Custom brown-900 for dark elements

### Content

Update the content in each page file to match your coffee shop's information.

## Build for Production

```bash
npm run build
npm start
```

## License

This project is created for THE BEAN coffee shop.
