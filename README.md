# Codit

A modern, full-stack Reddit clone built with Next.js 13, featuring communities (subreddits), posts, comments, voting, and real-time interactions. Built with TypeScript, Prisma, and Tailwind CSS.

## Features

### 🚀 Core Functionality
- **Communities (Subreddits)**: Create and join communities around specific topics
- **Posts**: Create rich-text posts using a powerful Editor.js-based editor
- **Comments**: Nested comment system with reply functionality
- **Voting System**: Upvote/downvote posts and comments
- **User Profiles**: Customizable usernames and Google OAuth authentication
- **Feed System**: Personalized feed showing posts from subscribed communities
- **Search**: Real-time search functionality for discovering communities
- **Infinite Scroll**: Seamless content loading with pagination

### ✨ Advanced Features
- **Rich Text Editor**: Powered by Editor.js with support for:
  - Headers, paragraphs, and inline code
  - Code blocks with syntax highlighting
  - Images and embedded content
  - Lists and tables
  - Links and media embeds
- **Image Uploads**: Integrated with UploadThing for seamless media handling
- **Optimistic Updates**: Instant UI feedback with React Query
- **Authentication**: NextAuth.js with Google OAuth provider
- **Caching**: Redis-powered caching for improved performance
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Tech Stack

### Frontend
- **Framework**: Next.js 13.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom components
- **UI Components**: Radix UI primitives
- **State Management**: TanStack React Query
- **Forms**: React Hook Form with Zod validation
- **Editor**: Editor.js with multiple plugins

### Backend
- **API**: Next.js API Routes (Route Handlers)
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Caching**: Upstash Redis
- **File Storage**: UploadThing

### Development Tools
- **TypeScript**: Full type safety
- **ESLint**: Code linting
- **Prisma**: Database schema and migrations
- **Class Variance Authority**: Component variants

## Project Structure

```
codit/
├── prisma/
│   └── schema.prisma          # Database schema
├── public/                    # Static assets
├── src/
│   ├── app/                   # Next.js 13 app directory
│   │   ├── (auth)/           # Authentication routes
│   │   ├── @authModal/       # Parallel route for auth modals
│   │   ├── api/              # API route handlers
│   │   ├── r/                # Community routes
│   │   └── settings/         # User settings
│   ├── components/           # React components
│   │   ├── ui/              # Reusable UI components
│   │   ├── homepage/        # Home page components
│   │   ├── comments/        # Comment components
│   │   └── post-vote/       # Voting components
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   │   ├── auth.ts          # Authentication config
│   │   ├── db.ts            # Prisma client
│   │   ├── redis.ts         # Redis client
│   │   └── validators/      # Zod schemas
│   ├── styles/              # Global styles
│   └── types/               # TypeScript type definitions
└── ...config files
```

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Google OAuth credentials
- Upstash Redis instance
- UploadThing account

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/codit"

# NextAuth
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Redis (Upstash)
REDIS_URL="your-redis-url"
REDIS_SECRET="your-redis-secret"

# UploadThing
UPLOADTHING_SECRET="your-uploadthing-secret"
UPLOADTHING_APP_ID="your-uploadthing-app-id"
```

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd codit
```

2. Install dependencies:
```bash
npm install
```

3. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Schema

The application uses the following main models:

- **User**: User accounts with Google OAuth
- **Subreddit**: Communities/forums
- **Post**: User-created posts with rich content
- **Comment**: Nested comments on posts
- **Vote**: Upvotes/downvotes on posts
- **CommentVote**: Upvotes/downvotes on comments
- **Subscription**: User subscriptions to communities

## API Routes

### Authentication
- `POST /api/auth/[...nextauth]` - NextAuth.js authentication

### Communities
- `POST /api/subreddit` - Create a new subreddit
- `POST /api/subreddit/subscribe` - Subscribe to a subreddit
- `POST /api/subreddit/unsubscribe` - Unsubscribe from a subreddit

### Posts
- `GET /api/posts` - Fetch posts (with pagination)
- `POST /api/subreddit/post/create` - Create a new post
- `PATCH /api/subreddit/post/vote` - Vote on a post

### Comments
- `POST /api/subreddit/post/comment` - Create a comment
- `PATCH /api/subreddit/post/comment/vote` - Vote on a comment

### User
- `POST /api/username` - Update username

### Search
- `GET /api/search` - Search for communities

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run postinstall` - Generate Prisma client (runs automatically)

## Key Features Implementation

### Authentication
- Implemented using NextAuth.js with Google OAuth
- JWT session strategy for stateless authentication
- Custom username generation using nanoid
- Parallel route modal for authentication UI

### Content Creation
- Rich text editor with Editor.js
- Image upload integration with UploadThing
- Form validation with Zod and React Hook Form
- Optimistic UI updates for better UX

### Real-time Interactions
- Optimistic voting with automatic rollback on error
- Redis caching for frequently accessed data
- React Query for efficient data fetching and caching

### Community Features
- Subscribe/unsubscribe functionality
- Personalized feed based on subscriptions
- Community creation and management
- Search functionality for discovering communities

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built following modern Next.js 13 best practices
- UI components built with Radix UI and Tailwind CSS
- Inspired by Reddit's community-driven platform
