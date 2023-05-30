import { Layout, Row } from "antd";
import React from "react";
import Header from "../Header";
import { Content } from "antd/es/layout/layout";
import { menuItems } from "../../Constant/Menu";
import Section from "../Section";
import SectionInfo from "../SectionInfo";
import SectionCompetence from "../SectionCompetence";
import SectionCursus from "../SectionCursus";
import SectionRealisations from "../SectionRealisations";
import { useMediaQuery } from "react-responsive";
import SectionContact from "../SectionContact";
import "./index.css";

const MainComponent: React.FC<any> = React.memo(() => {
  const arrayId = ["id0", "id1", "id2", "id3", "id4"];
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <Layout style={{ height: "100vh", width: "100%" }}>
      <Row style={{ height: "60px" }}>
        <Header
          onSelectElement={(id: number) => {
            const currentId = document.getElementById(arrayId[id]);
            currentId?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </Row>
      <Content
        style={{
          marginTop: "20px",
          width: isMobile ? "98%" : "600px",
          height: "calc(100% - 100px)",
          alignSelf: "center",
          overflowY: "scroll",
        }}
      >
        <Row id="id0">
          <Section title={menuItems[0].label} icon={menuItems[0].icon} content={<SectionInfo />} />
        </Row>
        <Row id="id1">
          <Section
            title={menuItems[1].label}
            icon={menuItems[1].icon}
            content={<SectionCompetence isMobile={isMobile} />}
          />
        </Row>
        <Row id="id2">
          <Section title={menuItems[2].label} icon={menuItems[2].icon} content={<SectionCursus />} />
        </Row>
        <Row id="id3">
          <Section title={menuItems[3].label} icon={menuItems[3].icon} content={<SectionRealisations />} />
        </Row>
        <Row id="id4">
          <Section title={menuItems[4].label} icon={menuItems[4].icon} content={<SectionContact />} />
        </Row>
      </Content>
    </Layout>
  );
});

export default MainComponent;
