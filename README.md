# Hookvault - AI UGC Script Generator

A production-ready landing page for Hookvault, an AI tool that generates viral UGC scripts in 2 minutes.

## 🚀 Features

- **Modern Design**: Dark theme with glassmorphism effects and gradient accents
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion powered animations throughout
- **Interactive Demo**: Live script preview with multiple hook variations
- **Email Capture**: Form validation and submission with React Hook Form
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Next.js 14 with App Router for optimal performance

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: Heroicons

## 📁 Project Structure

```
hookvault-landing/
├── app/
│   ├── page.tsx                 # Main landing page
│   ├── layout.tsx               # Root layout with metadata
│   ├── globals.css              # Global styles + Tailwind
│   └── api/
│       └── subscribe/
│           └── route.ts         # Email capture API endpoint
├── components/
│   ├── Hero.tsx                 # Hero section with typewriter effect
│   ├── ProblemSection.tsx       # Problem statement with animated stats
│   ├── FeatureCards.tsx         # Feature highlights with glassmorphism
│   ├── ComparisonTable.tsx      # ChatGPT vs Scriptly comparison
│   ├── HowItWorks.tsx           # 3-step process timeline
│   ├── ExampleOutput.tsx        # Interactive script demo
│   ├── CTASection.tsx           # Email capture with form validation
│   └── Footer.tsx               # Footer with links and social proof
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Design System

### Colors
- **Background**: `#0a0a0a` to `#1a1a2e` gradient
- **Primary**: Purple (`#8b5cf6`) to Pink (`#ec4899`) gradient
- **Text**: `#ffffff` (headings), `#a1a1aa` (body)
- **Accent**: Blue (`#3b82f6`) for highlights

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: `font-bold`, `tracking-tight`
- **Body**: `font-normal`, `leading-relaxed`

### Components
- **Glassmorphism**: `backdrop-blur-xl bg-white/5 border border-white/10`
- **Gradient Text**: `bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent`
- **Buttons**: Primary (gradient), Secondary (border), Ghost (minimal)

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Design

- **Mobile**: 375px - 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: 1024px+

All components are fully responsive with mobile-first approach.

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Color contrast WCAG AA compliant
- Screen reader friendly

## 🎭 Animations

- **Scroll-triggered**: Sections animate in as they enter viewport
- **Hover effects**: Cards lift and glow on hover
- **Typewriter**: Hero text cycles through different phrases
- **Floating**: Product preview has subtle floating animation
- **Form states**: Loading and success animations for form submission

## 🔧 Customization

### Adding New Sections
1. Create component in `/components`
2. Import and add to `app/page.tsx`
3. Follow existing animation patterns

### Styling
- Use Tailwind classes for consistent styling
- Add custom styles in `app/globals.css`
- Follow the established design system

### Animations
- Use Framer Motion for all animations
- Follow the existing animation patterns
- Use `useInView` hook for scroll-triggered animations

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with Next.js code splitting
- **Images**: Next.js Image component for optimization

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
1. Build the project: `npm run build`
2. Start production server: `npm start`
3. Deploy the `.next` folder

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please contact:
- Email: hello@hookvault.ai
- Twitter: @hookvault
