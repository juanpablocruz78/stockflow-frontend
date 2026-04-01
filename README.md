#  StockFlow Frontend – Modern Inventory Dashboard

[![Angular Version](https://img.shields.io/badge/Angular-20.2-dd0031?style=for-the-badge&logo=angular)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

StockFlow Frontend is a reactive, high-performance web application designed to manage stock, orders, and customers. Built with **Angular 20**, it leverages the latest framework features to provide a seamless user experience.

---

##  Cutting-Edge Features (Angular 20)

- **Signals-Based State Management:** Utilizing Angular Signals for fine-grained reactivity, ensuring optimal performance and minimal change detection cycles.
- **Standalone Architecture:** 100% Standalone components for a lighter, more modular, and modern codebase.
- **Control Flow Syntax:** Implementation of the new `@if`, `@for`, and `@switch` syntax for cleaner and more readable templates.
- **Reactive Forms:** Robust validation for product entry and order creation.
- **JWT Integration:** Secure communication with the StockFlow Spring Boot API using HTTP Interceptors.

##  Tech Stack

- **Framework:** Angular 20.2.1
- **Styling:** Tailwind CSS / Angular Material (ajusta según lo que uses)
- **State:** Signals & RxJS
- **HTTP Client:** Native Angular HttpClient with specialized Interceptors for Auth.
- **Build Tool:** Vite (default in Angular 20)

---

##  Getting Started

### Prerequisites
- Node.js (v20+ recommended)
- Angular CLI: `npm install -g @angular/cli`

### Installation
1. Clone the repo: `git clone https://github.com/juanpablocruz78/stockflow-frontend.git`
2. Install dependencies: `npm install`
3. Configure environment: Update `src/environments/environment.ts` with your Render Backend URL.

### Development Server
Run `ng serve` and navigate to `http://localhost:4200/`.

---

##  Building for Production

To create a highly optimized production build:

```bash
ng build

The artifacts will be stored in the dist/ directory, ready to be deployed to Vercel or Render.

Quality Assurance

ng test

---

Test Credentials:

Demo Access:

User: admin

Pass: 123456

Note: The backend may take 40s to wake up due to Render's free plan.

Contact & Links
Juan Pablo Cruz Fullstack Developer | Java & Angular Specialist [LinkedIn Profile] | [Live Demo Link]
