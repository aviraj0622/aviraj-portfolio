# Aviraj Anil Ligade — Developer Portfolio

A modern, high-performance, responsive personal portfolio website built for **Aviraj Anil Ligade**, B.Tech Computer Science and Engineering graduate (Batch 2026) from Sinhgad College of Engineering, Pandharpur.

Built with **React.js 19**, **Vite**, **Vanilla CSS3**, and **React Icons**.

---

## 🌟 Key Highlights & Design Features

- **Aesthetics & Theme**: Dark navy / black base (`#070a13`) accented with vivid cyan (`#38bdf8`), royal blue (`#60a5fa`), and neon purple (`#c084fc`) gradients with sleek glassmorphism and subtle glow accents.
- **Sticky Glass Navbar**: Smooth navigation with active section indicator, resume download button, and a responsive mobile drawer menu.
- **Hero Section**:
  - Direct introduction, role badge, graduation status, and CGPA (9.33 / 10).
  - Quick action buttons: **View Projects**, **Contact Me**, **Download Resume**, and **GitHub Profile**.
  - Interactive profile avatar placeholder with floating technology badges (Java, React.js, Spring Boot, MySQL).
  - Quick metrics row (CGPA, Projects, Grad Year, Stack Focus).
- **About Me**:
  - Professional bio highlighting focus on software development, Java, React.js, backend architecture, and databases.
  - Quick contact details grid and 4 professional strengths (Problem Solving, Creativity, Building Real-World Software, Continuous Learning).
- **Technical Skills**:
  - Category filters (*All*, *Programming Languages*, *Web Technologies*, *Backend Development*, *Databases*, *Mobile App Development*, *Tools & Platforms*, *Core Computer Science*).
  - Individual skill cards with proficiency tags and curriculum notes matching resume-level skills.
- **Featured Projects**:
  - **Food Appointment System** (React.js, Bootstrap 5, Node.js, Java, Spring Boot, MySQL, JWT, Razorpay, Cloudinary)
  - **Smart Farm Management System** (Flutter, Dart, Android Studio, Firebase, PDF API)
  - **Cloud-Based Video Streaming Platform** (React.js, Bootstrap 5, Node.js, Supabase, FFmpeg)
  - Complete with architecture highlights, technology pills, and editable GitHub & Live Demo links.
- **Work Experience / Internship**:
  - Detailed timeline card for **QSpiders Software Development Internship** (Dec 2025 – July 2026).
- **Academic Education**:
  - B.Tech CSE (Sinhgad College of Engineering, Pandharpur, CGPA: 9.33/10) featured card.
  - HSC Science (57%) & SSC (83.40%).
- **Certifications**:
  - AI for Students: Build Your Own Generative AI Model (NxtWave).
  - PHP and MySQL Training (Spoken Tutorial – IIT Bombay).
  - Python Training (Spoken Tutorial – IIT Bombay).
- **Contact & Connect**:
  - Direct functional links for email (`avirajligade.sknscoe.comp@gmail.com`) and phone (`+91 9075694640`).
  - One-click "Copy Email" button with instant feedback toast.
  - Interactive contact form with input validation and automatic email draft trigger.

---

## 🛠️ Tech Stack

- **Frontend Library**: React.js 19
- **Build Tool**: Vite 8
- **Styling**: Vanilla CSS3 (Custom Design System, Flexbox, Grid, Glassmorphism, CSS Variables)
- **Icons**: `react-icons` (Feather Icons)
- **Typography**: Google Fonts (*Outfit*, *Plus Jakarta Sans*, *JetBrains Mono*)

---

## 🚀 Getting Started Locally

### 1. Prerequisites
- **Node.js**: v18 or newer (v22+ recommended)
- **npm**: v9 or newer

