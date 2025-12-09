import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./routes/routes.tsx";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-kit">
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
