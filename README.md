# 📚 StudyNook – Library Study Room Booking Platform

StudyNook is a full-stack web application that allows students and library users to discover, book, and manage study rooms efficiently. Users can browse available rooms, make bookings for specific time slots, manage their own listings, and prevent scheduling conflicts through an intelligent booking system.

## 🌐 Live Links

- Frontend: https://study-nook-blush.vercel.app/
- Backend API: https://study-nook-server-zeta.vercel.app/

## 🔗 GitHub Repositories

- Client Repository: https://github.com/a1mb0t38/study-nook
- Server Repository: https://github.com/a1mb0t38/study-nook-server

---

## ✨ Features

- Secure authentication with Email/Password and Google Sign-In.
- JWT-based authentication using HTTP-only cookies.
- Room owners can add, update, and delete their own room listings.
- Real-time booking system with booking conflict detection.
- Automatic booking cost calculation based on selected time slots.
- Manage personal room listings and bookings from a dedicated dashboard.
- Cancel future bookings with status tracking.
- Dark/Light mode support with theme persistence.
- Fully responsive design for mobile, tablet, and desktop devices.

---

## 🛠️ Technologies Used

### Frontend

- Next.js
- React.js
- JavaScript (ES6+)
- Tailwind CSS
- DaisyUI
- HeroUI
- React Icons

### Backend

- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Token)
- Better Auth
- Cookie Parser
- CORS

### Deployment & Authentication

- Google OAuth
- HTTP-Only Cookies
- Vercel

---

## 🚀 Core Functionalities

### Authentication

- Email & Password Login/Register
- Google Authentication
- Protected Routes
- Persistent User Sessions

### Room Management

- Add New Study Rooms
- Update Existing Rooms
- Delete Room Listings
- View Detailed Room Information

### Booking System

- Book Study Rooms
- Prevent Double Bookings
- Cancel Future Bookings
- Track Booking History

---

## 📦 Installation

### Clone Repositories

```bash
git clone https://github.com/a1mb0t38/study-nook.git
git clone https://github.com/a1mb0t38/study-nook-server.git
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

---

## 🔒 Environment Variables

Create a `.env.local` file for the frontend and a `.env` file for the backend.

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=your_app_url
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
JWT_SECRET=your_jwt_secret
```

---

## 🎯 Future Improvements

- Email notifications for bookings
- Room availability calendar
- User reviews and ratings
- Admin dashboard
- Advanced analytics and reporting

---

## 👨‍💻 Developer

Developed by Noor as a full-stack web application focused on secure authentication, room booking management, and modern responsive design.