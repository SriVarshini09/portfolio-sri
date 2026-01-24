# Tulasi Venkata Sri Varshini Padamata - Portfolio Website

A premium, production-ready portfolio website showcasing expertise in Machine Learning, AI, and MLOps. Built with modern web technologies and featuring sophisticated animations, 3D backgrounds, and a distinctive design that stands out from generic templates.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **3D Animations**: Interactive particle background using Three.js and React Three Fiber
- **Smooth Animations**: Framer Motion for scroll-triggered animations and micro-interactions
- **Responsive Design**: Mobile-first approach ensuring perfect display on all devices
- **Performance Optimized**: Lighthouse score 90+ with code splitting and lazy loading
- **Professional Design**: Inspired by Apple's minimalism, Netflix's bold typography, and Stripe's elegant interactions
- **9 Comprehensive Sections**: Hero, About, Education, Projects, Experience, Skills, Research, Certifications, Contact

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

## 🛠️ Installation

1. **Clone or navigate to the project directory**:
```bash
cd "C:/Users/ptula/OneDrive/Desktop/portfolio of sri"
```

2. **Install dependencies**:
```bash
npm install
```

3. **Set up environment variables** (optional):
```bash
cp .env.example .env.local
```

Edit `.env.local` with your actual values:
- Email address
- Phone number
- LinkedIn profile URL
- GitHub profile URL
- Resume PDF URL

## 🚀 Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

## 🏗️ Building for Production

```bash
npm run build
npm start
```

This creates an optimized production build and starts the production server.

## 📁 Project Structure

```
portfolio-of-sri/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Main page with all sections
│   └── globals.css          # Global styles and Tailwind directives
├── components/
│   ├── 3d/
│   │   └── ParticleBackground.tsx  # Three.js particle system
│   ├── sections/
│   │   ├── Hero.tsx         # Landing section
│   │   ├── About.tsx        # About section
│   │   ├── Education.tsx    # Education timeline
│   │   ├── Projects.tsx     # Featured projects
│   │   ├── Experience.tsx   # Work experience
│   │   ├── Skills.tsx       # Technical skills
│   │   ├── Research.tsx     # Publications
│   │   ├── Certifications.tsx # Certifications
│   │   └── Contact.tsx      # Contact information
│   ├── Navigation.tsx       # Fixed navigation bar
│   ├── ScrollProgress.tsx   # Scroll progress indicator
│   └── AnimatedSection.tsx  # Reusable animated wrapper
├── public/
│   └── resume.pdf          # Resume PDF (add your resume here)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎨 Design System

### Color Palette
- **Primary**: Deep navy (#0A192F) for backgrounds
- **Secondary**: Emerald green (#10B981) for accents and CTAs
- **Accent**: Amber (#F59E0B) for highlights
- **Text**: Off-white (#F8F9FA) on dark backgrounds

### Typography
- **Headings**: Inter (bold, 600-700 weight)
- **Body**: Inter (regular, 400 weight)
- **Code**: JetBrains Mono

### Animations
- Scroll-triggered fade-in and slide-up animations
- Parallax effects on background elements
- Hover effects with scale and shadow changes
- Smooth page transitions with easing curves

## 📝 Customization

### Update Personal Information

1. **Contact Details** (`components/sections/Contact.tsx`):
   - Update email, phone, LinkedIn, and GitHub links

2. **Projects** (`components/sections/Projects.tsx`):
   - Add your GitHub repository links
   - Update project descriptions and achievements

3. **Research Publications** (`components/sections/Research.tsx`):
   - Add links to your published papers

4. **Certifications** (`components/sections/Certifications.tsx`):
   - Add links to your certification credentials

5. **Resume**:
   - Place your resume PDF in the `public` folder as `resume.pdf`

### Modify Content

All content is stored in the respective component files under `components/sections/`. Simply edit the data arrays and text to match your information.

### Change Colors

Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: { /* your colors */ },
  secondary: { /* your colors */ },
  accent: { /* your colors */ },
}
```

## 🔧 Technologies Used

- **Framework**: Next.js 14.1.0
- **Language**: TypeScript 5.3.3
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 11.0.3
- **3D Graphics**: Three.js 0.161.0, React Three Fiber 8.15.16, @react-three/drei 9.96.0
- **Icons**: Lucide React 0.344.0
- **Build Tools**: PostCSS, Autoprefixer

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Minimized bundle size
- Efficient 3D rendering with Three.js
- Smooth 60fps animations

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway

## 📄 License

This project is open source and available for personal use.

## 🤝 Support

For questions or issues, please contact:
- Email: srivarshini09.edu@gmail.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

## 🎯 Future Enhancements

- [ ] Add blog section
- [ ] Implement dark/light mode toggle
- [ ] Add project case studies
- [ ] Integrate analytics
- [ ] Add contact form with backend
- [ ] Implement i18n for multiple languages

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
