import { createBrowserRouter, Navigate } from "react-router-dom"

import { AppLayout } from "../../components/layouts/AppLayout"

import { LandingPage } from "../../pages/LandingPage"
import { LoginPage } from "../../pages/LoginPage"
import { RegisterPage } from "../../pages/RegisterPage"
import { DashboardPage } from "../../pages/DashboardPage"
import { CalendarPage } from "../../pages/CalendarPage"
import { AppointmentsPage } from "../../pages/AppointmentsPage"
import { CustomersPage } from "../../pages/CustomersPage"
import { StaffPage } from "../../pages/StaffPage"
import { ServicesPage } from "../../pages/ServicesPage"
import { ReportsPage } from "../../pages/ReportsPage"
import { SettingsPage } from "../../pages/SettingsPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/app/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "calendar",
        element: <CalendarPage />,
      },
      {
        path: "appointments",
        element: <AppointmentsPage />,
      },
      {
        path: "customers",
        element: <CustomersPage />,
      },
      {
        path: "staff",
        element: <StaffPage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "reports",
        element: <ReportsPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
])