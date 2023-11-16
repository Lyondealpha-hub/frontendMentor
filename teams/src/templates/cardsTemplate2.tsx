import TreeTemplate from "./TreeTemplate";
import { EllipsisOutlined, EditOutlined } from "@ant-design/icons";
import { Card, Input } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useMyContext } from "../CardAPI/cardContextAPI";
import { useState } from "react";

const { Meta } = Card;
type props={
  title?:string;
}
export const Cards=({title}:props) => {
   const{
    headerTitle,
    addHeaderTitle,
    showTextOrTextField,
    showTreeTemplate,
    toggleTitleAndTextField,
    setShowTextOrTextField,
    setShowTreeTemplate,
    container_new,
    container_start,
    setContainer_new,
    setContainer_start,
    board
  } = useMyContext();
let [count,setCount] = useState<number>(1)
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
        <LeftOutlined onClick={()=>{}}/>
        <RightOutlined  onClick={async (e: any) => {
                    board[count].title && board[count].container.push([...container_start, <Cards />])
                    alert(board[count].title);
                    // setCount(count++)
                  }}/>
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

