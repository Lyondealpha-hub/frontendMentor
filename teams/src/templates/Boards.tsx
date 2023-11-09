import { Card } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

interface props {
  title: string;
  headerColor: string;
}

export const Boards: React.FC<props> = ({
  title,
  children,
  headerColor,
}: any) => {
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
