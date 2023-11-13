import React from "react";
import { Page } from "./types";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { Attendance } from "../../components/Attendance/Attendance";
import { Login } from "../../components/Login/Login";
import { Developers } from "../../components/Devs/developer";

export const pages: Page[] = [
  {
    path: "/dashboard",
    exact: true,
    component: Dashboard,
    selected: "Dashboard",
  },
  { path: "/teams", exact: true, component: Dashboard, selected: "Teams" },
  {
    path: "/developers",
    exact: true,
    component: Developers,
    selected: "Developers",
  },
  {
    path: "/management/attendance",
    exact: true,
    component: Attendance,
    selected: "Attendance",
  },
  {
    path: "/developers",
    exact: true,
    component: Dashboard,
    selected: "Developers",
  },
];
