
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import { ErrorBoundary } from "./components/ui/ErrorBoundary";
  import "./styles/globals.css";
  import "./index.css";

  createRoot(document.getElementById("root")!).render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
  