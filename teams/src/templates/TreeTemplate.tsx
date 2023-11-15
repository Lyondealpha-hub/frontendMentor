// import React, {
//   ChangeEvent,
//   useEffect,
//   useState,
//   KeyboardEvent,
//   MouseEvent,
// } from "react";
import { Tree } from "antd";
// import type { TreeProps } from "antd/es/tree";
import { PlusCircleOutlined } from "@ant-design/icons";
import tree from "../assets/hierarchical-structure.png";
import { useMyContext } from "../CardAPI/cardContextAPI";


// type TreeData = {
//   title: React.ReactNode;
//   key: string;
//   children?: TreeData[];
// };

const App: React.FC = () => {
  // const onSelect: TreeProps["onSelect"] = (selectedKeys, info) => {
  //   console.log("selected", selectedKeys, info);
  // };

  const {treeData,addStoryPoints,onSelect} = useMyContext();

  // let [count, setCount] = useState<number>(1);
  // const [disableTextArea, setDisableTextArea] = useState<boolean>(false);
  // const [details, setDetails] = useState<string>("");

  // const [treeData, setTreeData] = useState<TreeData[]>([
  //   {
  //     title: (`${count}`),
  //     key: "0-0",
  //     children: [
  //       {
  //         title: (
  //           <>
  //             <textarea
  //               placeholder="Add story point"
  //               // onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
  //               //   setDetails(e.target.value)
  //               // }
  //               // onKeyDown={handleKeyDown}
  //               style={{ border: "2px solid gray", padding: 5 }}
  //             />
  //             <div>Task {count}</div>
  //           </>
  //         ),
  //         key: "0-0-0",
  //       },
  //     ],
  //   },
  // ]);
  
  // const addStoryPoints = (event: MouseEvent<HTMLTextAreaElement>) => {
  //   const newTreeData = [...treeData];
  //   const value = count+=1;
  //   newTreeData[0].children?.push({
  //     title: (
  //       <>
  //       <textarea
  //         // value={details}
  //         disabled={disableTextArea}
  //         style={{ border: "2px solid gray", padding: 5 }}
  //         placeholder="Add story point"
  //       />
  //       <div>Task {count}</div>
  //       </>
  //     ),
  //     key: `0-0-${newTreeData[0].children?.length}`,
  //   });
  //   setTreeData(newTreeData);
  //   setCount(value)
  //   setDisableTextArea(true);
  // };

  

  // useEffect(() => {
  //   setTreeDataState(treeData.length + 1);
  //   console.log(treeData[0].children);
  // }, [treeData]);

  return (
    // 300
    <div style={{ width: "auto" }} className="flex justify- mt-3 items-start ">
      <li className="ml-7">
        <PlusCircleOutlined onClick={addStoryPoints} style={{ fontSize: "150%" }} />
      </li>
      <li className=" ">
        <Tree
          showLine
          switcherIcon={<img src={tree} alt="" />}
          defaultExpandedKeys={["0-0-0"]}
          onSelect={onSelect}
          treeData={treeData}
          className="px-3"
        />
      </li>
      <div className="flex justify-center mt-3"></div>
    </div>
  );
};

export default App;
