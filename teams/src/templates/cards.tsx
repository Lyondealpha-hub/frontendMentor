import React, { useState } from "react";
import { Card } from "antd";
// import { EllipsisOutlined} from '@ant-design/icons';
// import { DownOutlined } from '@ant-design/icons';
import { Tree } from "antd";
import type { DataNode, TreeProps } from "antd/es/tree";
import tree from "../assets/hierarchical-structure.png";

interface props {}

// const treeData: DataNode[] = [
//   {
//     title: "parent 1",
//     key: "0-0",
//     children: [
//       {
//         title: <textarea />,
//         key: "0-0-0",
//         children: [],
//       },
//       {
//         title: <input type="text" placeholder=" + add sub-item" />,
//         key: "0-0-1",
//         children: [],
//       },
//     ],
//   },
// ];
export const Cards: React.FC<props> = () => {
  // const [enterInput, setEnterInput] = useState<boolean>();
  // const [addInput, setAddInput] = useState<boolean>();
  // const [count, setCount] = useState<number>(0);

  const [treeData, setTreeData] = useState<DataNode[]>([
    {
      title: "parent 1",
      key: "0-0",
      children: [
        {
          title: <textarea />,
          key: "0-0-0",
          children: [],
        },
        {
          title: <input type="text" placeholder=" + add sub-item" />,
          key: "0-0-1",
          children: [],
        },
      ],
    },
  ]);

  const onSelect: TreeProps["onSelect"] = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
    setTreeData([
      // ...treeData[0].,
      {
        title: <textarea />,
        key: "0-0-0",
        children: [],
      },
    ]);
  };

  return (
    <>
      <Card
        bordered={false}
        style={{ width: 250, marginTop: 40, marginRight: "20%" }}
        actions={[
          <Tree
            showLine
            switcherIcon={<img src={tree} alt="" />}
            defaultExpandedKeys={["0-0-0"]}
            onSelect={onSelect}
            treeData={treeData}
          />,
        ]}
      >
        <input type="text" placeholder="New task" />
      </Card>
    </>
  );
};
