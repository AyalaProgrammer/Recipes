
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // ← ייבוא ה-Provider של Redux
import { BrowserRouter } from "react-router-dom"; // ← ייבוא BrowserRouter
import App from "./App.tsx";
import { store } from "./store"; // ← ייבוא ה-store של Redux
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}> {/* ← עטיפת האפליקציה ב-Provider */}
      <BrowserRouter> {/* ← עטיפת האפליקציה ב-BrowserRouter */}
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);