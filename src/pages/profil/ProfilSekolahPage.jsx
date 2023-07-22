import { Container, Row, Col } from "react-bootstrap";

const ProfilSekolahPage = () => {
  return (
    <div className="profil">
      <div className="profil-sekolah">
        <Container>
          <Row>
            <Col className="section-title">
              <h1>
                Profil Sekolah <br />
                SARAMI
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>
                Sehat <br />
                Aman <br />
                Ramah Anak <br />
                Menyenangkan <br />
                Islami
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProfilSekolahPage;
