# 🌱 Organic Shopper - Natural Ingredients E-commerce Project
   
A complete e-commerce solution for organic and natural ingredient shopping, featuring user, seller, and admin interfaces built on modern web technologies.
🌟 Key Features


# User Portal

🔐 Secure authentication with JWT
🔍 Advanced product search with filters (category, organic certification, price)
🗓️ Real-time order tracking
💳 Secure payment processing via Stripe
📱 Mobile-responsive design
✉️ Email/SMS notifications


# Admin Console

👥 Comprehensive user and seller management
📈 Advanced analytics dashboard
⚙️ System configuration
🔐 Role-based access control
📝 Content management

# 🛠 Technology Stack

# Frontend
React.js, Redux Toolkit, Tailwind CSS


# Backend
Node.js, Express.js, MongoDB


# Authentication
JWT, Bcrypt


# Payments
Stripe API


# Media Storage
Cloudinary


# Notifications
Nodemailer, Twilio (SMS)


# 🚀 Quick Start Guide
Prerequisites

Node.js v20.x+
MongoDB v6.x+
Cloudinary account
Stripe account

Installation
# Clone the repository

git clone https://github.com/Shahid1275/organic-shopper.git

cd organic-shopper

Backend Configuration (./backend/.env)

# MongoDB connection string

MONGO_URI=mongodb://localhost:27017/organic_shopper

# JWT secret key for authentication

JWT_SECRET=your_secure_jwt_secret

# Server port
PORT=3000

# Cloudinary credentials (for image uploads)

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret

# Stripe secret key (for payments)
STRIPE_SECRET_KEY=your_stripe_secret_key

# SMTP configuration (for sending emails)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_email_password

Frontend Configuration (./frontend/.env)

VITE_API_URL=http://localhost:3000/api

VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key

VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name

Admin Configuration (./admin/.env)

VITE_API_URL=http://localhost:3000/api

VITE_ADMIN_SECRET=your_admin_secret

Running the System
Development Mode

# Backend

cd backend

npm install

npm run dev

# Frontend (User)

cd ../frontend

npm install

npm run dev

# Admin Panel

cd ../admin

npm install

npm run dev

# 🗃️ Database Setup
 Install MongoDB
 Follow instructions at https://www.mongodb.com/docs/manual/installation/

# Start service
sudo systemctl start mongod

# ☁️ Cloudinary Setup

Sign up at Cloudinary
Get credentials from dashboard
Add to backend/.env

# 💳 Stripe Setup

Create account at Stripe
Get API keys from developer dashboard
Add to both backend and frontend .env files


# Backend

cd backend

npm install

npm start

# Frontend

cd ../frontend

npm install

npm run build


# Admin

cd ../admin

npm install

npm run build

# 🤝 Contributing Guidelines

Fork the repository

Create feature branch: git checkout -b feature/feature-name


Commit changes: git commit -m "Descriptive message"


Push to branch: git push origin feature/feature-name


Open pull request with detailed description

