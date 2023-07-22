import { Container, Row, Col } from "react-bootstrap";

const TentangPage = () => {
  return (
    <div className="profil">
      <div className="tentang-kami">
        <Container>
          <Row>
            <Col className="section-title">
              <h1>Tentang Kami</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="lh-lg" style={{ textAlign: "justify" }}>
                Kemajuan sains dan teknologi di zaman ini menimbulkan konsekwensi yang berdampak negatif, yaitu berupa kemerosotan nilai-nilai moral. Konsep-konsep kebebasan dan pengagungan akal materialisme (intelegent quotiont) telah
                menjebak manusia itu sendiri pada kebuntuan dan kekosongan akan nilai, pola fikir menjadi liar dan nilai-nilai budaya adiluhung semakin merosot.
              </p>
              <p className="lh-lg" style={{ textAlign: "justify" }}>
                Kini mulai disadari, konsep pendidikan yang digunakan ternyata salah arah dan para pendidik mulai menggali konsep-konsep pendidikan baru dengan penekanan pada emosional, lalu spriritual dan entah apalagi. Hal ini terjadi
                karena tidak adanya visi dan misi pendidikan yang membawa manusia ke arah kaidah-kaidah yang mutlaq/hakiki, dan terealisasikan dalam proses pembelajaran di lingkungannya, khususnya lingkungan akademiknya.
              </p>
              <p className="lh-lg" style={{ textAlign: "justify" }}>
                Sebagai upaya partisipatif dalam rangka menghadapi keterpurukan pendidikan, maka Yayasan Bina Insan Paripurna sedang membangun Pondok Pesantren Qur-an Yabipa yang terintegrasi dengan SMP IT (Islam Terpadu) di Bandung.
              </p>
              <p className="lh-lg" style={{ textAlign: "justify" }}>
                Kami berupaya mengantarkan para santriwan/wati menuju sosok muslim yang paripurna (kaffah), bangga menjadi anak sholeh, yang siap bejuang dengan memiliki kemauan dan kemampuan bersaing. Disini proses pembelajaran yang
                terkondisikan dalam 24 jam sehari diharapkan dapat menjadi alternatif acuan konsep pendidikan dan menjadi solusi bagi upaya mewujudkan generasi unggul dimasa mendatang.
              </p>
              <p className="lh-lg" style={{ textAlign: "justify" }}>
                Walaupun bukan segala-galanya, daya dukung sarana dan prasarana pendidikan merupakan faktor yang cukup penting dalam proses pembelajaran tersebut. Generasi paripurna yang unggul dimasa yang akan datang adalah harapan kita
                bersama, waja’alna lil muttaqiina imaama. Upaya mewujudkannya adalah berpulang kepada kita. Semoga Alloh SWT senantiasa memberikan tolong dan karunia-Nya kepada kita, Aamiin.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TentangPage;
