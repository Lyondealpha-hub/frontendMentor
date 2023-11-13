import { Card } from "antd";
import React from "react";
import comment from "../assets/comments.png";
import rotation from "../assets/rotation.png";
// import bell from "../assets/bell.png";
interface ImgProps {
  title?: string;
}
const content = [
  { id: 0, title: "Complaint", image: comment },
  { id: 1, title: "Assigned Task", image: rotation },
  // { id: 2, title: "Notification", image: bell },
];
export const CardS = ({ title }: ImgProps) => {
  return (
    <>
      <Card className="shadow-lg">
        <div className="flex justify-center gap-20 ">
        {content.map(({id,title,image}) => (
          <div key={id} className=" cursor-pointer">
            <img src={image} alt="" />
            <label>{title}</label>
          </div>
        ))}
        </div>
      </Card>
    </>
  );
};
