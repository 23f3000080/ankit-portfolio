# Ankit Aarya - Portfolio Website

![Portfolio Preview](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGZvbGlvfGVufDB8fDB8fHww)

A modern, responsive portfolio website built with HTML, Tailwind CSS, and vanilla JavaScript. Features dark/light mode toggle, smooth animations, and a fully functional contact form.

## 🚀 Live Demo

[View Live Portfolio](https://yourusername.github.io) <!-- Replace with your actual GitHub Pages URL -->

## ✨ Features

- **🎨 Modern Design** - Clean, professional layout with smooth animations
- **🌓 Dark/Light Mode** - Toggle between themes with persistent user preference
- **📱 Fully Responsive** - Optimized for all devices and screen sizes
- **⚡ Fast Performance** - Built with lightweight, optimized code
- **📧 Functional Contact Form** - Integrated with Formspree for form handling
- **🎯 Interactive Elements** - Smooth scrolling, hover effects, and animations
- **🔍 SEO Optimized** - Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: HTML5, Tailwind CSS, Vanilla JavaScript
- **Icons**: Font Awesome 6
- **Form Handling**: Formspree
- **Deployment**: GitHub Pages
- **Fonts**: Inter (via Tailwind CSS)

## 📁 Project Structure

```
portfolio/
├── index.html              # Home page
├── about.html              # About me page
├── projects.html           # Projects showcase
├── contact.html            # Contact form page
├── assets/
│   ├── css/
│   │   └── style.css       # Custom styles
│   └── js/
│       ├── main.js         # Main JavaScript functionality
│       ├── projects.js     # Projects page specific JS
│       └── contact.js      # Contact form handling
└── images/                 # Project images and assets
    ├── parkease.png
    ├── quizzy.png
    └── coaching-site.png
```

## 🎯 Pages Overview

### 🏠 Home Page (`index.html`)
- Hero section with introduction
- Skills showcase with animated progress bars
- Featured projects grid
- Client testimonials
- Call-to-action section

### 👨‍💻 About Page (`about.html`)
- Personal introduction and background
- Education timeline (IIT Madras)
- Skills and expertise sections
- Personal qualities
- Career goals and vision

### 💼 Projects Page (`projects.html`)
- Project showcase with filtering
- Interactive project cards
- Technology tags
- Project details modal
- GitHub and demo links

### 📞 Contact Page (`contact.html`)
- Functional contact form (Formspree integration)
- Multiple contact methods
- FAQ section
- Social media links
- Availability status

## 🚀 Quick Start

### Prerequisites
- A GitHub account
- Basic understanding of HTML/CSS/JavaScript

### Installation

1. **Fork this repository**
   ```bash
   # Click the 'Fork' button on GitHub or
   git clone https://github.com/yourusername/portfolio-website.git
   ```

2. **Customize the content**
   - Update personal information in all HTML files
   - Replace placeholder images in `/images` folder
   - Modify colors and styling in `assets/css/style.css`
   - Update social media links and contact information

3. **Set up Formspree (for contact form)**
   - Go to [Formspree.io](https://formspree.io/)
   - Create a free account
   - Create a new form and get your form ID
   - Replace `your-form-id` in `contact.html` with your actual Formspree form ID

4. **Deploy to GitHub Pages**
   - Push your code to GitHub
   - Go to repository Settings → Pages
   - Select "Deploy from branch" and choose your main branch
   - Your site will be live at `https://yourusername.github.io`

## 🎨 Customization Guide

### Changing Colors
Update CSS variables in `assets/css/style.css`:
```css
:root {
  --primary: #6366f1;      /* Main brand color */
  --secondary: #f59e0b;    /* Accent color */
  --accent: #10b981;       /* Success/feature color */
  /* ... other variables */
}
```

### Adding New Projects
1. Copy the project card template in `projects.html`
2. Update:
   - Project title and description
   - Image source
   - Technology tags
   - GitHub and demo links
   - Project features

### Modifying Personal Information
Update the following sections in each HTML file:
- Name and title in navigation and hero sections
- Education details in about page
- Skills and technologies
- Contact information
- Social media links

## 📧 Contact Form Setup

The contact form uses Formspree for backend functionality. Here's how to set it up:

1. **Sign up at [Formspree.io](https://formspree.io/)**
2. **Create a new form** and note the form ID
3. **Update the form action** in `contact.html`:
   ```html
   <form action="https://formspree.io/f/your-actual-form-id" method="POST">
   ```
4. **Test the form** by submitting a message

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Development

### Local Development
```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio-website.git

# Navigate to project directory
cd portfolio-website

# Open in browser (no build process required)
open index.html
```

### File Structure Details
- **`index.html`** - Main landing page with hero section and featured work
- **`about.html`** - Detailed about page with education and skills
- **`projects.html`** - Projects showcase with filtering functionality
- **`contact.html`** - Contact form and information
- **`assets/css/style.css`** - All custom styles and CSS variables
- **`assets/js/main.js`** - Core functionality (theme toggle, navigation)
- **`assets/js/projects.js`** - Projects filtering and modal functionality
- **`assets/js/contact.js`** - Form handling and FAQ functionality

## 📈 Performance Features

- **Lazy loading** for images
- **CSS variables** for easy theme management
- **Minimal JavaScript** for better performance
- **Optimized images** and assets
- **Efficient CSS** with Tailwind utility classes

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS framework
- [Font Awesome](https://fontawesome.com/) for beautiful icons
- [Formspree](https://formspree.io/) for form backend service
- [Unsplash](https://unsplash.com/) for beautiful placeholder images

## 📞 Support

If you have any questions or need help with setup, please:

1. Check the [GitHub Issues](https://github.com/yourusername/portfolio-website/issues)
2. Create a new issue with your question
3. Email me at: 23f3000080@ds.study.iitm.ac.in

## 🌟 Show your support

Give a ⭐️ if this project helped you!

---

**Built with ❤️ by Ankit Aarya**

- 📧 Email: [23f3000080@ds.study.iitm.ac.in](mailto:23f3000080@ds.study.iitm.ac.in)
- 💼 LinkedIn: [Ankit Aarya](https://www.linkedin.com/in/ankit-kumar-5aaa59314/)
- 🐙 GitHub: [@23f3000080](https://github.com/23f3000080)
- 🌐 Portfolio: [Live Demo](https://yourusername.github.io)

---

*Last updated: September 2025*