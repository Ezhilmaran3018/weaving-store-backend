# 🧵 SilkWeave Backend API

## 🚀 Setup Instructions

### 1. Install Dependencies
```bash
cd weaving-store-backend
npm install
```

### 2. Create .env File
Already created with default values. Update with your configs:
```env
MONGODB_URI=mongodb://localhost:27017/weaving-store
JWT_SECRET=your_secret_key_here
PORT=5000
```

### 3. Start MongoDB
```bash
mongod
```

### 4. Run Server
```bash
npm start
```

---

## 📚 API Endpoints

### Authentication
- `POST /api/auth/signup` - Create new account
- `POST /api/auth/login` - User login

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product details
- `POST /api/products` - Add new product (Admin)

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders/:id` - Get order details
- `GET /api/orders/user/:userId` - Get user orders

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update profile

---

## 📦 Project Structure

```
models/
  - User.js
  - Product.js
  - Order.js

routes/
  - auth.js
  - products.js
  - orders.js
  - users.js

server.js
.env
```

---

## 🔧 Next Steps

1. Set up MongoDB locally or use MongoDB Atlas
2. Update .env with your database URL
3. Run `npm start`
4. Test endpoints with Postman
5. Connect frontend by updating API URLs

---

**Happy Backend Development! 🚀**
