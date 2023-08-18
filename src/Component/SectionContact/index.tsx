import { Button, Row } from "antd";
import React from "react";
import { MailOutlined, LinkedinOutlined } from "@ant-design/icons";
import Link from "antd/es/typography/Link";

const SectionContact: React.FC<any> = React.memo((props:any) => {
  return (
    <Row style={{ width: "100%" }} wrap={false}>
      <Row style={{ width: "11%" }} />
      <Link target="_blank" style={{ width: "100%" }} href="https://www.linkedin.com/in/lucas-auxachs-4a82951b0/">
        <Button style={{ width: "100%", height: "auto", fontWeight: "bold", fontSize: "60px" }} type="primary">
          <LinkedinOutlined />
        </Button>
      </Link>
      <Row style={{ width: "11%" }} />
      <Link style={{ width: "100%" }} href="mailto:lauxachs@gmail.com">
        <Button style={{ width: "100%", height: "auto", fontWeight: "bold", fontSize: "60px" }} type="primary">
          <MailOutlined />
        </Button>
      </Link>
      <Row style={{ width: "11%" }} />
    </Row>
  );
});

export default SectionContact;
