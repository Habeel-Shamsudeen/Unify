# Unify

A social, interactive web app for college students to discover peers, share projects, post events, and ask questions.

## Tech stack

- React 18 + Vite 5
- React Router v6
- Tailwind CSS 3 (custom theme in `tailwind.config.js`)
- Chakra UI Provider
- Appwrite JavaScript SDK (Cloud Appwrite)
- styled-components and MUI (present in deps; optional/partial usage)

## Features

- Projects: browse and add projects with name, description, and skills.
- Events: browse and add events with name, description, image URL, and date.
- Forums: browse and create forum questions with optional description.
- Direct messages: UI stub exists; functionality pending.
- Login: UI only at the moment; authentication not wired to Appwrite yet.
- Theming: Tailwind-based design with colors defined in `tailwind.config.js`.

## Quick start

Prerequisites:
- Node.js >= 18
- npm

Install dependencies:
```bash
npm install
```

Run the dev server:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

Lint:
```bash
npm run lint
```

## Appwrite setup

This project reads/writes to Appwrite Databases. IDs are currently hard-coded in the page components; update them to your own IDs.

- Endpoint: `https://cloud.appwrite.io/v1`
- Project ID: `65dedcff9fc1f5555b01` (replace with your project's ID)

Expected database and collections:

- Database ID: `65df74df667cadaa97e1` (replace with your DB ID)
- Collections:
  - Projects (ID: `65df778338999c7e4b03`)
    - `name`: string
    - `description`: string
    - `skills`: array of strings
  - Events (ID: `65df7f05999aba0a5552`)
    - `name`: string
    - `description`: string
    - `image_url`: string (URL)
    - `date`: string or datetime
  - Forums (ID: `65df9e72404b451c8296`)
    - `question`: string
    - `description`: string (optional)

Where to update IDs in code:
- `src/pages/AddProject.jsx`
- `src/pages/ProjectPage.jsx`
- `src/pages/AddEvent.jsx`
- `src/pages/EventPage.jsx`
- `src/pages/NewForumPost.jsx`

Optional: Centralize Appwrite config in `src/lib/appwrite.js` and use Vite env vars (`VITE_APPWRITE_ENDPOINT`, `VITE_APPWRITE_PROJECT_ID`, etc.) for easier configuration.

## Project structure

```
/workspace
  src/
    components/
    pages/
    lib/
      appwrite.js
    main.jsx
    App.jsx
  index.html
  tailwind.config.js
  vite.config.js
```

## Roadmap / known limitations

- Authentication not implemented; login is UI only.
- Direct messaging not implemented.
- Appwrite IDs are hard-coded in components.
- Basic validation and error handling is minimal.
- Some dependencies (MUI, styled-components) may be unused or partially used.

## Scripts

- `dev`: start Vite dev server
- `build`: production build
- `preview`: preview built app
- `lint`: run eslint

## License

No license specified.

