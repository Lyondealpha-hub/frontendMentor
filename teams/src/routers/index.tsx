import React, { ReactNode, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationDrawer from './navigation_drawer/drawer';
import { pages } from './data/pages';
import Screens from './screens';



const MyRoutes = () => {

  const childRef = useRef<any>(null);
  const sideRef = useRef<any>(null);
  const [tabs, setTabs] = useState<any>([]);


  const element = (child_element: any ) => {
    window.onresize = (event) => {
      childRef.current?.test()
      sideRef.current?.resizeSide();
    };
    return (
      <>
        {/* drawer with page content */}
        <NavigationDrawer drawer_components={child_element} />
      </>
    )
  }
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          {pages.map(({ path, component:Components, selected }) => {
            return (
              <>
                <Route key={path}  element={element(<Screens selected={`${selected}`} tabs={tabs} setTabs={setTabs} UserPage={Components} />)} path={path}  />
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