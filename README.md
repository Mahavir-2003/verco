# Verco AI - AI Powered Sales Assistant Chatbot

A modern SaaS platform that allows businesses to embed AI-powered sales assistant chatbots into their websites.

## Features

- AI-powered chatbot using Gemini AI
- Real-time chat functionality with Pusher
- Custom domain integration
- Email marketing campaigns
- Appointment scheduling
- Product management
- User authentication with Clerk
- Stripe payment integration
- Dark/Light theme support
- Responsive design

## Tech Stack

- **Frontend:** Next.js 14, React, TypeScript, Tailwind CSS
- **Backend:** Next.js API routes, Prisma
- **Database:** PostgreSQL
- **AI:** Google Gemini AI
- **Authentication:** Clerk
- **Real-time:** Pusher
- **Payments:** Stripe
- **Styling:** Tailwind CSS, Shadcn UI
- **Forms:** React Hook Form
- **Email:** Nodemailer

## Prerequisites

- Node.js 18+ 
- npm/yarn
- PostgreSQL database
- Clerk account
- Stripe account
- Pusher account
- Google AI Platform account

## Environment Variables

Create a `.env` file with:

**Email Configuration**
- `NODE_MAILER_EMAIL`
- `NODE_MAILER_GMAIL_APP_PASSWORD`

**Application Settings**
- `NEXT_PUBLIC_APP_URL`

**Pusher Configuration**
- `NEXT_PUBLIC_PUSHER_APP_CLUSTOR`
- `NEXT_PUBLIC_PUSHER_APP_SECRET`
- `NEXT_PUBLIC_PUSHER_APP_KEY`
- `NEXT_PUBLIC_PUSHER_APP_ID`

**AI API Keys**
- `OPEN_AI_KEY`
- `CHAT_COMPLETION_PAWAN_API_KEY`
- `GEMINI_API_KEY`

**Upload Care Configuration**
- `NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY`
- `UPLOAD_CARE_SECRET_KEY`

**Clerk Authentication**
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL`
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL`

**Stripe Payment**
- `STRIPE_SECRET`
- `NEXT_PUBLIC_STRIPE_PUBLISH_KEY`
