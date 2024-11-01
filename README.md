
# Inkspell Tattoo Studio Website

Welcome to **Inkspell Tattoo Studio** website repository. This project is a modern, fully responsive tattoo studio website built with **Next.js**, **Tailwind CSS**, and **Sanity CMS**. The website is designed for a seamless UX/UI experience, allowing users to easily book or inquire about tattoo services, view the gallery, subscribe to a newsletter for special offers, and read testimonials from social platforms.

## 📸 Project Preview

> The website design is inspired by [Yellow Wolf Tattoo Design Studio on Dribbble](https://dribbble.com/shots/18771176-Yellow-Wolf-Tattoo-Design-Studio) and is tailored for an immersive and user-friendly experience.

## 🎨 Features

- **Beautiful, Responsive Design**: Optimized for both desktop and mobile, with easy navigation for the best user experience.
- **Online Booking and Contact Options**: Users can effortlessly book or call for tattoo appointments.
- **Dynamic Tattoo Gallery**: A collection of tattoo artwork, managed easily via Sanity CMS.
- **Services Section**: Detailed description of tattoo services offered by the studio.
- **Newsletter Subscription**: Allows users to subscribe for special offers and updates.
- **Testimonials Section**: Displays reviews fetched dynamically from Google and Facebook.
- **CMS Integration with Sanity**: Full content management for tattoos, services, testimonials, and promotions.

## 🛠️ Technologies Used

- **[Next.js](https://nextjs.org/)**: React-based framework for server-side rendering and optimized performance.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid and customizable styling.
- **[Sanity CMS](https://www.sanity.io/)**: Headless CMS for easy content management.
- **[TypeScript](https://www.typescriptlang.org/)**: Type-safe JavaScript for better code quality.
- **Sanity Image URL Builder**: Efficient handling of images from Sanity.

## 🚀 Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/inkspell-tattoo-studio.git
cd inkspell-tattoo-studio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file at the root of the project and add your Sanity project credentials:

```plaintext
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### 4. Run the Development Server

```bash
npm run dev
```

The website should now be accessible at `http://localhost:3000`.

### 5. Build for Production

To build the project for production:

```bash
npm run build
```

Then, you can run the production build with:

```bash
npm start
```

## 📂 Project Structure

Here's a quick overview of the project structure to help you navigate and understand how each part functions:

```plaintext
src/
├── app/
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── studio/                   # (Optional) Embedded Sanity Studio
├── components/                   # Reusable UI components
│   ├── Header.tsx
│   ├── ServicesSection.tsx
│   ├── GallerySection.tsx
│   ├── TestimonialsSection.tsx
│   └── Footer.tsx
├── lib/
│   └── sanity/                   # Sanity configurations
│       ├── client.ts             # Sanity client
│       ├── image.ts              # Sanity image URL builder
│       └── schemas.ts            # Combined schema file
├── sanity/
│   ├── schemas/                  # Individual content schemas
│   │   ├── gallery.ts
│   │   ├── services.ts
│   │   └── testimonials.ts
│   └── sanity.config.ts          # Main Sanity configuration file
└── styles/
    ├── globals.css               # Tailwind and global CSS imports
    └── components/               # Component-specific styles (if needed)
```

## 📝 Key Features and CMS Management with Sanity

### 1. Home Page

The main page includes all the key sections: **Header**, **Services**, **Gallery**, **Testimonials**, and **Newsletter**.

### 2. Header

Displays the studio name, slogan, and navigation buttons for **Booking** and **Gallery View**. This component is styled with Tailwind for responsive design.

### 3. Services Section

Showcases the tattoo services offered by the studio. Service details (title, description, and image) are managed via **Sanity CMS** under the `services` schema.

### 4. Gallery Section

A dynamic gallery of tattoo images that can be easily updated via Sanity. The gallery images, titles, and descriptions are stored in the `gallery` schema.

### 5. Testimonials Section

Displays customer reviews pulled from external sources like **Google Reviews** and **Facebook**. (Optional: You can use a third-party service to aggregate reviews or manage them manually via Sanity.)

### 6. Newsletter Section

Allows users to subscribe for special offers. You can integrate with an email marketing tool like **Mailchimp** or **Brevo** (formerly Sendinblue) to handle newsletter subscriptions.

## 🌐 CMS Management with Sanity

With Sanity CMS, you can manage content such as gallery images, services, and testimonials with ease. Sanity Studio, if embedded, is accessible within the `/studio` route for convenient content management.

### Adding Content

1. **Services**: Add or update tattoo services, including service names, descriptions, and images.
2. **Gallery**: Add or update tattoo images with titles and descriptions.
3. **Testimonials**: Manage customer reviews to display authentic feedback on the site.
4. **Promotions** (Optional): Create and manage special promotions or offers for newsletter subscribers.

## ✨ Deployment

To deploy this Next.js application, you can use services like **Vercel**, **Netlify**, or **Hostinger** (for static export).

1. **Deploying on Vercel**:
   - Push your project to GitHub.
   - Import the repository into Vercel.
   - Set up your environment variables in Vercel's dashboard.
   - Deploy with a single click.

2. **Other Deployment Options**:
   - Export as a static site:
     ```bash
     npm run export
     ```
   - Upload the `out` folder to your preferred hosting provider.

## 📞 Contact and Support

If you have any questions or issues, feel free to reach out at **skcodingacc@gmail.com**.

## 🎉 Credits

- **Design Inspiration**: [Yellow Wolf Tattoo Design Studio](https://dribbble.com/shots/18771176-Yellow-Wolf-Tattoo-Design-Studio)
- **Developed with**: Next.js, Tailwind CSS, Sanity CMS, and TypeScript

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.
