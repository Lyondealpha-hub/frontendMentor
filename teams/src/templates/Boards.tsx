import { Card, Tooltip } from "antd";
import plus from "../assets/plus.png";
import { useState } from "react";
import { Cards } from "./cardsTemplate2";
// import { HoverStyle } from "devextreme-react/chart";

interface props {
  title: string;
  headerColor: string;
  data: any[];
}

export const Boards = ({ title, headerColor, data }: props) => {
  const [container, setContainer] = useState<any[]>([]);

  return (
    <>
      <div className="justify-center">
        <Card
          id={title}
          title={`${title}/ ${container.length}`}
          bordered={false}
          headStyle={{
            backgroundColor: `${headerColor}`,
            position: "fixed",
            width: "19.2%",
            zIndex: "5"
          }}
          bodyStyle={{ justifyContent:"center",paddingTop:"20%" }}
          style={{
            width: "100%",
            height: 500,
            backgroundColor: "gray",
            overflow: "auto",
            scrollbarWidth: "none",
          }}
          extra={
            <Tooltip title="Add new task" color="lime">
              <img
                src={plus}
                alt=""
                className="text-white"
                style={{ cursor: "pointer" }}
                onClick={async (e: any) => {
                  title && setContainer([...container, <Cards />]);
                }}
              />
            </Tooltip>
          }
        >
          {/* <div className="absolute"> */}
          {container.map((item: any, index: number) => {
            console.log("item", item);
            return <div  className="mt-2"  key={index}>{item}</div>;
          })}
        </Card>
      </div>
    </>
  );
};