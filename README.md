# Thanya M R — Personal Portfolio Website

A complete, modern personal portfolio website built with React + Vite + Tailwind CSS + Framer Motion.

## 🚀 Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Contact**: EmailJS (configurable)

## 📁 Project Structure

```
tmr portfolio/
├── public/
│   ├── favicon.svg
│   ├── resume/
│   │   └── Thanya_MR_Resume.pdf       <- Place your resume here
│   └── images/
│       ├── hero/
│       │   └── thanya-hero.jpg        <- Image 12 (main portrait)
│       ├── bootcamp/
│       │   ├── usim-campus.jpg        <- USIM university photo (shown first)
│       │   ├── bootcamp-1.jpg to bootcamp-7.jpg
│       ├── internships/toyota/
│       │   ├── toyota-1.jpg to toyota-3.jpg
│       ├── social-activities/
│       │   ├── social-1.jpg           <- Image 13
│       │   └── social-2.jpg           <- Image 14
│       ├── team-collaboration/
│       │   ├── team-1.jpg to team-4.jpg  <- Images 15-18
│       ├── hackathons/
│       │   ├── hackathon-1.jpg to hackathon-4.jpg  <- Images 19-22
│       └── sports/
│           ├── sports-1.jpg to sports-4.jpg  <- Images 23-26
├── src/
│   ├── components/         <- All section components
│   ├── data/
│   │   └── portfolioData.js  <- Edit all content here
│   ├── hooks/              <- useReveal, useActiveSection
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
```

## Setup

```bash
npm install
npm run dev
npm run build
```

## Adding Your Images

Place images in `public/images/` with the exact filenames listed above.
Missing images show elegant placeholders automatically.

Hero photo: `public/images/hero/thanya-hero.jpg`
Resume: `public/resume/Thanya_MR_Resume.pdf`

## Contact Form (EmailJS)

1. Sign up at emailjs.com
2. Create `.env` in project root:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
3. Uncomment the EmailJS block in `src/components/Contact.jsx`

## Edit Content

All content is in `src/data/portfolioData.js` — change personal info, experiences, projects, skills, and more from one file.

## Deployment

**Vercel**: `npx vercel`
**Netlify**: `npm run build`, then upload `dist/` folder.

## Missing Assets Checklist

- [ ] Hero portrait: `public/images/hero/thanya-hero.jpg`
- [ ] Resume PDF: `public/resume/Thanya_MR_Resume.pdf`
- [ ] USIM campus: `public/images/bootcamp/usim-campus.jpg`
- [ ] Bootcamp photos: `bootcamp-1.jpg` to `bootcamp-7.jpg`
- [ ] Toyota photos: `toyota-1.jpg` to `toyota-3.jpg`
- [ ] Social activities: `social-1.jpg` (Image 13), `social-2.jpg` (Image 14)
- [ ] Team collaboration: `team-1.jpg` to `team-4.jpg` (Images 15-18)
- [ ] Hackathons: `hackathon-1.jpg` to `hackathon-4.jpg` (Images 19-22)
- [ ] Sports: `sports-1.jpg` to `sports-4.jpg` (Images 23-26)
- [ ] Update GitHub URL in `portfolioData.js`
