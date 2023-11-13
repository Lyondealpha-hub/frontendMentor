import React, { useEffect, useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { DatePicker, Tree } from "antd";
import type { DataNode, TreeProps } from "antd/es/tree";
import InputTemplate from "./InputTemplate";
import Datepicker from "./Datepicker";
import tree from "../assets/hierarchical-structure.png";

type TreeData = {
  title: React.ReactNode;
  key: string;
  children?: TreeData[];
};

const App: React.FC = () => {
  const onSelect: TreeProps["onSelect"] = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  const [TreeDataState, setTreeDataState] = useState<number>(0);
  const [display, setDisplay] = useState(true);
  // const [inputValue, setInputValue] = useState<string>("");
  const [taskCount, setTaskCount] = useState(1);
  const [count, setCount] = useState<number>(1);
  const [treeData, setTreeData] = useState<TreeData[]>([
    {
      title: count,
      key: "0-0",
      children: [
        {
          title: (
            <div>
              <InputTemplate />
              <Datepicker />
              {display ? <div>Task 1</div> : <div>Task 2</div>}
            </div>
          ),
          key: "0-0-0",
        },
      ],
    },
  ]);

  const addInput = () => {
    const newTreeData = [...treeData];
    const newTaskCount = taskCount + 1;
    const newCount = (e: any) => {
      console.log("btn", e.currentTarget);
      setCount(count + 1);
    };
    newTreeData[0].children?.push({
      title: (
        <div>
          <InputTemplate />
          <DatePicker />
          <div>Task {newTaskCount}</div>
        </div>
      ),
      key: `0-0-${newTreeData[0].children?.length}`,
    });

    setTreeData(newTreeData);
    setTaskCount(newTaskCount);
    newCount(0);
  };

  // const handleInputSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === "Enter") {
  //     const newTreeData = [...treeData];
  //     newTreeData[0].title = inputValue;
  //     setTreeData(newTreeData);
  //   }
  // };

  useEffect(() => {
    setTreeDataState(treeData.length + 1);
    console.log(treeData[0].children);
  }, [treeData]);

  return (
    <div style={{ width: 300 }} className="flex justify- mt-3 items-start ">
      {/* <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleInputSubmit}
      /> */}
      <li className="ml-7">
        <PlusCircleOutlined onClick={addInput} style={{ fontSize: "150%" }} />
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
    </div>
  );
};

export default App;
