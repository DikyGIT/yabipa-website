import { Container, Row, Col } from "react-bootstrap";

const ProfilSantriPage = () => {
  return (
    <div className="profil">
      <div className="profil-santri">
        <Container>
          <Row>
            <Col className="section-title">
              <h1>
                Profil Santri <br /> S2MB3
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <ol>
                <li>Santun Budi Bahasanya</li>
              </ol>
              <ul>
                <li>Santun</li>
                <li>Diplomasi</li>
                <li>Pendengar Yang Baik</li>
              </ul>
            </Col>
            <Col>
              <ol start={"2"}>
                <li>Sehat Jiwa Raganya</li>
              </ol>
              <ul>
                <li>Mengkonsumsi Halalan Thoyyiban</li>
                <li>Kebugaran</li>
                <li>Tangkas Medan</li>
                <li>Beladiri</li>
                <li>Kebersihan</li>
              </ul>
            </Col>
            <Col>
              <ol start={"3"}>
                <li>Mandiri Dalam Hidupnya</li>
              </ol>
              <ul>
                <li>TIdak Menyusahkan Orang Lain</li>
                <li>Fokus Dalam Tugas</li>
                <li>Memecehkan Masalah</li>
              </ul>
            </Col>
            <Col>
              <ol start={"4"}>
                <li>Bermanfaat Untuk Sesamanya</li>
              </ol>
              <ul>
                <li>Diri Sendiri</li>
                <li>Lingkungan</li>
                <li>Orang Lain</li>
              </ul>
            </Col>
            <Col>
              <ol start={"5"}>
                <li>Berbakti Kepada Rabbnya</li>
              </ol>
              <ul>
                <li>Agama</li>
                <li>Orang Tua</li>
                <li>Bangsa Dan Negara</li>
              </ul>
            </Col>
            <Col>
              <ol start={"6"}>
                <li>Berkarya Bagi Bangsanya</li>
              </ol>
              <ul>
                <li>Kemampuan Berfikir (Head)</li>
                <li>Kemampuan Bekerja (Hand) </li>
                <li>Kemampuan Mengelola Jiwa (Heart)</li>
                <li>Kemampuan Kalitas Diri (Health)</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProfilSantriPage;
