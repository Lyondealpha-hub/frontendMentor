import React, {
  createContext,
  useContext,
  useState,
  MouseEvent,
  ChangeEvent,
  KeyboardEvent,
} from "react";

// import { Tree } from "antd";
import type { TreeProps } from "antd/es/tree";
import { TextArea } from "../templates/TextArea";

// Define a type for your context
type TreeData = {
  title: React.ReactNode;
  key: string;
  children?: TreeData[];
};

interface MyContextProps {
  headerTitle?: string;
  storyPoint?: string;
  count?: number;
  showTreeTemplate?: boolean;
  disableTextArea?: boolean;
  addStoryPoints?: (event: MouseEvent<HTMLTextAreaElement>) => void;
  addHeaderTitle?: (e: ChangeEvent<HTMLInputElement>) => void;
  toggleTitleAndTextField?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onSelect?: any;
  treeData?: any;
  showTextOrTextField?: boolean;
  setShowTreeTemplate?: any;
  setShowTextOrTextField?: any;
  CardData?: any[];
  container_new:any[];
  container_start:any[];
  container_progress:any[];
  container_done:any[];
  setContainer_new:any;
  setContainer_start:any;
  setContainer_progress:any;
  setContainer_done:any;
  board:any[]
}

// Create a context with an initial value
const MyContext = createContext<MyContextProps | undefined>(undefined);

// Create a provider component
export const MyProvider = ({ children }: any) => {
 
  const [container_new, setContainer_new] = useState<any[]>([]);
  const [container_start, setContainer_start] = useState<any[]>([]);
  const [container_progress, setContainer_progress] = useState<any[]>([]);
  const [container_done, setContainer_done] = useState<any[]>([]);
  
  const board = [
    { title: "Create new Todo", headerColor: "red" , container:{container_new,setContainer_new}},
    { title: "Start with", headerColor: "orange",container:{container_start,setContainer_start}},
    { title: "In-Progress", headerColor: "blue",container:{container_progress,setContainer_progress}},
    // { title: "Review", headerColor: "pink" },
    { title: "Done", headerColor: "green",container:{container_done,setContainer_done}}
  ];
 
 
 
 
 
 
 
 
 
 
 
 
 

  let [count, setCount] = useState<number>(1);

  // const [storyPoint, setStoryPoint] = useState("");

  const onSelect: TreeProps["onSelect"] = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  const [disableTextArea, setDisableTextArea] = useState<boolean>(true);

  const [showTreeTemplate, setShowTreeTemplate] = useState(false);

  const [headerTitle, setheaderTitle] = useState<string>("header Title");

  const [showTextOrTextField, setShowTextOrTextField] = useState<boolean>(true);

  // const [CardData, setCardData] = useState<any[]>([]);

  const addHeaderTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setheaderTitle(e.target.value);
  };

  const toggleTitleAndTextField = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setShowTextOrTextField(false);
    }
  };
  // const DisableTextarea = (event:any) => {
  //   // if (event.key === "Enter") {

  //     // event.preventDefault();
  //     // toggleDisableTextarea();
  //     setDisableTextArea(!disableTextArea)
  //   }

  const toggleDisableTextarea = (e:any ) => {
    setDisableTextArea(!disableTextArea) 
  };

  const textareas  = (
    <>
      <TextArea
        disable={disableTextArea}
        toggleDisable={toggleDisableTextarea}
      />
      <div>Task {count}</div>
    </>
  )

  const [treeData, setTreeData] = useState<TreeData[]>([
    {
      title: `${count}`,
      key: "0-0",
      children: [
        {
          title: textareas,
          key: "0-0-0",
        },
      ],
    },
  ]);

  const addStoryPoints = async () => {
    const newTreeData = [...treeData];
    const value = (count += 1);
    newTreeData[0].children?.push({
      title: textareas,
      key: `0-0-${newTreeData[0].children?.length}`,
    });
    newTreeData[0].title = count;
    setTreeData(newTreeData);
    setCount(value);
    console.log(newTreeData[0]);
  };

  const contextValue: MyContextProps = {
    headerTitle,
    // storyPoint,
    count,
    showTreeTemplate,
    disableTextArea,
    addStoryPoints,
    addHeaderTitle,
    toggleTitleAndTextField,
    onSelect,
    treeData,
    showTextOrTextField,
    setShowTextOrTextField,
    setShowTreeTemplate,
    // CardData,
    container_new,
    container_start,
    container_progress,
    container_done,
    setContainer_new,
    setContainer_start,
    setContainer_progress,
    setContainer_done,
    board
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

// Create a custom hook to consume the context
export const useMyContext = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }

  return context;
};
