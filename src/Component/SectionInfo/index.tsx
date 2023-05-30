import { Col, Divider, Image, Row } from "antd";
import React from "react";
import { PhoneOutlined, MailOutlined, LinkedinOutlined, GithubOutlined } from "@ant-design/icons";
import Link from "antd/es/typography/Link";
import profilePictures from "../../Assets/profilePictures.jpeg";
import { hobbiesArray } from "../../Constant/Hobbies";
import { hobbieType } from "../../Types";
import { AiFillCar } from "react-icons/ai";
import { description } from "../../Constant/Description";

interface sectionInfo {}

const SectionInfo: React.FC<sectionInfo> = React.memo(({}) => {
  return (
    <Row justify={"center"} style={{ width: "100%", color: "black" }}>
      <Row style={{ width: "100%" }}>
        <Col xs={12}>
          <Image
            src={profilePictures}
            alt="Lucas"
            style={{ width: "100%", maxWidth: "200px", borderRadius: "4.5px" }}
            preview={false}
          />
        </Col>
        <Col xs={12}>
          <Row style={{ width: "100%" }} justify={"end"}>
            AUXACHS
          </Row>
          <Row style={{ width: "100%" }} justify={"end"}>
            Lucas
          </Row>
          <Row style={{ width: "100%" }} justify={"end"}>
            25 Ans
          </Row>
          <Row style={{ width: "100%" }} justify={"end"}>
            Perpignan
          </Row>
        </Col>
      </Row>

      <Row style={{ width: "100%", marginTop: "20px" }}>
        <Col xs={14}>
          <Row style={{ width: "100%" }} align={"middle"}>
            <PhoneOutlined style={{ marginRight: "10px" }} /> 06 24 79 71 52
          </Row>
          <Row style={{ width: "100%" }} align={"middle"} wrap={false}>
            <MailOutlined style={{ marginRight: "10px" }} /> lauxachs@gmail.com
          </Row>
          <Row style={{ width: "100%" }} align="middle">
            <AiFillCar style={{ marginRight: "10px" }} /> Permis B
          </Row>
          <Row style={{ width: "100%" }} align={"middle"}>
            <LinkedinOutlined style={{ marginRight: "10px" }} />
            <Link href="https://www.linkedin.com/in/lucas-auxachs-4a82951b0/" target="_blank">
              Linkedin
            </Link>
          </Row>
          {/*
          <Row style={{ width: "100%" }} align={"middle"}>
            <GithubOutlined style={{ marginRight: "10px" }} />{" "}
            <Link href="https://github.com/" target="_blank">
              Github
            </Link>
          </Row>
  */}
        </Col>
        <Col flex="auto"></Col>
      </Row>

      <Row style={{ marginTop: 10, fontStyle: "italic" }}>{description()}</Row>
      <Divider orientation="left" style={{ fontWeight: "bold", color: "#001529" }}>
        Langues
      </Divider>
      <Row justify="start" style={{ width: "100%" }} align={"middle"}>
        <Col flex="80px" style={{ fontWeight: "bold" }}>
          Français
        </Col>
        Courant
      </Row>
      <Row justify="start" style={{ width: "100%" }} align={"middle"}>
        <Col flex="80px" style={{ fontWeight: "bold" }}>
          Anglais
        </Col>
        B2 (840 points au TOEIC)
      </Row>
      <Row justify="start" style={{ width: "100%" }} align={"middle"}>
        <Col flex="80px" style={{ fontWeight: "bold" }}>
          Espagnol
        </Col>
        Étudié de la 6ème à la terminale
      </Row>

      <Divider orientation="left" style={{ fontWeight: "bold", color: "#001529" }}>
        Hobbies
      </Divider>
      {hobbiesArray.map((h: hobbieType, index: number) => {
        return (
          <Row justify="start" wrap={false} style={{ width: "100%" }} align={"middle"} key={"hobbie_" + index}>
            {h.icon}
            <Col flex="10px" />
            <Col flex="auto">{h.title}</Col>
          </Row>
        );
      })}
    </Row>
  );
});

export default SectionInfo;
