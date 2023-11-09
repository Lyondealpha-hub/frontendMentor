import React, { useEffect, useState } from "react";
import { DownOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Tree } from "antd";
import type { DataNode, TreeProps } from "antd/es/tree";
import InputTemplate from "./InputTemplate";
import Datepicker from "./Datepicker";
import tree from "../assets/hierarchical-structure.png";
import { Width } from "devextreme-react/chart";

const App: React.FC = () => {
  const onSelect: TreeProps["onSelect"] = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  const [TreeDataState, setTreeDataState] = useState<number>(0);

  let treeData: DataNode[] = [
    {
      title: TreeDataState,
      key: "0-0",
      children: [
        {
          title: (
            <div>
              <InputTemplate />
              <Datepicker />
            </div>
          ),
          key: "0-0-0",
        },

        {
          title: (
            <div>
              <InputTemplate />
              <Datepicker />
            </div>
          ),
          key: "0-0-2",
          // children: [
          //   {
          //     title: 'leaf',
          //     key: '0-0-2-0',
          //   },
          //   {
          //     title: 'leaf',
          //     key: '0-0-2-1',
          //   },
          // ],
        },
      ],
    },
  ];

  useEffect(() => {
    setTreeDataState(treeData.length + 1);
  }, [treeData]);

  return (
    <div style={{width: 300}} className="flex justify-end items-start ">
      <li className="ml-7">
        {" "}
        <PlusCircleOutlined  style={{fontSize:"150%"}}/>
      </li>
      <li className=" ">
        <Tree
          showLine
          switcherIcon={<img src={tree} alt="" />}
          defaultExpandedKeys={["0-0-0"]}
          onSelect={onSelect}
          treeData={treeData}
        //   style={{ paddingLeft: "150px" }}
        className="px-3"
        />
      </li>
    </div>
  );
};

export default App;
