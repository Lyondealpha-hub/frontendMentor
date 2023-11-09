import { Card } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

export const Boards = ({ title, children, headerColor }: any) => {
  return (
    <>
      <div className="justify-center">
        <Card
          title={`${title}`}
          bordered={false}
          headStyle={{ backgroundColor: `${headerColor}` }}
          style={{ width: 300, height: 500, backgroundColor: "gray" }}
          extra={
            <PlusCircleOutlined style={{ cursor: "pointer", color: "white" }} />
          }
        >
          {children}
        </Card>
      </div>
    </>
  );
};
