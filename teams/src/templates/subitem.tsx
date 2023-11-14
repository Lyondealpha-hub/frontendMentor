import { Card } from "antd";
import { EditOutlined } from "@ant-design/icons";
export const SubItem = () => {
  return (
    <>
      <Card title={<input type="text" style={{padding:2}} placeholder="sub_item"/>} headStyle={{paddingLeft:'2%',padding:5}} extra={<EditOutlined/>} bordered={false} style={{ width: 220,margin:'10%' }}>
        
      </Card>
    </>
  );
};
