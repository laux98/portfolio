import { Card, Carousel, Col, Divider, Modal, Row } from "antd";
import React, { useState } from "react";
import { realisations } from "../../Constant/Realisations";
import { realisationType } from "../../Types";
import Meta from "antd/es/card/Meta";
import { useMediaQuery } from "react-responsive";

interface sectionRealisationsProps {}

const SectionRealisations: React.FC<sectionRealisationsProps> = React.memo(({}) => {
  const [realisationSelected, setRealisationSelected] = useState<realisationType>();
  const [indexSelected, setIndexSelected] = useState<number>();
  const [showModal, setShowModal] = useState<boolean>(false);

  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <Row style={{ width: "100%" }}>
      <Modal
        centered
        open={showModal}
        onCancel={() => setShowModal(false)}
        footer={null}
      >
        <Row>
          <Row>
            <Col flex="50%">
              <img
                style={{ width: "50%" }}
                alt={realisationSelected?.picture}
                src={realisationSelected?.picture}
              />
            </Col>
            <Col flex="50%">
              <Row style={{ fontWeight: "bold" }}>{realisationSelected?.title}</Row>
              <Row>{realisationSelected?.date}</Row>
              <Row style={{ marginTop: "20px" }}> {realisationSelected?.place}</Row>
            </Col>
          </Row>
          <Row style={{ fontSize: "italic", marginTop: "25px", fontWeight: "bold" }}>
            Technologies : &nbsp;
            {realisationSelected?.techno.map((t: string, index: number) => {
              return (
                <span
                  style={{ marginRight: "10px", fontWeight: "normal" }}
                  key={"realisation_" + indexSelected + "_techno_" + index}
                >
                  {t}
                </span>
              );
            })}
          </Row>
          <Divider />
          <Row style={{ fontStyle: "italic" }}>
            {realisationSelected?.description?.map((d: string, index: number) => {
              return (
                <Row style={{ marginTop: "5px" }} key={"realisation_" + indexSelected + "_phrase_" + index}>
                  {d}
                </Row>
              );
            })}
          </Row>
        </Row>
        <Row></Row>
      </Modal>

      {realisations.map((realisation: realisationType, index: number) => {
        return (
          <Card
            onClick={() => {
              setRealisationSelected(realisation);
              setShowModal(true);
            }}
            key={"realisation_" + index}
            hoverable
            style={{ width: isMobile ? "98%" : "46%", margin: "1%" }}
            cover={<img alt={realisation.title} src={realisation.picture} />}
          >
            <Meta title={realisation.title} description={realisation.date} />
          </Card>
        );
      })}
    </Row>
  );
});

export default SectionRealisations;
