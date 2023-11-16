import { Card, Tooltip } from "antd";
import plus from "../assets/plus.png";
import { useState } from "react";
import { Cards } from "./cardsTemplate2";
import { useMyContext } from "../CardAPI/cardContextAPI";
// import { HoverStyle } from "devextreme-react/chart";

interface props {
  title: string;
  headerColor: string;
  data: any[];
  container:any;
}

export const Boards = ({ title, headerColor, data,container}: props) => {
  // const [container, setContainer] = useState<any[]>([]);
  const { container_new } = useMyContext();

  return (
    <>
      <div className="">
        <Card
          id={title}
          title={`${title}/ ${container_new.length}`}
          bordered={false}
          headStyle={{
            backgroundColor: `${headerColor}`,
            position: "fixed",
            width: 350,
            zIndex: "5",
          }}
          bodyStyle={{ justifyContent: "center", paddingTop: "20%" }}
          style={{
            width: 350,
            height: 500,
            backgroundColor: "gray",
            overflow: "auto",
            scrollbarWidth: "none",
          }}
          extra={
            <Tooltip title="Add new task" color="lime">
              {title === "Create new Todo" ? (
                <img
                  src={plus}
                  alt=""
                  className="text-white"
                  style={{ cursor: "pointer" }}
                  onClick={async (e: any) => {
                    title && container.setContainer_new([...container.container_new, <Cards />])
                  }}
                />
              ) : (
                ""
              )}
            </Tooltip>
          }
        >
          {/* <div className="absolute"> */}
          {title === "Create new Todo" ? container.container_new.map((item: any, index: number) => {
            console.log("item", item);
            return (
              <div className="mt-2" key={index}>
                {item}
              </div>
            );
          }):null}
        </Card>
      </div>
    </>
  );
};
