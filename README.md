# Food Orders App

A full-stack application for coordinating restaurant orders within an organization. Users can manage organizations and their members, browse restaurants and meals, prepare shared carts, and turn those carts into orders.

The project demonstrates a complete React and ASP.NET Core application with connected business workflows across its frontend, API and database layers.

## Features

- Account registration and JWT-based authentication
- Organization and user management
- Restaurant and meal management
- Shared carts with meal quantities and calculated prices
- Order creation, editing and tracking
- Paginated, sortable and filterable data views
- Swagger documentation for the REST API

## Technology stack

### Frontend

- React 18
- Vite
- React Router
- Axios
- CSS

### Backend

- ASP.NET Core 8 Web API
- Entity Framework Core
- SQL Server
- JWT authentication
- AutoMapper
- Swagger / OpenAPI

## Project structure

```text
FoodOrdersApp/   React frontend
FoodOrdersApi/   ASP.NET Core REST API
```

## Local development

The project currently runs locally and does not have a hosted production deployment.

### Requirements

- .NET 8 SDK
- Node.js and npm
- SQL Server or SQL Server LocalDB

### Backend

1. Update `FoodOrdersApi/appsettings.json` if your SQL Server connection differs from the included LocalDB configuration.
2. From `FoodOrdersApi`, restore the local tools and apply the database migrations:

   ```bash
   dotnet tool restore
   dotnet ef database update
   ```

3. Start the API:

   ```bash
   dotnet run
   ```

For local development, `appsettings.Development.json` contains an explicitly non-production JWT signing key. Configure `Authentication__JwtKey` with a secure secret before using the API outside a local development environment.

### Frontend

From `FoodOrdersApp`, install the dependencies and start the development server:

```bash
npm install
npm run dev
```

The frontend expects the API at `https://localhost:7157/api` and runs at `http://localhost:5173` by default.

## Project status

This is a local portfolio and learning project. It demonstrates the application's architecture and core workflows, but it is not presented as a production service.

## Author

Developed by [Michał Grochowski](https://github.com/grochochotowski).
