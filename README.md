# Global Market Consulting - Hedge Fund Website

A professional hedge fund website built with Vite + React + TypeScript, featuring institutional-grade design and investor portal access.

## Features

### Public Website
- **Home Page**: Hero section with mission statement and investment philosophy highlights
- **About Us**: Firm overview, Delaware Limited Partnership structure, and institutional credibility
- **Investment Approach**: Detailed investment strategies and risk management
- **Performance**: Fund performance metrics and risk-adjusted returns
- **Investor Relations**: Limited Partnership information and accredited investor inquiry form
- **Contact**: Secure contact forms and office information

### Investor Portal
- **Secure Login**: Demo credentials for investor access
- **Investment Dashboard**: Account summaries, performance metrics, and strategy allocation
- **Live Trading Dashboard**: Real-time trading operations view (Helios system)
- **Document Access**: Performance reports and compliance documents

## Tech Stack

- **Framework**: Vite + React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Charts**: Chart.js for performance visualization

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Access the Application**
   - Public website: http://localhost:5173
   - Investor portal: Click "Limited Partner Portal" or "Limited Partner Login"

## Demo Access

Use these credentials to access the investor portal:
- **Email**: investor@globalmarket.com
- **Password**: SecurePass2025

## Design System

### Colors
- **Navy**: Primary brand color (#102a43 to #f0f4f8)
- **Charcoal**: Secondary neutral (#2d3748 to #f7f8f9)
- **Gold**: Accent color for highlights (#78350f to #fffdf7)

### Typography
- **Headings**: Georgia serif for institutional feel
- **Body**: Inter sans-serif for readability

## Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Landing page hero section
│   ├── About.tsx       # About us section
│   ├── Services.tsx    # Investment approach
│   ├── Performance.tsx # Fund performance metrics
│   ├── Contact.tsx     # Contact and investor relations
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── LoginForm.tsx   # Investor login form
│   ├── InvestorDashboard.tsx    # LP dashboard
│   ├── HeliosDashboard.tsx      # Live trading dashboard
│   └── DashboardSelector.tsx    # Dashboard switcher
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

## Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## Deployment

The application is ready to deploy to:
- **Vercel**: Optimized for React deployment
- **Netlify**: Static site generation support
- **Any static hosting provider**

## Features

- **Responsive Design**: Mobile-first approach with breakpoints
- **Professional Styling**: Institutional-grade visual design
- **Interactive Elements**: Hover states and smooth transitions
- **Performance Metrics**: Real-time fund performance tracking
- **Secure Access**: Role-based investor portal access
- **Live Trading View**: Professional trading dashboard interface

## Support

This is a demonstration hedge fund website showcasing institutional-grade web development for financial services.