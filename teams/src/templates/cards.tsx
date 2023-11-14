import React, { ChangeEvent, useState } from "react";
import { Card } from "antd";
// import { EllipsisOutlined} from '@ant-design/icons';
// import { DownOutlined } from '@ant-design/icons';
import { Tree } from "antd";
import type { DataNode, TreeProps } from "antd/es/tree";
import tree from "../assets/hierarchical-structure.png";

interface props {}



export const Cards: React.FC<props> = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    return e.target.value;
  };
  const treeData: DataNode[] = [
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
          title: (
            <input
              type="text"
              onChange={handleChange}
              placeholder=" + add sub-item"
            />
          ),
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

  ];
  
  return (
    <>
      <Card
        bordered={false}
        style={{ width: 250,height:50, marginTop: 40, marginRight: "20%" }}
        // actions={[
          // <Tree
          //   showLine
          //   switcherIcon={<img src={tree} alt="" />}
          //   defaultExpandedKeys={["0-0-0"]}
          //   onSelect={onSelect}
          //   treeData={treeData}
          //   style={{}}
          // />,
        // ]}
      >
        <input type="text" placeholder="New task" />
        <Tree
            showLine
            switcherIcon={<img src={tree} alt="" />}
            defaultExpandedKeys={["0-0-0"]}
            onSelect={onSelect}
            treeData={treeData}
            style={{}}
          />,
      </Card>
    </>
  );
};
