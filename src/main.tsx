import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
} from "react-router-dom";

import { Toaster } from "./components/ui/toaster.tsx";
import { AuthProvider } from "./lib/context/AuthProvider.tsx";

import { router } from "./routing/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster />
  </React.StrictMode>
);
