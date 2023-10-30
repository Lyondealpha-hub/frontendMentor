// contains routes : objs

import { ReactNode } from "react";

export interface LocationStates {
  "/dashboard"?: {};
  "/teams"?: {};
  "/developers"?: {};
  "/management/attendance"?: {};
}

// Navigation Drawer Interface
export interface componentInterface {
  drawer_component?: React.ReactNode;
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: any;
  userPage?: any;
  selected?: String;
}
