import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./i18n.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </DarkModeProvider>
  </React.StrictMode>,
);
