# Project Pages

This document provides a summary of all the pages in the project.

## Public Pages

- **`app/(public)/page.tsx`**: The main landing page of the website. It is composed of several sections including a hero section, feature section, how it works, featured accounts, and testimonials.
- **`app/(public)/accounts/page.tsx`**: The page where users can browse and filter available betting accounts. It includes a sidebar with filtering options and a main content area with a scrollable grid of products.
- **`app/(public)/accounts/[id]/page.tsx`**: Individual account detail page showing specific account information, pricing, and purchase options.
- **`app/(public)/cart/page.tsx`**: The shopping cart page where users can review their selected accounts before proceeding to checkout.
- **`app/(public)/checkout/page.tsx`**: The secure checkout page where users can enter their payment information to purchase the accounts in their cart.
- **`app/(public)/confirmation/page.tsx`**: The order confirmation page displayed after a successful purchase. It shows order details and next steps for the user.
- **`app/(public)/contact/page.tsx`**: Contact page with contact information for users to reach out.
- **`app/auth/page.tsx`**: The authentication page for users to either log in to their existing account or register for a new one.

## User Dashboard

- **`app/dashboard/page.tsx`**: The main dashboard for logged-in users. It displays account statistics, recent orders, and quick actions with modals and links.
- **`app/dashboard/profile/page.tsx`**: User profile management page with form fields for personal information.
- **`app/dashboard/support/page.tsx`**: Support ticket listing page with a "New Ticket" modal and links to individual tickets.
- **`app/dashboard/support/[id]/page.tsx`**: Individual support ticket detail page showing conversation history and reply functionality.
- **`app/dashboard/settings/page.tsx`**: User settings page with interactive toggle switches for security and notification preferences.
- **`app/dashboard/help/page.tsx`**: Help center page with FAQs and quick links for user assistance.
- **`app/dashboard/orders/[id]/page.tsx`**: Individual order detail page showing order information, credentials, and downloadable documents.
- **`app/dashboard/notifications/page.tsx`**: Notifications page displaying system notifications and updates.

## Admin Pages

- **`app/admin/page.tsx`**: The main dashboard for admin users. It shows high-level stats, charts, and recent activity.
- **`app/admin/dashboard/page.tsx`**: A more detailed admin dashboard page with comprehensive charts and tables.
- **`app/admin/accounts/page.tsx`**: Admin page for managing the inventory of available accounts. It includes a table with filtering and pagination.
- **`app/admin/accounts/new/page.tsx`**: Form for admins to add a new account to the inventory, including document uploads and comprehensive betting site selection.
- **`app/admin/orders/page.tsx`**: Admin page for managing user orders, with a table, search, and filtering capabilities.
- **`app/admin/reports/page.tsx`**: Analytics and reports page showing revenue, orders, users, top products, and performance metrics with time range filtering.
- **`app/admin/settings/page.tsx`**: Admin page for managing platform-wide settings, such as payment wallet addresses and API keys.
- **`app/admin/support/page.tsx`**: Admin page for managing support tickets. It includes a list of tickets, a detail view, and a management panel.
- **`app/admin/users/page.tsx`**: Admin page for managing user profiles. It includes a table with filtering and pagination.

## Layout Structure

### Public Layout
- Uses route group `(public)` with shared Header and Footer components
- Responsive design with mobile-friendly navigation

### Dashboard Layout
- Fixed sidebar (without Orders link) with responsive mobile drawer
- Fixed header with notifications link
- Scrollable main content area
- Hamburger menu toggle for mobile screens

### Admin Layout
- Fixed sidebar (with all admin navigation including Orders and Reports)
- Fixed header with notifications
- Scrollable main content area
- Responsive mobile drawer with hamburger menu toggle
