import TreeView, { SearchEditorOptions } from 'devextreme-react/tree-view';
import 'devextreme/dist/css/dx.light.css';
import React, { useCallback, useImperativeHandle, useRef } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { drawerData, drawerIcons } from '../data/drawerData';


interface IconsProps{
    drawerToggler : (node : any) => any
}


const DrawerContent = React.forwardRef(({ active }: { active?: any }, ref,) => {

    const treeview = useRef<any>(null);

    //navigate
    const navigate = useNavigate();
    const searchExpr = ["count", "name"];

    return (
        <div className="w-full px-2 ">
            <TreeView
            ref={treeview}
            // style={{backgroundColor:'blue'}}
            dataSource={drawerData}
            dataStructure={"plain"}
            keyExpr="ID"
            displayExpr="name"
            parentIdExpr="categoryId"
            searchEnabled={true}
            activeStateEnabled={true}
            searchExpr={searchExpr}
            onItemClick={(e:any)=>{ }}
            >
                <SearchEditorOptions
                    placeholder="Type search value here..."
                />
            </TreeView>

        </div>
    );
})
 
export default DrawerContent;

export const DrawerIcons = ({drawerToggler}:IconsProps) => {


    return (
        <>
            <div className="flex  flex-col items-center justify-center pr-2 ml-1 mb-2 dark:bg-darkModeSkin-divs_backgroundColor dark:text-darkModeSkin-base">
                <section  className="icon hover:cursor-pointer px-1 mt-1 dark:bg-darkModeSkin-divs_backgroundColor dark:text-darkModeSkin-base">
                    {/* <img src={search} alt="icon" /> */}
                </section>
                
                <section className=" mt-1.5">
                    <TreeView
                        dataSource={drawerIcons}
                        dataStructure="plain"
                        // style={{backgroundColor:'red'}}
                        keyExpr="ID"
                        displayExpr="name"
                        parentIdExpr="categoryId"
                        // onItemClick={(e:any)=> handle_item_click(e.node.key)}
                        
                    >
                        <SearchEditorOptions
                            placeholder="Type search value here..."                    
                        />
                    </TreeView>
                </section>
            </div>
        </>
    );
}