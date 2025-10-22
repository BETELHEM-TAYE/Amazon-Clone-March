# Amazon Clone - React E-commerce Application

A full-stack e-commerce application built with React, Firebase, and Stripe integration, mimicking Amazon's core functionalities.

## 🚀 Features

- **User Authentication**: Sign up and sign in with Firebase Authentication
- **Product Browsing**: Browse products by categories and view detailed product information
- **Shopping Cart**: Add/remove items from cart with quantity management
- **Secure Payments**: Integrated Stripe payment processing
- **Order History**: View past orders stored in Firestore
- **Responsive Design**: Mobile-friendly UI with modern design
- **Real-time Data**: Firebase Firestore for data persistence

## 🛠️ Tech Stack

### Frontend

- **React 19** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **Material-UI** - UI component library
- **Axios** - HTTP client for API calls
- **React Spinners** - Loading indicators

### Backend & Services

- **Firebase Authentication** - User authentication
- **Firestore** - NoSQL database for orders and user data
- **Stripe** - Payment processing
- **Fake Store API** - Product data source

### Development Tools

- **ESLint** - Code linting
- **Vite** - Development server and build tool
- **PropTypes** - Runtime type checking

## 📁 Project Structure

```
amazon-clone/
├── public/                 # Static assets
├── src/
│   ├── API/               # API configuration and endpoints
│   ├── assets/            # Images and static files
│   ├── Components/        # Reusable UI components
│   │   ├── Carousel/      # Product carousel
│   │   ├── Category/      # Category browsing
│   │   ├── DataProvider/  # React Context for state management
│   │   ├── Header/        # Navigation header
│   │   ├── Layout/        # Page layout wrapper
│   │   ├── Loader/        # Loading spinner
│   │   ├── Product/       # Product display components
│   │   └── ProtectRoute/  # Route protection
│   ├── page/              # Page components
│   │   ├── Auth/          # Authentication pages
│   │   ├── Cart/          # Shopping cart
│   │   ├── Landing/       # Home page
│   │   ├── Orders/        # Order history
│   │   ├── Payment/       # Payment processing
│   │   ├── ProductDetails/# Product detail view
│   │   └── Results/       # Search results
│   ├── utility/           # Utility functions and Firebase config
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # App entry point
│   └── Router.jsx         # Route configuration
├── functions/             # Firebase Cloud Functions
├── firebase.json          # Firebase configuration
├── firestore.rules        # Firestore security rules
└── package.json           # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Firebase account
- Stripe account

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd amazon-clone
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   - Create a `.env` file in the root directory
   - Add your Firebase and Stripe configuration:

   ```
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

4. **Firebase Setup**

   - Create a Firebase project
   - Enable Authentication and Firestore
   - Update `firebase.json` and `firestore.rules` as needed

5. **Stripe Setup**
   - Create a Stripe account
   - Get your publishable key for the frontend
   - Set up your secret key in the backend (amazon-api)

### Running the Application

1. **Start the development server**

   ```bash
   npm run dev
   ```

2. **Build for production**

   ```bash
   npm run build
   ```

3. **Preview production build**

   ```bash
   npm run preview
   ```

4. **Run linting**
   ```bash
   npm run lint
   ```

## 🔧 Configuration

### Firebase Configuration

Update `src/utility/firebase.jsx` with your Firebase config:

```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // ... other config
};
```

### Stripe Configuration

Update the Stripe publishable key in your environment variables and ensure the backend API is running for payment processing.

## 📦 API Endpoints

The application uses the following APIs:

- **Fake Store API**: `https://fakestoreapi.com/` - Product data
- **Custom API**: Local Express server for Stripe payment processing

## 🔒 Security

- Firebase Authentication for user management
- Firestore security rules restrict data access to authenticated users
- Stripe handles secure payment processing
- Environment variables for sensitive configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is for educational purposes. Please ensure you comply with all relevant terms of service when deploying similar applications.

## 🙏 Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for product data
- [Firebase](https://firebase.google.com/) for backend services
- [Stripe](https://stripe.com/) for payment processing
- [Material-UI](https://mui.com/) for UI components
