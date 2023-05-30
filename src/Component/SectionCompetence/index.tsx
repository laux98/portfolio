import { Col, Divider, Rate, Row } from "antd";
import React from "react";
import { competencesArray } from "../../Constant/Competences";
import { competenceSectionType, competenceType } from "../../Types";

interface sectionCompetenceProps {
  isMobile: boolean;
}
const SectionCompetence: React.FC<sectionCompetenceProps> = React.memo(({ isMobile }) => {
  return (
    <Row style={{ width: "100%" }}>
      {competencesArray.map((section: competenceSectionType, indexCompetenceSection: number) => {
        return (
          <Row key={"section_" + indexCompetenceSection} style={{ width: "100%" }}>
            <Divider
              orientation="left"
              style={{
                color :'#001529' ,
                fontWeight: "bold",
                margin: indexCompetenceSection === 0 ? "0px 0px 16px 0px" : "16px 0px 16px 0px",
              }}
            >
              {section.label} 
            </Divider>
            {section.competences.map((competence: competenceType, indexCompetence: number) => {
              return (
                <Row
                  align="middle"
                  justify={"start"}
                  style={{ width: isMobile ? "100%" : "50%", marginTop: 10, display: "flex", alignItems: "center" }}
                  key={"section_" + indexCompetenceSection + "_competence_" + indexCompetence}
                >
                  <Col xs={2}>
                    <Row align="middle">{competence.icon} </Row>
                  </Col>
                  <Col xs={8}> {competence.label} </Col>
                  <Col xs={14}>
                    <Row align="middle">
                      <Rate allowHalf disabled defaultValue={competence.mark} />
                    </Row>
                  </Col>
                </Row>
              );
            })}
          </Row>
        );
      })}
    </Row>
  );
});

export default SectionCompetence;
