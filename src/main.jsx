import React from "react"; // Required for JSX
import { createRoot } from "react-dom/client"; // Use createRoot from react-dom/client
import "./index.css"; // Import your styles
import App from "./App"; // Import your main App component

// Locate the root element in your index.html
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error(
    "Root element not found! Ensure there's a <div id='root'></div> in index.html."
  );
}

// Create a root and render the app
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
