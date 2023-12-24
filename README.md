# Project Title

This project is a demonstration of building a web application using Fastify (with TypeScript) for the backend, Vue.js for the frontend, and MySQL for the database. It includes the setup of CRUD APIs for managing categories and products, displaying categories as a tree, handling recursive counts of products in categories, image resizing on upload, and more.

## Setup Instructions

### Backend Setup

1. **Install Dependencies:**
   - Ensure you have Node.js and npm installed.
   - Install `npm install` in the `backend` directory to install backend dependencies.
   - Run `npm start`

2. **Database Configuration:**
   - Set up a MySQL database.
   - Configure the database connection in the `.env` file in the backend directory.

3. **Run Backend Server:**
   - Execute `npm run dev` to start the Fastify server for the backend.


### Database Migration

- Use Prisma as the database ORM to manage migrations.
- Run `npx prisma migrate save --name init --experimental` to create the initial migration.
- Run `npx prisma migrate up --experimental` to apply the migration to the database.
- Run `npx prisma db push`
## Project Structure

### Backend

- The `backend` directory contains the Fastify TypeScript server.
- Endpoints for CRUD operations on categories and products are located in `/src/routes/categories.ts` and `/src/routes/products.ts` respectively.
- Middleware for image resizing, database interactions, and route handling is organized in `/src/middleware`.


## Features

### Categories Management

- Create, Read, Update, and Delete categories using the provided API endpoints.
- Display categories in a tree structure with recursive child counts.

### Products Management

- Perform CRUD operations on products using the dedicated API endpoints.
- Show top parent categories and allow selection of children categories while creating or updating a product.

### Image Handling

- Automatically resize uploaded images to 3200x3200 pixels for optimal storage.

### Additional Features

- Integration of MySQL database for efficient data storage and retrieval.
- Implement a delete button with confirmation messages to prevent accidental deletion.

## Technologies Used

- Backend: Fastify, TypeScript, Prisma, MySQL
- Frontend: Vue.js, Axios, HTML/CSS, Bootstrap (or any UI framework of choice)

Feel free to explore the codebase for detailed implementation and customization options.
