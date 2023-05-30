import { Row, Timeline } from "antd";
import React from "react";
import { cursus } from "../../Constant/Cursus";
import { cursusItemType } from "../../Types";
import { MdWork } from "react-icons/md";
import { MdSchool } from "react-icons/md";

interface sectionCursusProps {}

const SectionCursus: React.FC<sectionCursusProps> = React.memo(({}) => {
  return (
    <Row style={{ width: "100%" }}>
      <Timeline
        mode="left"
        items={cursus.map((elt: cursusItemType, index: number) => {
          return {
            children: (
              <Row style={{ width: "100%" }}>
                <Row style={{ width: "100%", color:'#001529', fontWeight: "bold", borderBottom: "1px solid lightgray" }}>
                  {" "}
                  {elt.title}
                </Row>
                <Row style={{ width: "100%" }}> {elt.date} </Row>
                <Row style={{ width: "100%" }}> {elt.place}</Row>
                <Row style={{ width: "100%", marginTop: "10px", fontStyle: "italic" }}> {elt.description}</Row>
              </Row>
            ),
            dot:
              elt.type === "job" ? <MdWork style={{ fontSize: "25px" }} /> : <MdSchool style={{ fontSize: "25px" }} />,
          };
        })}
      />
    </Row>
  );
});

export default SectionCursus;
