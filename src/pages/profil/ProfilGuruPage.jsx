import { Container, Row, Col } from "react-bootstrap";

const ProfilGuruPage = () => {
  return (
    <div className="profil">
      <div className="profil-guru">
        <Container>
          <Row>
            <Col className="section-title">
              <h1>
                Profil Guru <br /> ISTIMEWA
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <span className="fw-bold">I</span>mannya Teguh (Ikhlas Mendidik)
              </p>
              <p>
                <span className="fw-bold">S</span>ehat Jiwa Raganya
              </p>
              <p>
                <span className="fw-bold">T</span>erampil Dalam Mendidik
              </p>
              <p>
                <span className="fw-bold">I</span>lmunya Faqih
              </p>
              <p>
                <span className="fw-bold">M</span>emberi Teladan Utama
              </p>
              <p>
                <span className="fw-bold">E</span>tos Kerjanya Tinggi
              </p>
              <p>
                <span className="fw-bold">W</span>aktunya Untuk Berkarya
              </p>
              <p>
                <span className="fw-bold">A</span>malnya Kontinyu
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProfilGuruPage;
