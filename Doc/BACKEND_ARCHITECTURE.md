# Backend Architecture Proposal

This document outlines a proposed backend architecture for handling registration, content management, and scheduling for Dhyuthi 7.0. While the current frontend is entirely static, this provides a blueprint for full-stack implementation.

## 1. Technology Stack
- **Runtime Environment:** Node.js
- **Framework:** Express.js or NestJS (for structured enterprise-grade routing)
- **Database:** PostgreSQL (Relational consistency is ideal for strict registration constraints and ticketing)
- **ORM:** Prisma or TypeORM

## 2. Database Schema Sketch

### `User` (Participants & Admins)
- `id` (UUID, Primary Key)
- `name` (String)
- `email` (String, Unique)
- `phone` (String)
- `college` (String)
- `role` (Enum: `PARTICIPANT`, `ADMIN`)
- `createdAt` (Timestamp)

### `Event` (Tracks & Workshops)
- `id` (UUID, Primary Key)
- `title` (String)
- `category` (Enum: `HACKATHON`, `WORKSHOP`, `COMPETITION`)
- `description` (Text)
- `capacity` (Integer)
- `price` (Decimal)

### `Registration` (Join Table)
- `id` (UUID, Primary Key)
- `userId` (Foreign Key -> User.id)
- `eventId` (Foreign Key -> Event.id)
- `status` (Enum: `PENDING`, `CONFIRMED`, `CANCELLED`)
- `paymentId` (String, Optional)
- `registeredAt` (Timestamp)

## 3. API Endpoints (REST)

### Public Endpoints (Unauthenticated)
- `GET /api/v1/events` — List all tracks, workshops, and pre-events.
- `GET /api/v1/schedule` — Retrieve the day-by-day event schedule.
- `POST /api/v1/auth/register` — Create a new participant account.
- `POST /api/v1/auth/login` — Authenticate and return a JWT.

### Participant Endpoints (Requires valid JWT)
- `GET /api/v1/user/profile` — Get current user details and registered events.
- `POST /api/v1/registrations` — Register for a specific event (creates a `Registration` record).
- `POST /api/v1/payments/verify` — Webhook endpoint to verify Razorpay/Stripe payments.

### Admin Endpoints (Requires Admin Role JWT)
- `GET /api/v1/admin/dashboard` — View aggregate metrics (total registrations, revenue).
- `GET /api/v1/admin/registrations` — List/export all participants.
- `PATCH /api/v1/admin/events/:id` — Update event details (capacity, timing).

## 4. Authentication Approach
- **Protocol:** JSON Web Tokens (JWT).
- **Flow:** User logs in with email/password (or Google OAuth) -> Server issues a signed JWT -> Client stores JWT in HTTP-only secure cookies (preferred) or Memory/LocalStorage.
- **Admin Dashboard:** Admin routes are protected by a middleware that verifies the JWT and checks if `role === 'ADMIN'`.

## 5. Image & File Storage
- **Approach:** Cloud Object Storage (e.g., AWS S3, Cloudinary, or Supabase Storage).
- **Workflow:** 
  1. The client requests a presigned URL from the backend.
  2. The client uploads the image (e.g., posters or gallery uploads) directly to S3.
  3. The public S3 URL is saved in the PostgreSQL database.
- *Reasoning:* Prevents heavy image payloads from bottlenecking the Node.js server.

## 6. Deployment & Security Notes

### Security
- **Rate Limiting:** Implement `express-rate-limit` heavily on `/auth/login`, `/auth/register`, and `/registrations` to prevent DDoS or spam registrations.
- **CORS:** Restrict Cross-Origin Resource Sharing exclusively to the frontend production domain (`https://username.github.io`).
- **Validation:** Use `Zod` or `Joi` to strictly validate payload schemas on all `POST` and `PATCH` routes.

### Deployment
- **API Hosting:** Render, Railway, or AWS Elastic Beanstalk.
- **Database Hosting:** Supabase, Neon, or AWS RDS for managed PostgreSQL.
- **Environment Variables:** Keep database connection strings, JWT secrets, and Payment Gateway API keys strictly out of version control via `.env` injection at deployment time.
