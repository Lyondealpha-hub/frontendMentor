import { Card } from "antd";
import React from "react";
import comment from "../assets/comments.png";
import rotation from "../assets/rotation.png";
interface ImgProps {
  title?: string;
}
const content = [
  { id: 0, title: "Complaint", image: comment },
  { id: 1, title: "Assigned Task", image: rotation },
];
export const CardS = ({ title }: ImgProps) => {
  return (
    <>
      <Card >
        <div className="flex justify-center gap-20">
        {content.map(({id,title,image}) => (
          <div key={id} className="text-lg cursor-pointer">
            <img src={image} alt="complaint" />
            <label>{title}</label>
          </div>
        ))}
        </div>
      </Card>
    </>
  );
};
