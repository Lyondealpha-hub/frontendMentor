import React from "react";
import { Card } from "antd";
// import { EllipsisOutlined} from '@ant-design/icons';
// import { DownOutlined } from '@ant-design/icons';
import { Tree } from "antd";
import type { DataNode, TreeProps } from "antd/es/tree";
import tree from "../assets/hierarchical-structure.png";

interface props {}
const treeData: DataNode[] = [
  {
    title: "parent 1",
    key: "0-0",
    children: [
      {
        title: "parent 1-0",
        key: "0-0-0",
        children: [],
      },
      {
        title: "parent 1-1",
        key: "0-0-1",
        children: [],
      },
    ],
  },
];
export const Cards: React.FC<props> = () => {
  const onSelect: TreeProps["onSelect"] = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
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
