import { Card, Col, Row } from "antd";
import React, { useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

interface sectionProps {
  title: string;
  icon: any;
  content: any;
}

const Section: React.FC<sectionProps> = React.memo(({ title, icon, content }) => {
  const [showContent, setShowContent] = useState<boolean>(true);

  return (
    <Card
      title={
        <Row>
          <Col
            style={{ marginRight: "10px", fontSize: "18px", cursor: "pointer" , color:'#001529'}}
            onClick={() => setShowContent(!showContent)}
          >
            {icon}
          </Col>
          <Col style={{ fontSize: "18px", cursor: "pointer" , color:'#001529'}} onClick={() => setShowContent(!showContent)}>
            {title}
          </Col>
        </Row>
      }
      extra={
        <Row onClick={() => setShowContent(!showContent)} style={{ cursor: "pointer", fontSize: "18px" }}>
          {showContent ? <EyeInvisibleOutlined /> : <EyeOutlined />}
        </Row>
      }
      bordered={false}
      style={{ width: "100%", marginBottom: "10px" }}
    >
      {showContent && <Row style={{ width: "100%", padding: 10 }}>{content}</Row>}
    </Card>
  );
});

export default Section;
