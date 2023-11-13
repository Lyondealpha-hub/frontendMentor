import React, { useState } from "react";
import TreeTemplate from "./TreeTemplate";
import { EllipsisOutlined } from "@ant-design/icons";
import { Card, Input } from "antd";

const { Meta } = Card;


export const Cards: React.FC = () => {
  const [showTreeTemplate, setShowTreeTemplate] = useState(false);

  return(
    <Card
    // 350
      style={{ width: "auto", justifyContent: "center", alignItems: "center", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}}
      actions={[
        <div onClick={() => setShowTreeTemplate(!showTreeTemplate)}>
          <EllipsisOutlined key="ellipsis" />
        </div>,
      ]}
    >
      <Meta title="" /><br/>
      <Input placeholder="Task" />
      {showTreeTemplate && <TreeTemplate/>}
    </Card>
  );
};