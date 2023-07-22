import { Container, Row, Col } from "react-bootstrap";

const EkskulPage = () => {
  return (
    <div className="gallery">
      <div className="ekskul">
        <Container>
          <Row>
            <Col className="section-title">
              <h1>
                Gallery <br /> Kegiatan Ekskul
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default EkskulPage;
