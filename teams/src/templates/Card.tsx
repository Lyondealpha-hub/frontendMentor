import { Card } from "antd";
import React, { useState } from "react";
import comment from "../assets/comments.png";
import rotation from "../assets/rotation.png";
import Modalx from "./Modal2";
// import bell from "../assets/bell.png";

interface ImgProps {
  title?: string;
}
const content = [
  // { id: 0, title: "Complaint", image: comment },
  { id: 1, title: "Assigned Task", image: rotation },
  // { id: 2, title: "Notification", image: bell },
];

const data = [
  {
    id: '0',
    title: 'Lorem',
    img: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${1}`,
    description: 'lorem ipsum dolor sit amet'
  },
  {
    id: '1',
    title: 'lorem',
    img: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${2}`,
    description: 'lorem ipsum dolor sit amet'
  },
  {
    id: '2',
    title: 'lorem',
    img: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${3}`,
    description: 'lorem ipsum dolor sit amet'
  },
  {
    id: '3',
    title: 'lorem',
    img: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${4}`,
    description: 'lorem ipsum dolor sit amet'
  },
];


export const CardS = ({ title }: ImgProps) => {

  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <Card className="shadow-lg">
        <div className="flex justify-center gap-20">
        {content.map(({id,title,image}) => (
          <div key={id} className=" cursor-pointer" onClick={() => setOpenModal(true)}>
            <img src={image} alt="" />
            <label>{title}</label>
          </div>
        ))}
        </div>
      </Card>

      <Modalx data={data} handleOK={() => setOpenModal(false)} isModalOpen={openModal} isList={true} title="All Task List" description="All Teams with assigned tasks" multipleInputs={[]} handleCancel={() => setOpenModal(false)}/>
    </>
  );
};

