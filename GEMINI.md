# GEMINI.md

## Project Overview

This project is a web application for generating payslips (holerites). Users can input company and employee details, along with salary information, to generate a preview of a payslip. The application can then export the payslip as a PDF file.

The project is built using the following technologies:

*   **Frontend Framework:** React
*   **Language:** TypeScript
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS
*   **PDF Generation:** html2pdf.js

The application's main component is `App.tsx`, which manages the application state. It uses two primary components:

*   `src/components/PayslipForm.tsx`: A form for users to input all the necessary data for the payslip.
*   `src/components/PayslipPreview.tsx`: A component that displays a live preview of the payslip as the user enters data.

The data structures for the payslip are defined in `src/types/payslip.ts`.

## Building and Running

To work with this project, you will need to have Node.js and npm (or a compatible package manager) installed.

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    This will start the Vite development server, and you can view the application in your browser, usually at `http://localhost:5173`.

3.  **Build for Production:**
    ```bash
    npm run build
    ```
    This command bundles the application for production into the `dist` directory.

4.  **Preview the Production Build:**
    ```bash
    npm run preview
    ```
    This command starts a local server to preview the production build.

## Development Conventions

*   **Linting:** The project uses ESLint for code linting. You can run the linter with:
    ```bash
    npm run lint
    ```

*   **Type Checking:** The project uses TypeScript for static type checking. You can run the type checker with:
    ```bash
    npm run typecheck
    ```

*   **Component Structure:** Components are located in the `src/components` directory.
*   **Styling:** Styling is done using Tailwind CSS utility classes directly in the JSX of the components.
*   **Data Types:** TypeScript types and interfaces are defined in the `src/types` directory.
