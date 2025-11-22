# International KYC Hub

A modern, full-stack web application for buying and selling pre-verified betting accounts. Built with Next.js 15, React, TypeScript, and Tailwind CSS.

## 🚀 Features

### Public Features
- **Browse Accounts**: Explore verified betting accounts from major bookmakers
- **Advanced Filtering**: Filter by bookmaker, price range, and availability status
- **Responsive Design**: Fully responsive with mobile-optimized layouts
- **Dark Mode**: Complete dark mode support throughout the application
- **Shopping Cart**: Add accounts to cart and proceed to secure checkout
- **Account Details**: View detailed information about each account

### User Dashboard
- **Profile Management**: Update personal information and preferences
- **Order Tracking**: View order history and download credentials
- **Support System**: Create and manage support tickets
- **Notifications**: Stay updated with system notifications
- **Settings**: Manage security and notification preferences
- **Help Center**: Access FAQs and quick help resources

### Admin Panel
- **Analytics Dashboard**: Track revenue, orders, and user metrics
- **User Management**: Manage user accounts and permissions
- **Account Inventory**: Add, edit, and manage betting accounts
- **Order Management**: Process and track customer orders
- **Support Management**: Handle customer support tickets
- **Reports**: Generate detailed business reports and analytics

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Headless UI patterns
- **Icons**: React Icons (Material Design)
- **Animations**: GSAP
- **Forms**: Tailwind Forms plugin
- **Image Optimization**: Next.js Image component

## 📁 Project Structure

```
app/
├── (public)/          # Public-facing pages
│   ├── layout.tsx     # Public layout with Header & Footer
│   ├── page.tsx       # Landing page
│   ├── accounts/      # Browse accounts
│   ├── cart/          # Shopping cart
│   ├── checkout/      # Checkout process
│   └── contact/       # Contact page
├── dashboard/         # User dashboard
│   ├── layout.tsx     # Dashboard layout
│   ├── page.tsx       # Dashboard home
│   ├── profile/       # User profile
│   ├── support/       # Support tickets
│   ├── settings/      # User settings
│   ├── orders/        # Order details
│   └── notifications/ # Notifications
├── admin/             # Admin panel
│   ├── layout.tsx     # Admin layout
│   ├── dashboard/     # Admin dashboard
│   ├── users/         # User management
│   ├── accounts/      # Account inventory
│   ├── orders/        # Order management
│   ├── support/       # Support management
│   └── reports/       # Analytics & reports
├── components/        # Reusable components
├── data/              # Mock data and constants
└── globals.css        # Global styles
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd internationalkychub
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design Features

- **Modern UI**: Clean, professional design with smooth animations
- **Responsive Layouts**: Mobile-first approach with breakpoints for all screen sizes
- **Custom Scrollbars**: Styled scrollbars for better UX
- **Interactive Elements**: Hover effects, transitions, and micro-interactions
- **Accessibility**: Semantic HTML and ARIA labels where needed

## 🔧 Configuration

### Next.js Config

The project is configured to:
- Accept images from all domains
- Skip TypeScript errors during builds
- Skip ESLint checks during builds

### Tailwind Config

Custom configuration includes:
- Extended color palette
- Custom font families
- Custom border radius values
- Dark mode support (class-based)

## 📄 Available Pages

See [PAGES.md](./PAGES.md) for a complete list of all pages and their descriptions.

## 🎯 Key Features Implementation

### Responsive Sidebars
Both admin and dashboard layouts feature:
- Desktop: Always visible sidebar
- Mobile: Collapsible drawer with hamburger menu
- Smooth slide-in animations
- Overlay backdrop

### Scrollable Product Grid
The accounts page features:
- Fixed header and sidebar
- Independently scrollable product grid
- Custom styled scrollbars
- Grid height matches sidebar height

### Interactive Components
- Toggle switches for settings
- Modal dialogs for creating tickets
- Dynamic routing for detail pages
- Real-time filtering and search

## 🔐 Security Notes

This is a demo application with mock data. In production:
- Implement proper authentication (NextAuth.js, Clerk, etc.)
- Add API routes for data fetching
- Implement proper authorization checks
- Use environment variables for sensitive data
- Add CSRF protection
- Implement rate limiting

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. Contact the repository owner for contribution guidelines.

## 📧 Support

For support, please use the contact page or reach out to the development team.

---

Built with ❤️ using Next.js and React
