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
  setShowTreeTemplate:any;
  setShowTextOrTextField:any;
}

// Create a context with an initial value
const MyContext = createContext<MyContextProps | undefined>(undefined);

// Create a provider component
export const MyProvider = ({ children }: any) => {
  let [count, setCount] = useState<number>(1);
  const [storyPoint, setStoryPoint] = useState("");
  const onSelect: TreeProps["onSelect"] = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  const [disableTextArea, setDisableTextArea] = useState<boolean>(false);

  const [showTreeTemplate, setShowTreeTemplate] = useState(false);

  const [headerTitle, setheaderTitle] = useState<string>("header Title");

  const [showTextOrTextField, setShowTextOrTextField] = useState<boolean>(true);

  const addHeaderTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setheaderTitle(e.target.value);
  };

  const toggleTitleAndTextField = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setShowTextOrTextField(false);
    }
  };

  const [treeData, setTreeData] = useState<TreeData[]>([
    {
      title: `${count}`,
      key: "0-0",
      children: [
        {
          title: (
            <>
              <textarea
                placeholder="Add story point"
                style={{ width: "auto" }} className="flex justify- mt-3 items-start "
                
                // onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                //   setDetails(e.target.value)
                // }
                // onKeyDown={handleKeyDown}
                // style={{ border: "2px solid gray", padding: 5 }}
              />
              <div>Task {count}</div>
            </>
          ),
          key: "0-0-0",
        },
      ],
    },
  ]);
  const addStoryPoints = (event: MouseEvent<HTMLTextAreaElement>) => {
    const newTreeData = [...treeData];
    const value = count += 1;
    newTreeData[0].children?.push({
      title: (
        <>
          <textarea
            // value={details}
            disabled={disableTextArea}
            style={{ width: "100%" }}
            
            className="flex justify- mt-3 items-start "
            placeholder="Add story point"
          />
          <div>Task {count}</div>
        </>
      ),
      key: `0-0-${newTreeData[0].children?.length}`,
    });
    newTreeData[0].title = count;
    setTreeData(newTreeData);
    setCount(value);
    setDisableTextArea(true);
  };

  const contextValue: MyContextProps = {
    headerTitle,
    storyPoint,
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
    setShowTreeTemplate
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
