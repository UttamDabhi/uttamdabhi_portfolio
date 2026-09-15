# Portfolio Website - Architecture Guide

## Overview

This is a full-stack portfolio website built with React/TypeScript frontend and Express.js backend. The application uses a modern tech stack with shadcn/ui components for the UI, Drizzle ORM for database operations, and TanStack Query for state management. The frontend is a single-page application showcasing a developer's portfolio with sections for about, skills, projects, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with custom configuration for development and production
- **Styling**: TailwindCSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Server Structure**: Modular route registration system
- **Storage**: Interface-based storage layer with in-memory implementation (ready for database integration)
- **Development**: Vite integration for hot module replacement in development

### Database Architecture
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Centralized schema definition in `shared/schema.ts`
- **Migration**: Drizzle Kit for database migrations
- **Connection**: Configured for Neon Database (serverless PostgreSQL)

## Key Components

### Frontend Components
- **Portfolio Layout**: Single-page application with smooth scrolling navigation
- **Theme System**: Dark/light mode toggle with persistent storage
- **Section Components**: Modular sections (Home, About, Skills, Projects, Contact)
- **UI Library**: Complete shadcn/ui component system for consistent design
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Backend Components
- **Route System**: Centralized route registration with `/api` prefix
- **Storage Interface**: Abstract storage layer supporting CRUD operations
- **Memory Storage**: In-memory implementation for development
- **Error Handling**: Global error middleware with proper status codes
- **Request Logging**: Comprehensive request/response logging

### Shared Components
- **Schema Definition**: Centralized database schema with Zod validation
- **Type Safety**: Shared types between frontend and backend
- **Validation**: Drizzle-zod integration for runtime validation

## Data Flow

### Frontend Data Flow
1. User interacts with portfolio sections
2. TanStack Query manages API requests and caching
3. Components render based on query states
4. Theme changes persist to localStorage
5. Smooth scrolling navigation between sections

### Backend Data Flow
1. Express server receives API requests
2. Routes delegate to storage interface
3. Storage layer performs CRUD operations
4. Responses sent back with proper error handling
5. Request logging for debugging

### Database Flow
1. Drizzle ORM handles database operations
2. Schema changes managed through migrations
3. Type-safe queries with compile-time validation
4. Connection pooling through Neon Database

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with TypeScript support
- **Styling**: TailwindCSS with PostCSS processing
- **Icons**: Lucide React icons and React Icons
- **Components**: Radix UI primitives via shadcn/ui
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for lightweight routing

### Backend Dependencies
- **Server**: Express.js with TypeScript
- **Database**: Drizzle ORM with PostgreSQL support
- **Session**: Connect-pg-simple for PostgreSQL sessions
- **Utilities**: Date-fns for date manipulation
- **Development**: TSX for TypeScript execution

### Build Dependencies
- **Build**: Vite for frontend, ESBuild for backend
- **TypeScript**: Strict type checking enabled
- **Linting**: ESLint configuration for code quality
- **Development**: Replit-specific plugins for development environment

## Deployment Strategy

### Development Mode
- **Frontend**: Vite dev server with HMR
- **Backend**: TSX with auto-restart on changes
- **Database**: Local PostgreSQL or Neon Database
- **Environment**: Replit-optimized development setup

### Production Build
- **Frontend**: Vite build to `dist/public`
- **Backend**: ESBuild bundle to `dist/index.js`
- **Static Files**: Served by Express in production
- **Database**: Neon Database for serverless PostgreSQL

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Build Scripts**: Separate dev/build/start commands
- **Type Checking**: Standalone TypeScript checking
- **Database Migrations**: Drizzle Kit push command for schema updates

The architecture is designed to be scalable and maintainable, with clear separation between frontend and backend concerns. The storage interface allows for easy migration from in-memory to persistent database storage, while the component-based frontend structure enables easy customization and extension of the portfolio content.

## Recent Database Integration (2025-07-09)

### Database Schema
- **Users Table**: Complete user profiles with social links and bio information
- **Projects Table**: Portfolio projects with metadata, tags, and statistics
- **Skills Table**: Technical skills with proficiency levels and categorization
- **Contact Messages Table**: Contact form submissions with status tracking
- **Experiences Table**: Professional experience entries with achievements

### API Endpoints
- **Projects**: GET/POST/PUT/DELETE `/api/projects` with featured project filtering
- **Skills**: GET/POST/PUT/DELETE `/api/skills` with category filtering
- **Contact**: POST `/api/contact` for form submissions
- **Experiences**: GET/POST/PUT/DELETE `/api/experiences`
- **Profile**: GET/PUT `/api/profile` for user profile management

### Database Features
- **Neon PostgreSQL**: Serverless PostgreSQL with automatic scaling
- **Drizzle ORM**: Type-safe database operations with schema validation
- **Real-time Updates**: Contact form now saves to database with toast notifications
- **Data Persistence**: All portfolio data stored in database for dynamic updates
- **Sample Data**: Pre-populated with skills and projects for demonstration