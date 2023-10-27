
// contains routes : objs

import { ReactNode } from "react";

export interface LocationStates {
    "/Dashboard": {},

}

export type PathName = keyof LocationStates;

export interface Page {
    path: PathName;
    exact?: boolean;
    component: ReactNode | any |JSX.Element ,
    userPage?: any,
    selected?: String,
}