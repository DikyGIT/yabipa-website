import { Container, Row, Col } from "react-bootstrap";

const VisiMisiPage = () => {
  return (
    <div className="profil">
      <div className="visi-misi">
        <Container>
          <Row>
            <Col className="section-title">
              <h1>Visi & Misi</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>Visi</h1>
              <p>Membangun Lembaga Pendidikan Islam Terpadu Yang Terpercaya Dengan Mengusung Kearifan Lokal.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>Misi</h1>
              <p>
                <ol>
                  <li>Mendidik Para Siswa yang Berkarakter Islami.</li>
                  <li>Menyelenggarakan Pendidikan Pondok Pesantren Dengan Fasilitas terbaik (The Best Boarding School).</li>
                  <li>Menyelenggarakan Pendidikan Nasional (SMP/SMA/SMK) Terbaik.</li>
                  <li>Menyelenggarakan Klinik Usaha Sebagai Sarana Pelatihan Bagi Para Siswa.</li>
                </ol>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default VisiMisiPage;
