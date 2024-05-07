import { createBrowserRouter } from "react-router-dom";

import Layout from "./pages/Layout";
import React from "react";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Archive from "./pages/archive";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "archive", element: <Archive /> },
    ],
  },
]);

export default router;
