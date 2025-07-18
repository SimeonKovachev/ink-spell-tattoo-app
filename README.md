# Inkspell Tattoo Studio Website

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=flat&logo=tailwind-css)
![Sanity](https://img.shields.io/badge/Sanity-CMS-red?style=flat&logo=sanity)
![License](https://img.shields.io/badge/License-ITSL-blue.svg)

A modern, fully responsive tattoo studio website built with **Next.js 14**, **Tailwind CSS**, and **Sanity CMS**. The website provides a seamless user experience for customers to explore services, view galleries, book appointments, and connect with the studio.

## 🚀 Live Demo

**[View Live Site](https://ink-spell.com)**

## ✨ Features

### 🎨 **User Experience**
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, immersive design with smooth animations
- **Fast Performance**: Server-side rendering with Next.js 14
- **SEO Optimized**: Meta tags, structured data, and optimized images

### 🛠️ **Functionality**
- **Gallery Showcase**: Dynamic tattoo gallery with filtering and lightbox
- **Service Management**: Detailed service descriptions and pricing
- **Contact & Booking**: Multiple contact options and appointment booking
- **Blog System**: Dynamic blog with articles, tattoo care tips, artist spotlights, and industry insights
- **Testimonials**: Customer reviews and social proof
- **CMS Integration**: Easy content management with Sanity Studio

### 🔧 **Technical Features**
- **TypeScript**: Type-safe development
- **Image Optimization**: Next.js Image component with Sanity CDN
- **Performance**: Optimized Core Web Vitals
- **Sanity CMS**: GROQ queries and real-time content management
- **Google Reviews API**: Live customer review integration
- **Google Ads Tracking**: Conversion tracking and analytics integration
- **Form Handling**: Contact forms with validation
- **Content Relationships**: Cross-referenced galleries, services, and blog posts

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **[Next.js 14](https://nextjs.org/)** | React framework with App Router |
| **[TypeScript](https://www.typescriptlang.org/)** | Type-safe JavaScript |
| **[Tailwind CSS](https://tailwindcss.com/)** | Utility-first CSS framework |
| **[Sanity CMS](https://www.sanity.io/)** | Headless content management |
| **[React Hook Form](https://react-hook-form.com/)** | Form handling and validation |
| **[TanStack React Query](https://tanstack.com/query)** | Data fetching and caching |
| **[Vercel](https://vercel.com/)** | Hosting and CI/CD deployment |
| **[Vercel Analytics](https://vercel.com/analytics)** | Performance monitoring |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Sanity account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SimeonKovachev/ink-spell-tattoo-app.git
   cd ink-spell-tattoo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   
   Create `.env.local` in the root directory:
   ```env
   # Sanity Configuration
   SANITY_PROJECT_ID=your_project_id
   SANITY_DATASET=production
   SANITY_API_VERSION=2024-11-01
   SANITY_API_TOKEN=your_api_token
   
   # Site Configuration
   SITE_URL=https://your-site-url.com
   SITE_NAME="Ink Spell Tattoo Studio"
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   
   # Email Configuration (Titan Email)
   EMAIL_HOST=smtp.titan.email
   EMAIL_PORT=465
   EMAIL_USER=your_email@yourdomain.com
   EMAIL_PASS=your_email_password
   EMAIL_FROM=your_email@yourdomain.com
   
   # Google Services Integration
   GOOGLE_API_KEY=your_google_api_key
   NEXT_PUBLIC_GOOGLE_PLACE_ID=your_google_place_id

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Sanity Studio Setup

1. **Access Sanity Studio**
   ```bash
   npm run studio
   # or visit /studio route if embedded
   ```
   
## 🎨 Key Components

### 🏠 **Landing Page**
- Hero section with compelling visuals
- About me section
- Services overview (tattoo services & permanent makeup)
- Monthly flash tattoos showcase
- Gallery highlights
- Google reviews integration
- FAQ section
- Book now call-to-action

### 🖼️ **Gallery**
- Filterable tattoo gallery
- Image lightbox/modal
- Category organization
- Responsive grid layout

### 🛍️ **Services**
- Service descriptions and pricing
- Booking call-to-action
- Process explanation
- Artist specializations

### 📞 **Contact & Booking**
- Contact form with validation
- Studio location and hours
- Social media links
- Appointment booking integration

### 💼 **Partnership Opportunities**

| Opportunity Type | Description | Contact |
|------------------|-------------|---------|
| **🤝 Strategic Partnerships** | Collaborations with tattoo supply brands, other studios | iva.lazarova.draws@gmail.com |
| **🏷️ Brand Sponsorships** | Sponsorship from ink brands, equipment companies | iva.lazarova.draws@gmail.com |
| **⚖️ Website Development** | Custom tattoo studio websites for other artists | skcodingacc@gmail.com |

**Interested in working together?** Email **skcodingacc@gmail.com**

## 🤝 Contributing

We welcome contributions from the community! By contributing to this project, you agree to our **Contributor License Agreement (CLA)** outlined in the [LICENSE](LICENSE) file.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### What You Get

- **Portfolio Building**: Contribute to a real-world, production-quality project
- **Learning Experience**: Work with modern technologies (Next.js 14, TypeScript, Sanity)
- **Recognition**: Your contributions will be acknowledged
- **Community**: Join a growing developer community

**Note**: All contributions are subject to the terms in our [LICENSE](LICENSE) file.

## 📄 License

This project is licensed under the **Inkspell Tattoo Studio License (ITSL)** - see the [LICENSE](LICENSE) file for details.

### 🆓 **Open Source Benefits**
- ✅ **Personal & Educational Use**: Free for learning and non-commercial projects
- ✅ **Study & Review**: Examine code for best practices and techniques
- ✅ **Contributions Welcome**: Help improve the project and build your portfolio

### 💼 **Commercial Licensing & Partnerships**

**For Commercial Use**: Contact us for licensing agreements  
**For Brand Sponsorships**: Partnership opportunities with tattoo industry brands  
**For Website Services**: Custom tattoo studio websites for other artists

**Contact**: skcodingacc@gmail.com or iva.lazarova.draws@gmail.com  
**Subject**: Partnership / Sponsorship Inquiry

### 🚀 **Why Partner With Us?**

- 🎯 **Growing Market**: Tattoo industry experiencing rapid growth and digital transformation
- 💻 **Technical Expertise**: Professional web development skills for tattoo industry
- 🌟 **Quality Work**: High-standard tattoo artistry and professional online presence
- 👥 **Active Presence**: Growing social media following and client base

## 📞 Contact

### 🎨 **Tattoo Artist & Designer**
**Iva Lazarova** - *Ink Spell Tattoo Studio*  
📧 **Email**: [iva.lazarova.draws@gmail.com](mailto:iva.lazarova.draws@gmail.com)  
🎨 **Portfolio**: [ArtStation](https://www.artstation.com/ivalazarova3)  
🔗 **Links**: [Linktree](https://linktr.ee/ink_spell_tattoo)  
💼 **LinkedIn**: [Iva Lazarova](http://www.linkedin.com/in/iva-lazarova-ink)  

*For tattoo appointments, design consultations, and artistic collaborations*

---

### 💻 **Developer & Technical Lead**
**Simeon Kovachev** - *Full-Stack Developer*  
📧 **Email**: [skcodingacc@gmail.com](mailto:skcodingacc@gmail.com)  
🗂️ **Repository**: [GitHub - ink-spell-tattoo-app](https://github.com/SimeonKovachev/ink-spell-tattoo-app)  

*For code inquiries, technical partnerships, and development collaborations*

---

## 🙏 Acknowledgments

### 🎨 **Creative Team**
- **🖌️ Original Design & Concept**: **Iva Lazarova** - Complete UI/UX design and branding
- **📱 Portfolio Showcase**: [ArtStation Gallery](https://www.artstation.com/ivalazarova3)
- **🔗 Social Presence**: [Ink Spell Tattoo Links](https://linktr.ee/ink_spell_tattoo)

### 🛠️ **Technical Foundation**
- **⚡ Framework**: [Next.js 14](https://nextjs.org/) - React-based framework
- **🎨 Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **📝 CMS**: [Sanity](https://www.sanity.io/) - Headless content management
- **🔷 Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe development
- **☁️ Hosting**: [Vercel](https://vercel.com/) for seamless deployment and CI/CD

---

**⭐ If you found this project inspiring, please give it a star on GitHub!**  
**🤝 Interested in collaborating? Reach out to either Iva or Simeon based on your needs!**
---

**⭐ If you found this project helpful, please give it a star on GitHub!**
