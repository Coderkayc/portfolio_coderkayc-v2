# Portfolio — Next.js + Node.js + Express + MongoDB

A full-stack developer portfolio. Identical UI to the HTML version, now powered by a proper Next.js frontend and an Express/MongoDB backend.

---

## Project Structure

```
portfolio/
├── frontend/   → Next.js 14 (App Router)
└── backend/    → Express + Mongoose
```

---

## Getting Started

### 1. Clone & install

```bash
# Backend
cd backend
npm install
cp .env.example .env        # fill in your MONGO_URI

# Frontend
cd ../frontend
npm install
```

### 2. Configure environment

**backend/.env**
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/portfolio
CLIENT_ORIGIN=http://localhost:3000
```

### 3. Run in development

```bash
# Terminal 1 — backend (port 5000)
cd backend && npm run dev

# Terminal 2 — frontend (port 3000)
cd frontend && npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## How It Works

| Layer      | Tech                        | Purpose                             |
|------------|-----------------------------|-------------------------------------|
| Frontend   | Next.js 14, React           | UI, routing, theme toggle           |
| Styles     | Plain CSS (globals.css)     | Green/black design system           |
| API Proxy  | next.config.js rewrites     | `/api/*` → Express on port 5000     |
| Backend    | Node.js, Express            | REST API                            |
| Database   | MongoDB, Mongoose           | Stores contact form messages        |

---

## API Endpoints

| Method | Route          | Description              |
|--------|----------------|--------------------------|
| POST   | /api/contact   | Save a contact message   |
| GET    | /api/contact   | List all messages        |
| GET    | /api/health    | Server health check      |

---

## Customising

- **Your name / bio** → `src/components/Hero.jsx`, `About.jsx`
- **Projects** → `src/components/Projects.jsx` — update the `projects` array
- **Skills** → `src/components/Skills.jsx` — update the `skillGroups` array
- **Links / email** → `src/components/Contact.jsx`, `Navbar.jsx`
- **CV file** → drop your `cv.pdf` into `frontend/public/`
- **Photo** → replace the initials in `Hero.jsx` with an `<img>` tag

---

## Deployment

- **Frontend** → Vercel (`cd frontend && vercel`)
- **Backend** → Railway / Render / any Node host
- Update `CLIENT_ORIGIN` in backend `.env` to your Vercel URL
- Update `next.config.js` `destination` to your backend URL
