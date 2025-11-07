# 🛍️ E-Commerce Shopping App (Next.js + NestJS + Prisma)

> A full-stack e-commerce application built following the Udemy course *Build a Shopping App With Next.js + NestJS & Prisma*.  
> This project leverages modern frameworks and tools to deliver a high-performance, scalable shopping platform.

---

<p align="center">
  <img src="https://github.com/ALong202/ECOMMERCE-NESTJS-NEXTJS/blob/main/public/images/stack.png?raw=true" alt="Tech Stack Overview" width="700" />
</p>

---

## 🚀 Technologies Used

- **Frontend**: Next.js (App directory) + TypeScript  
- **Backend**: NestJS + Prisma ORM + PostgreSQL database  
- **Styling / UI**: Tailwind CSS, Material UI  
- **Authentication & Security**: JWT authentication, secure API endpoints  
- **Payment & Real-Time Features**: Stripe integration for payments + webhooks + WebSockets for real-time updates  
- **Deployment**: Continuous delivery pipeline using Vercel (frontend) and Amazon Web Services (backend)  

---

## 🧩 Key Features

- Product listing, search, filtering & pagination  
- User authentication & profile management  
- Shopping cart, checkout flow & order history  
- Admin dashboard: manage products, orders, users  
- Upload images (via filesystem / AWS S3) for products  
- Real-time updates: when products are added or orders created  
- Secure and performant full-stack architecture  

---

## 📁 Project Structure

```bash
.
├── backend/          # NestJS API
│   ├── src/
│   └── prisma/
├── frontend/         # Next.js application
│   ├── app/
│   ├── components/
│   └── public/
└── prisma/           # Shared schema, migrations
```

---

## ⚙️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/ALong202/ECOMMERCE-NESTJS-NEXTJS.git
cd ECOMMERCE-NESTJS-NEXTJS
```

### 2. Install dependencies
```bash
# At root or separately in backend/ and frontend/
npm install
# or
pnpm install
```

### 3. Configure environment variables  
Create `.env` file(s) in `backend/` and `frontend/`, for example:

```
DATABASE_URL="postgresql://user:password@localhost:5432/ecommerce"
JWT_SECRET="your_secret_key"
STRIPE_SECRET_KEY="sk_live_..."
```

### 4. Run development servers
```bash
# Backend
cd backend
npm run start:dev

# Frontend
cd ../frontend
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧠 Architecture & Why It Matters

This project follows the architecture taught in the Udemy course:

- Using Next.js App directory and server components gives better performance and SEO.  
- NestJS provides a robust and modular backend structure.  
- Prisma ensures type-safe database access and easy migrations.  
- Stripe + WebSockets + real-time updates deliver a production-ready e-commerce experience.  
- Continuous deployment pipeline ensures every commit can go live automatically.

---

## 🧾 License

This project is licensed under the [MIT License](./LICENSE).

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/ALong202">ALong202</a>
</p>
