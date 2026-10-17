# Mufeedh Ahmed — Portfolio

A personal portfolio presenting my learning, projects, and interests in data science and web development.

Built with React, TypeScript, Vite, and Tailwind CSS, with Framer Motion animations and Lucide icons.

## Explore the work

My current AI/ML project is [Weekly Dengue Forecasting in Sri Lanka](https://github.com/Mufee7/dengue-forecasting-sri-lanka), which combines dengue surveillance history and climate features for one-week-ahead forecasting.

- [GitHub](https://github.com/Mufee7)
- [LinkedIn](https://www.linkedin.com/in/mufeedh-ahmed/)

## Run the frontend locally

Install Node.js and npm, then run:

```sh
git clone https://github.com/Mufee7/portfolio-website.git
cd portfolio-website
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the frontend development server |
| `npm run build` | Generate the frontend in `dist/` |
| `npm run preview` | Preview the production frontend locally |
| `npm run lint` | Run ESLint |
| `npm run server` | Start the separate contact server; see limitations below |

## Structure

- `src/components/`: navigation, introduction, about, skills, projects section, contact, and footer.
- `src/assets/`: portfolio images.
- `src/App.tsx`: page composition.
- `server.js`: separate Express/Nodemailer contact endpoint.

## Current limitations

The contact backend is unfinished: it uses CommonJS in an ES module project, calls `createTransporter` rather than Nodemailer's `createTransport`, and contains a placeholder recipient. The frontend posts to `/api/contact`; local development also needs a proxy or matching backend routing. Treat the form as unfinished until these are resolved and email delivery is tested. Never commit email credentials.

The projects section currently contains testimonials rather than project case studies. Replacing it with repository links, screenshots, and clear descriptions of my contributions is a planned presentation improvement.

## Development status

This repository documents my portfolio as it exists. Installation, build, and email delivery have not been verified as part of this documentation update.
