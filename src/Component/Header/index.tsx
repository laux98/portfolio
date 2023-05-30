import React, { useState } from "react";
import { Col, Layout,  Popover, Row } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { menuItems } from "../../Constant/Menu";
import { menuItemType } from "../../Types";

interface headerProps {
  onSelectElement: (id: number) => void;
}
const { Header: HeaderAntd } = Layout;

const Header: React.FC<headerProps> = React.memo(({ onSelectElement }) => {
  const [showPopover, setShowPopover] = useState<boolean>(false);

  return (
    <HeaderAntd
      style={{
        color: "white",
        width: "100%",
        height: 60,
        position: "fixed",
        top: 0,
      }}
    >
      <Row
        align="middle"
        style={{
          height: 50,
        }}
      >
        <Col flex={2}>
          <Row style={{ width: "100px" }}>
            <Popover
              overlayStyle={{ backgroundColor: "#001529", borderRadius: "4.5px", border: "1px solid white" }}
              overlayInnerStyle={{ backgroundColor: "#001529" }}
              open={showPopover}
              content={
                <Row style={{ width: "200px" }}>
                  {menuItems.map((item: menuItemType, index: number) => {
                    return (
                      <Row
                        key={"menu_item_" + index}
                        style={{
                          color: "white",
                          width: "100%",
                          height: "30px",
                          fontWeight: "bold",
                          cursor: "pointer",
                          marginTop: "5px",
                          marginBottom: "10px",
                        }}
                        onClick={() => {
                          setShowPopover(false);
                          onSelectElement(item.id);
                        }}
                      >
                        <Col flex="40px" style={{ fontSize: "20px" }}>
                          {item.icon}
                        </Col>
                        <Col flex="auto" style={{ fontSize: "20px" }}>
                          {item.label}
                        </Col>
                      </Row>
                    );
                  })}
                </Row>
              }
            >
              {showPopover ? (
                <UpOutlined
                  style={{ fontSize: "25px", color: "white", cursor: "pointer" }}
                  onClick={() => {
                    setShowPopover(!showPopover);
                  }}
                />
              ) : (
                <DownOutlined
                  style={{ fontSize: "25px", color: "white", cursor: "pointer" }}
                  onClick={() => {
                    setShowPopover(!showPopover);
                  }}
                />
              )}
            </Popover>
          </Row>
        </Col>
        <Col></Col>
        <Col style={{ textAlign: "right", marginLeft: 25, fontWeight: "bold" }}>AUXACHS Lucas</Col>
      </Row>
    </HeaderAntd>
  );
});

export default Header;
