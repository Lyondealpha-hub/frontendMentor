import React, { ReactNode, useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationDrawer from './navigation_drawer/drawer';
import { pages } from './data/pages';
import Dashboard from '../components/Dashboard/Dashboard';



const MyRoutes = () => {

  const childRef = useRef<any>(null);
  const sideRef = useRef<any>(null);


  const element = (child_element: ReactNode) => {
    window.onresize = (event) => {
      childRef.current?.test()
      sideRef.current?.resizeSide()
    };
    return (
      <>
        {/* drawer with page content */}
        <NavigationDrawer drawerComponents={child_element} />
      </>
    )
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          {pages.map(({ path, component : Component, selected }) => {
            return (
              <>
                <Route key={path} element={element(Component)} path={path} />
              </>
            )
          })}
          {/* <Route path={'*'}  element={<></>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default MyRoutes