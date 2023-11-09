import React from "react";
import { CommentOutlined, ReconciliationFilled } from "@ant-design/icons";
import { Card, Tooltip } from "antd";

export const Cards: React.FC = () => (
  <Card
    actions={[
      <>
        <Tooltip title="Complaint">
          <CommentOutlined style={{ fontSize: "300%" }} />
        </Tooltip>
      </>,

      <>
        <Tooltip title="Assigned Task">
          <ReconciliationFilled style={{ fontSize: "300%" }} />
        </Tooltip>
      </>,
    ]}
  ></Card>
);
