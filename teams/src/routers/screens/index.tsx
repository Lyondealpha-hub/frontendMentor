import TabPanel, { Item } from 'devextreme-react/tab-panel';
import React, { useEffect, useRef, useState } from 'react'
import { CloseOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';

interface props {
    selected: string;
    UserPage: any;
    tabs: any;
    setTabs: (e: any) => void;

}

const Screens = ({ selected, UserPage, tabs, setTabs }: props) => {

    const navigate = useNavigate()
    const tabRef = useRef<any>();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [recentIndexes, setRecentIndexes] = useState<string[]>([])

    function array_move(arr: any, old_index: number, new_index: number) {
        while (old_index < 0) {
            old_index += arr.length;
        }
        while (new_index < 0) {
            new_index += arr.length;
        }
        if (new_index >= arr.length) {
            var k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr; // for testing purposes
    };


    useEffect(() => {
        console.log(`this is selected ${selected}`)
        // dispatch(setGeneralValue({expr:'closeAllForms', value: false}));

        let optional = false;
        let tabIndex = 0;
        if (tabs.length === 0) {
            console.log('adding to zero')

            // console.log('here');
            //If the tabs array is empty, add the current one
            setTabs([...tabs, { name: selected, url: window.location.pathname, page: UserPage }]);
            setRecentIndexes([...recentIndexes, selected]);
            console.log(recentIndexes)


        }

        else {
            console.log('adding to one')
            //loop through array
            console.log(tabs.length);
            for (let index = 0; index < tabs.length; index++) {
                const element = tabs[index];
                //If current location is found in array, maintain that index
                if (window.location.pathname === element.url) {
                    optional = true;
                    tabIndex = index;
                }


            }


            if (optional) {
                //If such existing value was found,  Set current index to the index that was found
                console.log('switching')
                setCurrentIndex(tabIndex)
                console.log('optional')
                console.log(tabIndex);

                //Check for item, remove it and add it.

                let testArray2 = [...recentIndexes];
                // let modifiedArray = array_move(testArray, tabIndex, testArray.length -1);
                let newModifiedArray = array_move(testArray2, tabIndex, testArray2.length - 1);
                // console.log(modifiedArray);
                console.log('modified array')
                setRecentIndexes([...newModifiedArray])
                console.log(newModifiedArray);


            } else {
                //Add that new value to the array and set the tab index to that value's index
                console.log('adding')
                setTabs([...tabs, { name: selected, url: window.location.pathname, page: UserPage }]);
                setCurrentIndex(tabs.length);


                //dont do anything with the removed value
                setRecentIndexes([...recentIndexes, selected]);
                console.log('added new recent indexes')
                console.log(recentIndexes)
            }
        }

    }, [window.location.pathname, tabs])

    return (
        <div className='w-full h-full'>
            <TabPanel
                ref={tabRef}
                // scrollingEnabled={true}
                showNavButtons={true}
                onTitleClick={() => { }}
                onContentReady={(e) => {
                    // console.log("INSTANCESSS", e.component?.$element + 100)
                }}

                itemTitleRender={(data) => {
                    // console.log(e)
                    return <>

                        <div className="w-full items-center p-1 z-0  flex">

                            <span className={`w-full  h-full  justify-center items-center`} onClick={() => {
                                console.log(tabs)
                                console.log(recentIndexes)
                                console.log(data.title)
                                setCurrentIndex(data)
                                let clickedTab = tabs.filter((element: any) => element.name === data.title)
                                window.history.replaceState(null, '', `${clickedTab[0].url}`);
                            }}>
                                {data.title}
                            </span>

                            <CloseOutlined className="ml-4 z-30 hover:text-red-400 text-xs pb-0.4" onClick={() => {
                                if (!(tabs.length <= 1)) {
                                    console.log(data.title)
                                    console.log(recentIndexes)
                                    let newArray: any = []
                                    let newTabs: any = []
                                    for (let index = 0; index < recentIndexes.length; index++) {
                                        const element = recentIndexes[index];
                                        if (data.title !== element) {
                                            newArray.push(element)
                                        }
                                    }

                                    console.log(newArray)
                                    console.log(tabs)
                                    tabs.forEach((element: any) => {
                                        //If element is not equal to clicked data, retain
                                        if (element.name !== data.title) {
                                            // console.log(element)
                                            newTabs.push(element)
                                        }
                                    });

                                    console.log(newTabs)
                                    let mostRecentIndex = 0;
                                    for (let index = 0; index < newTabs.length; index++) {
                                        const element = newTabs[index];
                                        if (element.name === newArray[newArray.length - 1]) {
                                            console.log(`the index is here ${index}`)
                                            mostRecentIndex = index;
                                        }
                                    }
                                    console.log(mostRecentIndex)
                                    setCurrentIndex(mostRecentIndex);
                                    window.history.replaceState(null, '', `${newTabs[newTabs.length - 1].url}`);

                                    setTabs([...newTabs])

                                }
                            }} />
                        </div>

                    </>;
                }}
                onSelectedIndexChange={(e) => {
                    // setCurrentIndex(e)
                }}
                selectedIndex={currentIndex} className="w-full h-full" >

                {
                    tabs.map((tab: any) => {
                        {
                            return (
                                <Item title={tab.name} >

                                    {<tab.page />}

                                </Item>
                            );

                        }


                    })

                }



            </TabPanel >
        </div>
    )
}

export default Screens