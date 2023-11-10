import { Card } from "antd";
import plus from "../assets/plus.png";
import { useState } from "react";
import { Cards } from "./cards";
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
            width: 300,
            zIndex:"5"
          }}
          // bodyStyle={{overflow: "auto", }}
          style={{
            width: 300,
            height: 500,
            backgroundColor: "gray",
            overflow: "auto",
          }}
          extra={
            <img
              src={plus}
              alt=""
              className="text-white"
              style={{ color: "white", cursor: "pointer" }}
              onClick={async (e: any) => {
                title && setContainer([...container, <Cards />]);
              }}
            />
          }
        >
          {/* <div className="absolute"> */}
            {container.map((item: any, index: number) => {
              console.log("item", item);
              return (
                // <div className="bg-blue-200 mt-10" key={index}>
                <>
                  {item}
                </>
                // </div>
              );
            })}
          {/* </div> */}
        </Card>
      </div>
    </>
  );
};
