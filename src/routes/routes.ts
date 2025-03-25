import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import React from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";

const router = createBrowserRouter([
  {
    path: "/",
    element: React.createElement(MainLayout),
    children: [
      {
        path: "/",
        element: React.createElement(AdminDashboard),
      },
      {
        path: "/create-student",
        element: React.createElement(CreateStudent),
      },
    ],
  },
]);

export default router;
