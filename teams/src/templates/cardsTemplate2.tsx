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

  // const [showTreeTemplate, setShowTreeTemplate] = useState(false);

  // const [Title, setTitle] = useState<string>("header Title");
  // const [showTextOrTextField, setShowTextOrTextField] = useState<boolean>(true);

  // const addHeaderTitle = (e: ChangeEvent<HTMLInputElement>) => {
  //   setTitle(e.target.value);
  // };

  // const toggleTitleAndTextField = (event: KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === "Enter" ) {
  //     setShowTextOrTextField(false);
  //   }
  // };

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
