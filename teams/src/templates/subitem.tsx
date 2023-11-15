import { Card } from "antd";
import { EditOutlined } from "@ant-design/icons";

type props = {
title?:string;
detail?:string
}
export const SubItem = ({title,detail}:props) => {
  return (
    <>
      <Card extra={<EditOutlined/>} bordered={false} style={{ width: 220,margin:'10%' }}>
        <div>{detail}</div>
      </Card>
    </>
  );
};
