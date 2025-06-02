import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { TableContentsProvider } from "./routes/context/TableContentsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <TableContentsProvider>
        <App />
      </TableContentsProvider>
    </BrowserRouter>
  </StrictMode>
);
