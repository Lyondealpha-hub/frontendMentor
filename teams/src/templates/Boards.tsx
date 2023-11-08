import { Card } from "antd";
import { EllipsisOutlined, PlusCircleOutlined } from "@ant-design/icons";

export const Boards = ({ title, children }: any) => {
  return (
    <>
      <div className="justify-center">
        <Card
          title={title}
          bordered={false}
          style={{ width: 300, height: 500 }}
          extra={<PlusCircleOutlined style={{cursor:'pointer'}}/>}
        >
          {children}
        </Card>
      </div>
    </>
  );
};
