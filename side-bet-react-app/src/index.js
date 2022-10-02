import { EuiProvider } from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import "./index.css";
import ErrorPage from './pages/Error';
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <LoginPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EuiProvider colorMode="light">
      <RouterProvider router={router} />
    </EuiProvider>
  </React.StrictMode>
);