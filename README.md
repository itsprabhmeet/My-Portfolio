# Prabhmeet Singh - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS showcasing my skills, projects, and experience as a Backend Developer.

## 🚀 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Mode** - Toggle between dark and light themes
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Components** - Engaging user interface with hover effects and transitions
- **Performance Optimized** - Fast loading and smooth scrolling experience

## 🛠️ Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Icons:** Lucide React
- **Deployment:** Ready for Netlify, Vercel, or any static hosting

## 📋 Prerequisites

Before running this project, make sure you have the following installed on your system:

### For Windows:
- **Node.js** (version 18.0 or higher)
- **npm** (comes with Node.js) or **yarn**
- **Git** (optional, for cloning)
- **Code Editor** (VS Code recommended)

### For Linux:
- **Node.js** (version 18.0 or higher)
- **npm** (comes with Node.js) or **yarn**
- **Git** (optional, for cloning)
- **Code Editor** (VS Code recommended)

## 🔧 Installation Guide

### Windows Setup

#### Step 1: Install Node.js
1. Visit [nodejs.org](https://nodejs.org/)
2. Download the **LTS version** for Windows
3. Run the installer and follow the setup wizard
4. Verify installation by opening **Command Prompt** or **PowerShell** and running:
   ```cmd
   node --version
   npm --version
   ```

#### Step 2: Install Git (Optional)
1. Visit [git-scm.com](https://git-scm.com/)
2. Download Git for Windows
3. Install with default settings
4. Verify installation:
   ```cmd
   git --version
   ```

#### Step 3: Clone or Download Project
**Option A: Using Git**
```cmd
git clone https://github.com/itsprabhmeet/portfolio-website.git
cd portfolio-website
```

**Option B: Download ZIP**
1. Download the project as ZIP file
2. Extract to your desired location
3. Open Command Prompt in the project folder

#### Step 4: Install Dependencies
```cmd
npm install
```

#### Step 5: Run Development Server
```cmd
npm run dev
```

#### Step 6: Open in Browser
- Open your browser and go to: `http://localhost:5173`
- The website should now be running locally!

### Linux Setup

#### Step 1: Install Node.js

**Ubuntu/Debian:**
```bash
# Update package index
sudo apt update

# Install Node.js and npm
sudo apt install nodejs npm

# Verify installation
node --version
npm --version
```

**CentOS/RHEL/Fedora:**
```bash
# For CentOS/RHEL
sudo yum install nodejs npm

# For Fedora
sudo dnf install nodejs npm

# Verify installation
node --version
npm --version
```

**Arch Linux:**
```bash
# Install Node.js and npm
sudo pacman -S nodejs npm

# Verify installation
node --version
npm --version
```

**Alternative: Using Node Version Manager (NVM) - Recommended**
```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Reload terminal or run:
source ~/.bashrc

# Install latest LTS Node.js
nvm install --lts
nvm use --lts

# Verify installation
node --version
npm --version
```

#### Step 2: Install Git (if not already installed)
```bash
# Ubuntu/Debian
sudo apt install git

# CentOS/RHEL
sudo yum install git

# Fedora
sudo dnf install git

# Arch Linux
sudo pacman -S git

# Verify installation
git --version
```

#### Step 3: Clone or Download Project
**Option A: Using Git**
```bash
git clone https://github.com/itsprabhmeet/portfolio-website.git
cd portfolio-website
```

**Option B: Download and Extract**
```bash
# If you downloaded the ZIP file
unzip portfolio-website.zip
cd portfolio-website
```

#### Step 4: Install Dependencies
```bash
npm install
```

#### Step 5: Run Development Server
```bash
npm run dev
```

#### Step 6: Open in Browser
- Open your browser and go to: `http://localhost:5173`
- The website should now be running locally!

## 📜 Available Scripts

In the project directory, you can run:

### `npm run dev`
- Runs the app in development mode
- Open [http://localhost:5173](http://localhost:5173) to view it in the browser
- The page will reload if you make edits

### `npm run build`
- Builds the app for production to the `dist` folder
- Optimizes the build for the best performance
- The build is minified and ready for deployment

### `npm run preview`
- Serves the production build locally
- Useful for testing the production build before deployment

### `npm run lint`
- Runs ESLint to check for code quality issues
- Helps maintain consistent code style

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "homepage": "https://yourusername.github.io/portfolio-website",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 🔧 Customization

### Personal Information
Update your personal information in:
- `src/components/Hero.tsx` - Name, title, description
- `src/components/About.tsx` - About section content
- `src/components/Contact.tsx` - Contact information
- `public/Resume.docx` - Replace with your resume

### Projects
Update your projects in:
- `src/components/Projects.tsx` - Add/modify project information

### Skills
Update your skills in:
- `src/components/Skills.tsx` - Modify skill categories and levels

### Social Media Links
Update social media links in:
- `src/components/Hero.tsx`
- `src/components/Contact.tsx`

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Kill process using port 5173
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Linux
sudo lsof -t -i tcp:5173 | xargs kill -9
```

**Node modules issues:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Permission errors (Linux):**
```bash
# Fix npm permissions
sudo chown -R $(whoami) ~/.npm
```

### Getting Help

If you encounter any issues:
1. Check the [Issues](https://github.com/itsprabhmeet/portfolio-website/issues) section
2. Make sure you have the correct Node.js version
3. Try deleting `node_modules` and running `npm install` again
4. Check the browser console for error messages

## 📱 Browser Support

This website supports all modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Prabhmeet Singh**
- GitHub: [@itsprabhmeet](https://github.com/itsprabhmeet)
- LinkedIn: [Prabhmeet Singh](https://www.linkedin.com/in/prabhmeetsingh-507bab22b/)
- Instagram: [@its.prabhmeet](https://www.instagram.com/its.prabhmeet/)

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Powered by [Vite](https://vitejs.dev/)

---

**Happy Coding! 🚀**