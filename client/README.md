# angular-dotnet-dating-app

This is the Angular 20 client for a full-stack web application built with .NET 9 on the backend and Angular on the frontend.  
It provides a modern, responsive UI using TailwindCSS and DaisyUI.

## Project Overview

The client is built using the Angular CLI and follows a modular structure with feature-based components, routing, and service layers.  
It integrates with a REST API for authentication, messaging, and other application data.

## Technologies

Frontend:

- Angular 20
- TypeScript 5.9
- TailwindCSS 4.1
- DaisyUI 5.3
- RxJS 7.8

Build & Tooling:

- Angular CLI 20
- Node.js (LTS)
- Visual Studio Code

Backend (expected companion API):

- ASP.NET Core 9
- Entity Framework Core
- SignalR

## Project Structure

```

client/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── services/
│   │   ├── models/
│   │   └── app.module.ts
│   ├── assets/
│   └── environments/
├── tailwind.config.js
├── angular.json
├── package.json
└── tsconfig.json

```

## Prerequisites

Before running the client:

1. Install Node.js (LTS version)
2. Install Angular CLI globally:
   ```bash
   npm install -g @angular/cli
   ```

````

3. Ensure the .NET 9 API is running locally or remotely

## Installation

1. Navigate to the client directory:

   ```bash
   cd client
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

## Development Server

Run the Angular development server:

```bash
npm start
```

By default, the app runs at:

```
http://localhost:4200
```

The server automatically reloads on file changes.

## Build

Build the project for production:

```bash
npm run build
```

The output will be stored in the `dist/client` directory.
Use the `--configuration production` flag for optimized builds.

## Watch Mode

Rebuild the project automatically when files change:

```bash
npm run watch
```

## Testing

Run unit tests via Karma:

```bash
npm test
```

## Styling

TailwindCSS v4 and DaisyUI v5 are integrated for styling.
Configuration can be found in:

* `tailwind.config.js`
* `src/styles.css`

## Deployment

The production build can be deployed to any static hosting service or served directly by the ASP.NET Core backend.

Typical deployment steps:

1. Build the Angular app:

   ```bash
   npm run build
   ```
2. Copy the contents of `/dist/client` into the server’s `wwwroot` folder
3. Update API URLs in the environment files if needed

## Environment Configuration

The app uses Angular environment files for configuration:

* `src/environments/environment.ts` (development)
* `src/environments/environment.prod.ts` (production)

Update the `apiUrl` or other settings according to your deployment.

## Common Commands

| Command         | Description          |
| --------------- | -------------------- |
| `npm start`     | Run the dev server   |
| `npm run build` | Build for production |
| `npm run watch` | Build in watch mode  |
| `npm test`      | Run unit tests       |

## License

This project is private and intended for internal or commercial use.
All rights reserved.
````
