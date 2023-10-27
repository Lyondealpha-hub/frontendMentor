import { Drawer } from 'devextreme-react/drawer'
import Toolbar, { Item } from 'devextreme-react/toolbar';
import React, { ReactNode, useMemo, useRef, useState } from 'react'
import DrawerContent, { DrawerIcons } from './widgets/drawerItems';
import "devextreme/dist/css/dx.light.css";
import { ScrollView } from 'devextreme-react';
import { Tooltip } from 'antd';

interface props {
    drawerComponents : ReactNode | any | JSX.Element;
}

const NavigationDrawer = ({ drawerComponents }: props) => {
    //main
    const [isOpened, setState] = useState<boolean>(false);
    //expand expand mode
    const [isExpanded, setIsExpanded] = useState(false);

    const drawerRef = useRef<any>();

    // delay promise
    function timeout(delay: number) {
        return new Promise(res => setTimeout(res, delay));
    }

    // active node in tree view
    let [active_node, set_active_node] = useState<any>('');

    const buttonOptions = useMemo<any>(() => {
        return {
            icon: "menu",
            onClick: () => {
                setState(!isOpened);
                set_active_node('')
                // drawerRef.current?.collapse();

            }
        };
    }, [isOpened]);

    const openDrawer = async (active_node: any) => {
        set_active_node(active_node);
        setState(true);
        await timeout(100);

        drawerRef.current?.collapse();
    }

    return (
        <div style={{ height: 'calc(94vh)' }} className="drawerContents w-full h-full bg-white  duration-100">
            {
                <Drawer
                    minSize={75}
                    maxSize={280}
                    className=" mt-3"
                    opened={isOpened}
                    revealMode={'expand'}
                    animationEnabled={true}
                    render={() =>
                        <div style={{ height: 'calc(100vh - 45px)', }} className='w-full shadow-2xl border-r-4 pt-2 px-0.5'>
                            <Toolbar id="toolbar" className='bg-slate-500  sticky flex items-center justify-center caret-gray-800 mb-2  '>
                                
                                    <Item
                                        
                                        widget="dxButton"
                                        options={buttonOptions}
                                        location={isOpened ? 'before' : 'after'}

                                    />
                                

                                {isOpened && (
                                    <Item>
                                        <p className=" text-sm font-semibold w-full ">Main Navigator</p>
                                    </Item>
                                )}



                            </Toolbar>

                            <ScrollView
                                showScrollbar={"always"}
                            >
                                <div>
                                    {isOpened && <DrawerContent ref={drawerRef} />}
                                    {!isOpened && <DrawerIcons drawerToggler={openDrawer} />}
                                </div>
                            </ScrollView>
                        </div>
                    }
                >
                    {/* page content */}
                    <div className="w-full h-full duration-100">
                        {drawerComponents}
                    </div>

                </Drawer>
            }
        </div>
    )
}

export default NavigationDrawer