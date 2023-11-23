import React, { useState, ChangeEvent, KeyboardEvent, MouseEvent } from "react";
// import TreeTemplate from "./TreeTemplate";
import { EllipsisOutlined, EditOutlined } from "@ant-design/icons";
import { Card, Input } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Tree } from "antd";
import type { TreeProps } from "antd/es/tree";
import { PlusCircleOutlined } from "@ant-design/icons";
import tree from "../assets/hierarchical-structure.png";

const { Meta } = Card;

type TreeData = {
  title: React.ReactNode;
  key: string;
  children?: TreeData[];
};

const TreeTemplate: React.FC = () => {
  const onSelect: TreeProps["onSelect"] = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  // const [TreeDataState, setTreeDataState] = useState<number>(0);

  let [count, setCount] = useState<number>(1);
  const [disableTextArea, setDisableTextArea] = useState<boolean>(false);
  // const [details, setDetails] = useState<string>("");

  const addStoryPoints = (event: MouseEvent<HTMLTextAreaElement>) => {
    const newTreeData = [...treeData];
    const value = (count += 1);
    newTreeData[0].children?.push({
      title: (
        <>
          <textarea
            // value={details}
            disabled={disableTextArea}
            style={{ border: "2px solid gray", padding: 5 }}
            placeholder="Add story point"
          />
          <div>Task {count}</div>
        </>
      ),
      key: `0-0-${newTreeData[0].children?.length}`,
    });
    setTreeData(newTreeData);
    setCount(value);
    setDisableTextArea(true);
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
                // onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                //   setDetails(e.target.value)
                // }
                // onKeyDown={handleKeyDown}
                style={{ border: "2px solid gray", padding: 5 }}
              />
              <div>Task {count}</div>
            </>
          ),
          key: "0-0-0",
        },
      ],
    },
  ]);

  // useEffect(() => {
  //   setTreeDataState(treeData.length + 1);
  //   console.log(treeData[0].children);
  // }, [treeData]);

  return (
    // 300
    <div style={{ width: "auto" }} className="flex justify- mt-3 items-start ">
      <li className="ml-7">
        <PlusCircleOutlined
          onClick={addStoryPoints}
          style={{ fontSize: "150%" }}
        />
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

export const Cards: React.FC = () => {
  const [showTreeTemplate, setShowTreeTemplate] = useState(false);

  const [Title, setTitle] = useState<string>("");
  const [showTextOrTextField, setShowTextOrTextField] = useState<boolean>(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && Title !== " ") {
      setShowTextOrTextField(false);
    } else {
      setShowTextOrTextField(true);
    }
  };

  return (
    <Card
      style={{
        width: "auto",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      }}
      actions={[
        <div onClick={() => setShowTreeTemplate(!showTreeTemplate)}>
          <EllipsisOutlined key="ellipsis" />
        </div>,
      ]}
    >
      <div className="flex justify-between">
        <LeftOutlined />
        <RightOutlined />
      </div>
      <Meta title="" />
      <br />
      <div className="flex justify-center gap-10">
        <div>
          {showTextOrTextField ? (
            <Input
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              value={Title}
              placeholder="Task"
            />
          ) : (
            <div className="p-1 px-5 border border-gray-400 rounded-lg">
              {Title}
            </div>
          )}
        </div>
        <div>
          <EditOutlined
            onClick={() =>
              showTextOrTextField && Title !== ""
                ? setShowTextOrTextField(false)
                : setShowTextOrTextField(true)
            }
          />
        </div>
      </div>
      {showTreeTemplate && <TreeTemplate />}
    </Card>
  );
};
