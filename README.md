# DelKenUI

A modern Next.js application with Vercel Speed Insights integrated for real-time performance monitoring.

## Features

- ⚡ **Next.js 14** - React framework with built-in optimizations
- 📊 **Vercel Speed Insights** - Monitor Core Web Vitals and real user experience
- 🎨 **Modern UI** - Responsive design with Tailwind CSS
- 🚀 **Vercel Ready** - Optimized for deployment on Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Vercel account (for deployment)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

```bash
npm run build
npm start
```

## Vercel Speed Insights

Speed Insights is already integrated into this application. The `SpeedInsights` component from `@vercel/speed-insights/next` is added to the root layout (`app/layout.tsx`) and will automatically collect performance metrics.

### Enabling Speed Insights Dashboard

1. Push your code to GitHub
2. Import your repository on [vercel.com](https://vercel.com)
3. Deploy to Vercel
4. Go to your [Vercel dashboard](https://vercel.com/dashboard)
5. Select your project and go to the **Speed Insights** tab
6. Click **Enable** to start collecting metrics

Once enabled, you'll be able to monitor:
- **Largest Contentful Paint (LCP)** - Loading performance
- **First Input Delay (FID)** - Interactivity
- **Cumulative Layout Shift (CLS)** - Visual stability

### View Data

After your site receives visitor traffic, navigate to the **Speed Insights** tab in your Vercel dashboard to view performance metrics and analyze user experience.

## Project Structure

```
app/
├── layout.tsx          # Root layout with SpeedInsights component
├── page.tsx            # Home page
├── globals.css         # Global styles
└── page.module.css     # Page-specific styles
package.json            # Dependencies and scripts
tsconfig.json           # TypeScript configuration
next.config.js          # Next.js configuration
vercel.json             # Vercel deployment configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Speed Insights Docs](https://vercel.com/docs/speed-insights)
- [Web Vitals Guide](https://web.dev/vitals/)

## Deployment

This project is configured to deploy on Vercel. Simply push your changes to GitHub, and Vercel will automatically build and deploy your application.

```bash
git push origin main
```

Your app will be live at `https://your-project-name.vercel.app`

## License

MIT