# Augustine Asante - Portfolio

A modern, responsive portfolio website built with React and Vite. Showcase your skills, experience, projects, and contact information in a sleek, professional design.

## Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Navigation** - Easy sidebar navigation with mobile hamburger menu
- **Project Showcase** - Display your portfolio projects with filtering by category
- **Skills & Experience** - Highlight your technical skills and work experience
- **Contact Section** - Simple contact information display
- **Modern UI** - Clean and professional design with smooth animations

## Tech Stack

- **React 19.2** - UI framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool and dev server
- **Lucide React** - Icon library

## Quick Start

### Installation

1. Clone the repository
```bash
git clone https://github.com/Augustine1206/augustine-potfolio.git
cd augustine-potfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The app will open at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally

## Project Structure

```
├── components/
│   ├── About.tsx         # About section
│   ├── Contact.tsx       # Contact section
│   ├── Experience.tsx    # Experience section
│   ├── Hero.tsx          # Hero/header section
│   ├── Portfolio.tsx     # Portfolio/projects section
│   ├── Sidebar.tsx       # Navigation sidebar
│   └── Skills.tsx        # Skills section
├── App.tsx               # Main app component
├── constants.tsx         # Data and constants
├── types.ts              # TypeScript types
├── index.tsx             # App entry point
├── index.css             # Global styles
└── vite.config.ts        # Vite configuration
```

## Customization

### Adding Projects

Edit `constants.tsx` and add your projects to the `PROJECTS` array:

```typescript
{
  id: 'project-id',
  title: 'Your Project Title',
  description: 'Project description',
  category: 'Web Design',
  image: 'project-image-url',
  link: 'project-link'
}
```

### Updating Skills

Modify the `SKILLS` array in `constants.tsx` with your technical skills.

### Changing Contact Information

Update the contact details in the `Contact` component.

## Deployment

### Deploy to Vercel

The easiest way to deploy your portfolio:

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect the settings and deploy

### Other Hosting Options

Build the project first:
```bash
npm run build
```

The output will be in the `dist` folder, ready to deploy to any static hosting service (Netlify, GitHub Pages, etc.).

## License

This project is open source and available under the MIT License.

## Author

Augustine Asante - [GitHub](https://github.com/Augustine1206)

---

Made with ❤️ using React
