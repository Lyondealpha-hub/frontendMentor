import React, { useState } from "react";
import TreeTemplate from "./TreeTemplate";
import {
  // EditOutlined,
  // EllipsisOutlined,
  // SettingOutlined,
} from "@ant-design/icons";
import { Card, Input } from "antd";

const { Meta } = Card;

export const Cards: React.FC = () => {
  // const [showTreeTemplate, setShowTreeTemplate] = useState(false);

  return(
    <Card
      style={{ width: 300 }}
      actions={[
        // <div onClick={() => setShowTreeTemplate(true)}>
          // <EllipsisOutlined key="ellipsis" />
          <TreeTemplate/>
        // </div>,
      ]}
    >
      <Meta title="Card title" /><br/>
      <Input placeholder="Basic usage" />
    </Card>
  );
};