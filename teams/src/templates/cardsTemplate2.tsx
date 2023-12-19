// import React, {
//   useState,
//   ChangeEvent,
//   KeyboardEvent,
//   MouseEventHandler,
// } from "react";
import TreeTemplate from "./TreeTemplate";
import { EllipsisOutlined, EditOutlined } from "@ant-design/icons";
import { Card, Input } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useMyContext } from "../CardAPI/cardContextAPI";
import { useState } from "react";
// import { title } from "process";

const { Meta } = Card;

export const Cards: React.FC = () => {
  const {
    headerTitle,
    addHeaderTitle,
    showTextOrTextField,
    showTreeTemplate,
    toggleTitleAndTextField,
    setShowTextOrTextField,
    setShowTreeTemplate,
  } = useMyContext();

  const [position, setPosition] = useState(0);

  const handleMoveLeft = () => {
    setPosition(position => Math.max(0, position - 1));
  };

  const handleMoveRight = () => {
    console.log("move right");
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
        <LeftOutlined onClick={()=>handleMoveLeft()}/>
        <RightOutlined onClick={()=>handleMoveRight()}/>
      </div>
      <Meta title="" />
      <br />
      <div className="flex justify-center gap-10">
        <div>
          {showTextOrTextField ? (
            <Input
              onChange={addHeaderTitle}
              onKeyDown={toggleTitleAndTextField}
              value={headerTitle}
              placeholder="Task"
            />
          ) : (
            <div className="p-1 px-5 border border-gray-400 rounded-lg">
              {headerTitle}
            </div>
          )}
        </div>
        <div>
          <EditOutlined
            onClick={() =>
              showTextOrTextField && headerTitle !== ""
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