### 2. Installation
Clone or navigate to the project root folder:
```bash
cd my-portfolio
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the port shown in terminal).

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

### 6. Lint Code
```bash
npm run lint
```

---

## ✏️ How to Customize Your Personal Information

All personal details, URLs, and projects are centralized in one file for effortless editing:

### `src/data/portfolioData.js`
Open `src/data/portfolioData.js` to update:
1. **GitHub Profile URL**:
   Replace `"https://github.com/your-username"` with your actual GitHub username.
2. **LinkedIn Profile URL**:
   Replace `"https://linkedin.com/in/your-username"` with your profile.
3. **Project Links**:
   In each project object inside `projectsData`:
   - `githubUrl`: Your repository URL
   - `liveUrl`: Your live deployed website/app URL
4. **Profile Image**:
   - Save your photo (e.g. `profile.jpg`) inside the `public/` directory or `src/assets/`.
   - In `portfolioData.js`, set `profileImage: "/profile.jpg"`.
5. **Resume PDF**:
   - The button downloads `/Aviraj2026.pdf`.
   - Update `public/Aviraj2026.pdf` with your updated resume PDF whenever you want.

---

## 📦 Step-by-Step: Upload to GitHub & Deploy Online

### Step 1: Initialize Git and Commit Your Project
Open PowerShell or your command terminal inside `my-portfolio`:
```bash
git init
git add .
git commit -m "feat: complete modern portfolio for Aviraj Anil Ligade"
```

### Step 2: Create a New Repository on GitHub
1. Sign in to your [GitHub account](https://github.com).
2. Click the **`+`** icon in the upper right corner and choose **New repository**.
3. Name your repository (e.g., `my-portfolio` or `aviraj-ligade-portfolio`).
4. Set visibility to **Public**.
5. Leave "Add a README file" **unchecked** (we already created one).
6. Click **Create repository**.

### Step 3: Push Your Project to GitHub
Copy the commands shown on your new GitHub repo page:
```bash
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git
git push -u origin main
```
*(Replace `<YOUR_GITHUB_USERNAME>` and `<YOUR_REPO_NAME>` with your GitHub details).*

---

### Step 4: Deploying Online

#### Option A: Deploy to Vercel (Recommended - Fastest & Free)
1. Sign in to [Vercel](https://vercel.com) using your GitHub account.
2. Click **Add New...** -> **Project**.
3. Select your repository `my-portfolio` and click **Import**.
4. Vercel automatically detects the Vite configuration:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**.
6. Your portfolio will be live in ~30 seconds with a free `https://your-project.vercel.app` domain!

#### Option B: Deploy to Netlify
1. Sign in to [Netlify](https://www.netlify.com) using your GitHub account.
2. Click **Add new site** -> **Import an existing project**.
3. Choose **GitHub** and select your `my-portfolio` repository.
4. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site**.

---

## 📂 Project Structure

```text
my-portfolio/
├── public/
│   ├── Aviraj-Ligade-Resume.pdf   # Downloadable PDF resume
│   └── favicon.svg                # Modern developer monogram favicon
├── src/
│   ├── assets/                    # Static assets
│   ├── components/                # Modular, reusable React components
│   │   ├── Navbar.jsx & .css      # Sticky nav with mobile drawer
│   │   ├── Hero.jsx & .css        # Hero bio, CTAs, avatar & metrics
│   │   ├── About.jsx & .css       # Bio narrative & professional strengths
│   │   ├── Skills.jsx & .css      # Filterable skills categorized by resume
│   │   ├── Projects.jsx & .css    # 3 featured projects with tags & features
│   │   ├── Experience.jsx & .css  # QSpiders internship timeline
│   │   ├── Education.jsx & .css   # B.Tech, HSC, SSC education cards
│   │   ├── Certifications.jsx & .css # NxtWave & Spoken Tutorial certificates
│   │   ├── Contact.jsx & .css     # Functional contact info & interactive form
│   │   └── Footer.jsx & .css      # Footer with quick links & back-to-top
│   ├── data/
│   │   └── portfolioData.js       # Central data file for all info & links
│   ├── App.jsx                    # Main application component
│   ├── App.css                    # App stylesheet
│   ├── index.css                  # Design system & dark theme variables
│   └── main.jsx                   # React DOM entry point
├── scripts/
│   └── generate-resume.js         # Resume PDF generation script
├── index.html                     # SEO metadata, title & Google Fonts
├── netlify.toml                   # Netlify configuration
├── vercel.json                    # Vercel configuration
├── package.json                   # Project scripts and dependencies
└── README.md                      # Documentation & deployment guide
```

---

## 📄 License
This project is open-source and free to use for personal portfolio development.
