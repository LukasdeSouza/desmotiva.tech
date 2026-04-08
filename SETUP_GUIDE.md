# 🚀 Gamification Setup Guide

This guide will walk you through setting up Clerk authentication and Supabase database for the gamification system.

---

## 📋 Prerequisites

- Node.js 18+ installed
- pnpm installed
- GitHub account
- Vercel account (optional, for deployment)

---

## 🔐 Step 1: Set Up Clerk (Authentication)

### 1.1 Create Clerk Account

1. Go to [https://clerk.com](https://clerk.com)
2. Sign up for a free account
3. Create a new application

### 1.2 Configure GitHub OAuth

1. In your Clerk dashboard, go to **User & Authentication** → **Social Connections**
2. Enable **GitHub**
3. Click on **GitHub** to configure:
   - You'll need to create a GitHub OAuth App
   - Go to GitHub Settings → Developer settings → OAuth Apps → New OAuth App
   - Fill in:
     - **Application name**: Desmotiva Dev
     - **Homepage URL**: `http://localhost:3000` (for development)
     - **Authorization callback URL**: Copy from Clerk dashboard
   - Click **Register application**
   - Copy **Client ID** and **Client Secret**
   - Paste them into Clerk's GitHub configuration
4. **Disable** all other social providers (Google, Facebook, etc.) - we only want GitHub
5. Save changes

### 1.3 Get Clerk API Keys

1. In Clerk dashboard, go to **API Keys**
2. Copy the following:
   - **Publishable Key** (starts with `pk_test_` or `pk_live_`)
   - **Secret Key** (starts with `sk_test_` or `sk_live_`)

### 1.4 Configure Webhook (for user sync)

1. In Clerk dashboard, go to **Webhooks**
2. Click **Add Endpoint**
3. For development, use ngrok or similar:
   ```bash
   # Install ngrok
   npm install -g ngrok
   
   # Start ngrok (in a separate terminal)
   ngrok http 3000
   ```
4. Copy the ngrok URL (e.g., `https://abc123.ngrok.io`)
5. In Clerk webhook configuration:
   - **Endpoint URL**: `https://abc123.ngrok.io/api/webhooks/clerk`
   - **Subscribe to events**:
     - ✅ user.created
     - ✅ user.updated
     - ✅ user.deleted
6. Click **Create**
7. Copy the **Signing Secret** (starts with `whsec_`)

---

## 🗄️ Step 2: Set Up Supabase (Database)

### 2.1 Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up for a free account
3. Click **New Project**
4. Fill in:
   - **Name**: desmotiva-dev
   - **Database Password**: Create a strong password (save it!)
   - **Region**: Choose closest to your users
   - **Pricing Plan**: Free
5. Click **Create new project**
6. Wait for the project to be created (~2 minutes)

### 2.2 Get Database Connection Strings

1. In your Supabase project, go to **Settings** → **Database**
2. Scroll down to **Connection string**
3. Copy both connection strings:

   **For Prisma (Connection Pooling)**:
   - Select **URI** tab
   - Mode: **Transaction**
   - Copy the connection string
   - Replace `[YOUR-PASSWORD]` with your database password
   - This is your `DATABASE_URL`

   **For Direct Connection**:
   - Select **URI** tab  
   - Mode: **Session**
   - Copy the connection string
   - Replace `[YOUR-PASSWORD]` with your database password
   - This is your `DIRECT_URL`

### 2.3 Get Supabase API Keys

1. Go to **Settings** → **API**
2. Copy:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon public** key

---

## ⚙️ Step 3: Configure Environment Variables

### 3.1 Create `.env.local` file

Create a `.env.local` file in the root of your project:

```bash
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
CLERK_SECRET_KEY=sk_test_xxxxx
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
CLERK_WEBHOOK_SECRET=whsec_xxxxx

# Supabase Database
DATABASE_URL=postgresql://postgres.xxxxx:[YOUR-PASSWORD]@aws-0-us-east-1.pooler.supabase.com:5432/postgres?pgbouncer=true
DIRECT_URL=postgresql://postgres.xxxxx:[YOUR-PASSWORD]@aws-0-us-east-1.pooler.supabase.com:5432/postgres

# Supabase API (optional, for real-time features)
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxxxx

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3.2 Update `.gitignore`

Make sure `.env.local` is in your `.gitignore`:

```
# Environment variables
.env*.local
.env
```

---

## 🗃️ Step 4: Initialize Database

### 4.1 Generate Prisma Client

```bash
pnpm db:generate
```

This will generate the Prisma Client based on your schema.

### 4.2 Push Schema to Database

```bash
pnpm db:push
```

This will create all the tables in your Supabase database.

### 4.3 Seed Initial Data (Badges)

```bash
pnpm db:seed
```

This will populate the database with all the badge definitions.

### 4.4 Verify Database (Optional)

Open Prisma Studio to view your database:

```bash
pnpm db:studio
```

This will open a browser window where you can see all your tables and data.

---

## 🧪 Step 5: Test the Setup

### 5.1 Start Development Server

```bash
pnpm dev
```

### 5.2 Test Authentication

1. Open `http://localhost:3000`
2. You should see a "Sign In" button (we'll add this in the next phase)
3. Click it and sign in with GitHub
4. After signing in, check Prisma Studio - you should see a new user in the `users` table

### 5.3 Test Webhook (if using ngrok)

1. Make sure ngrok is running
2. Sign in with a new GitHub account
3. Check Prisma Studio - the user should be automatically created
4. Check Clerk dashboard → Webhooks → your endpoint → Recent deliveries

---

## 🚨 Troubleshooting

### Prisma Client Not Found

If you get errors about `@prisma/client`:

```bash
pnpm db:generate
```

### Database Connection Issues

1. Check your connection strings in `.env.local`
2. Make sure you replaced `[YOUR-PASSWORD]` with your actual password
3. Verify your Supabase project is running (not paused)

### Webhook Not Working

1. Make sure ngrok is running
2. Check the webhook URL in Clerk dashboard
3. Verify the signing secret is correct
4. Check the webhook logs in Clerk dashboard

### Seed Script Fails

```bash
# Make sure tsx is installed
pnpm add -D tsx

# Try running the seed script directly
pnpm db:seed
```

---

## 📝 Next Steps

After completing this setup:

1. ✅ Clerk is configured with GitHub OAuth
2. ✅ Supabase database is created and seeded
3. ✅ Environment variables are set
4. ✅ Prisma is connected to the database

**You're now ready to implement the gamification features!**

Next phases:
- Phase 2: Implement point tracking system
- Phase 3: Build badge unlock logic
- Phase 4: Create leaderboards
- Phase 5: Build user profiles

---

## 🔗 Useful Links

- [Clerk Documentation](https://clerk.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)

---

## 💡 Tips

1. **Development**: Use ngrok for webhook testing
2. **Production**: Update webhook URL to your production domain
3. **Security**: Never commit `.env.local` to git
4. **Backup**: Export your database regularly
5. **Monitoring**: Check Clerk and Supabase dashboards regularly

---

**Need help?** Check the troubleshooting section or create an issue in the repository.
