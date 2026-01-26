# Orchestra Tracker - Frontend

A modern React TypeScript application for managing orchestra musicians, rehearsals, and statistics.

## Tech Stack

- **React 18+** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Zustand** - State management
- **Axios** - HTTP client

## Features

### Authentication
- User registration with validation
- Login with JWT token storage
- Automatic token refresh and logout on expiry
- Protected routes

### Musicians Management
- View all musicians in a sortable table
- Search musicians by name
- Filter by instrument
- Add new musicians
- Edit existing musicians
- Delete musicians
- Status badges (Active/Inactive)

### Navigation
- Sidebar navigation with icons
- Dashboard (placeholder)
- Musicians (fully implemented)
- Rehearsals (placeholder)
- Statistics (placeholder)

## Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components (ProtectedRoute)
│   ├── layout/          # Layout components (Sidebar, Layout)
│   └── musicians/       # Musician-specific components (MusicianModal)
├── pages/
│   ├── auth/           # Login and Register pages
│   ├── dashboard/      # Dashboard page
│   ├── musicians/      # Musicians page
│   ├── rehearsals/     # Rehearsals page
│   └── statistics/     # Statistics page
├── services/           # API service layer
│   ├── api.ts         # Axios instance with interceptors
│   ├── authService.ts # Auth API calls
│   └── musiciansService.ts # Musicians API calls
├── store/             # Zustand stores
│   └── authStore.ts   # Authentication state
├── types/             # TypeScript type definitions
│   └── index.ts
├── App.tsx            # Main app with routing
└── main.tsx           # Entry point
```

## API Integration

The frontend expects a backend API at `http://localhost:8000/api` with the following endpoints:

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login and receive JWT token

### Musicians
- `GET /api/musicians` - Get all musicians (supports ?search=name&instrument=Violin)
- `GET /api/musicians/:id` - Get single musician
- `POST /api/musicians` - Create musician
- `PUT /api/musicians/:id` - Update musician
- `DELETE /api/musicians/:id` - Delete musician

## Getting Started

### Prerequisites
- Node.js 20.19+ or 22.12+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Environment Variables

The backend API URL is currently hardcoded in `/src/services/api.ts`. To make it configurable:

1. Create a `.env` file:
```
VITE_API_URL=http://localhost:8000/api
```

2. Update `src/services/api.ts`:
```typescript
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';
```

## Available Instruments

The application supports the following instruments:
- Violin
- Viola
- Cello
- Contrabass
- Flute
- Oboe
- Clarinet
- Bassoon
- French Horn
- Trumpet
- Trombone
- Tuba
- Timpani
- Percussion
- Piano
- Harp

## Design System

### Colors
- **Primary Blue**: `bg-blue-600` for sidebar and buttons
- **Success Green**: `bg-green-100` for Active status badges
- **Background**: `bg-gray-100` for main content area
- **White**: `bg-white` for cards and tables

### Components
- **Cards**: White background with rounded corners and subtle shadow
- **Tables**: Full-width with hover effects
- **Buttons**: Primary blue with hover state
- **Form inputs**: Border with focus ring
- **Modal**: Centered overlay with backdrop

## State Management

### Auth Store (Zustand)
The authentication state is managed globally and persisted to localStorage:
- `token` - JWT token
- `user` - User object with id, username, email
- `isAuthenticated` - Boolean flag
- `login()` - Store token and user
- `logout()` - Clear token and user
- `initializeAuth()` - Restore from localStorage on app load

## Future Enhancements

- Implement Dashboard page with statistics
- Add Rehearsals scheduling feature
- Add Statistics page with charts
- Add musician profile photos
- Add musician availability tracking
- Add export functionality (CSV, PDF)
- Add email notifications
- Add performance optimization with React Query
- Add unit and integration tests
- Add accessibility improvements
- Add internationalization (i18n)

## Contributing

1. Follow the existing code structure
2. Use TypeScript for type safety
3. Follow React best practices (hooks, functional components)
4. Use Tailwind CSS for styling
5. Keep components small and focused
6. Write meaningful commit messages

## License

This project is part of the Bacasis Assistance system.
