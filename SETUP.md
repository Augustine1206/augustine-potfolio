# Portfolio Setup Guide

## Prerequisites
- Node.js 16+ installed
- npm or yarn package manager
- Google Gemini API key (optional - for AI chat feature)

## Installation & Setup

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure Environment Variables (Optional)
To enable the AI chat feature, you need a Google Gemini API key:

1. Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Get your API key:
   - Go to https://makersuite.google.com/app/apikey
   - Create a new API key

3. Add your API key to `.env.local`:
   ```
   API_KEY=your_actual_api_key_here
   ```

### Step 3: Start Development Server
```bash
npm run dev
```

The portfolio will be available at `http://localhost:3000`

## Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

✅ **Responsive Portfolio Website**
- Hero section with background image
- About/Services section
- Skills with progress bars
- Work experience timeline
- Portfolio/project showcase with filtering
- Contact form
- Mobile-friendly navigation

✅ **AI Chat Assistant** (requires API key)
- Chat with an AI about Augustine's skills and experience
- Contextual responses based on portfolio data
- Demo mode with fallback messages if API key not configured

## Project Structure

```
├── components/
│   ├── Hero.tsx              # Hero section with call-to-action
│   ├── About.tsx             # About me and services section
│   ├── Skills.tsx            # Skills with progress bars
│   ├── Experience.tsx        # Work experience timeline
│   ├── Portfolio.tsx         # Project showcase with filtering
│   ├── Contact.tsx           # Contact form
│   ├── Sidebar.tsx           # Navigation sidebar
│   └── GeminiChat.tsx        # AI chat component
├── services/
│   └── geminiService.ts      # Gemini API integration
├── types.ts                  # TypeScript type definitions
├── constants.tsx             # Portfolio data (user info, projects, etc.)
├── App.tsx                   # Main app component
├── index.tsx                 # Entry point
├── vite.config.ts            # Vite configuration
└── index.html                # HTML template
```

## Technologies Used

- **React 19.2** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling (via CDN in HTML)
- **TypeScript** - Type safety
- **Lucide React** - Icons
- **Google Gemini API** - AI chat feature

## Customization

### Update Personal Information
Edit `constants.tsx` to update:
- User info (name, role, location, email, phone)
- Navigation links
- Services
- Skills
- Experience
- Projects

### Modify Styling
Tailwind CSS configuration is in the `<script>` tag in `index.html`. Colors:
- **Primary:** `#2c98f0` (Blue)
- **Secondary:** `#f9bf3f` (Yellow)
- **Dark:** `#000000`
- **Light:** `#f2f3f7`

### Change Fonts
Fonts are loaded from Google Fonts in `index.html`:
- **Serif:** Playfair Display
- **Sans:** Quicksand

## Troubleshooting

### AI Chat Not Working
- Make sure you have a valid Google Gemini API key
- Check that `.env.local` file exists with `API_KEY` set
- Restart the dev server after adding API key
- Check browser console for error messages

### Build Issues
- Delete `node_modules` and run `npm install` again
- Clear browser cache and hard refresh
- Make sure Node.js version is 16 or higher

### Styling Not Applied
- Tailwind CSS is loaded from CDN, check internet connection
- Hard refresh the browser (Ctrl+Shift+R or Cmd+Shift+R)

## Deployment

The portfolio can be deployed to:
- **Vercel** (recommended) - Seamless GitHub integration
- **Netlify** - Easy deployment with drag-and-drop
- **GitHub Pages** - Free hosting for static sites
- Any standard web host supporting Node.js/npm

### Deploy to Vercel
1. Push code to GitHub
2. Go to vercel.com and connect your repository
3. Add `API_KEY` environment variable in Vercel dashboard
4. Deploy!

## Support & Issues

For bugs or issues with the portfolio:
1. Check `BUG_FIXES.md` for known issues and fixes
2. Review the component code and comments
3. Check browser console for error messages

---

**Last Updated:** 2025-02-25
