import { Container, Row, Col } from "react-bootstrap";

import Logo from "../assets/logo/logo.png";

const FooterComponent = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="d-flex justify-content-between flex-lg-row flex-column-reverse row-gap-5">
          <Col lg="6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0407895094822!2d107.67346477388699!3d-6.885717767376082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68dd7eac23e9ad%3A0xa42405666943714a!2sPondok%20Pesantren%20Tahfidzul%20Quran%20%26%20SMP%20Yabipa!5e0!3m2!1sid!2sid!4v1689745928660!5m2!1sid!2sid"
              width="100%"
              height="300"
              style={{ border: "0", boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          <Col lg="6">
            <div className="d-flex align-items-center mb-3">
              <img alt="" src={Logo} width="60" height="60" className="logo-img d-inline-block align-top me-2" />
              <div className="d-flex flex-column">
                <p className="logo-text m-0 fw-bold lh-sm">PONPES QURAN YABIPA</p>
                <p className="logo-text m-0 fw-bold lh-sm">SMP IT YABIPA</p>
              </div>
            </div>
            <p className="lh-lg" style={{ fontSize: "14px", textAlign: "justify" }}>
              Yabipa Boarding School adalah Sekolah yang berupaya mengantarkan para santriwan/wati menuju sosok muslim yang paripurna (kaffah), bangga menjadi anak sholeh, yang siap bejuang dengan memiliki kemauan dan kemampuan bersaing.
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "100px" }}>
          <Col>
            <p className="px-md-0 px-3 text-sm-start text-center">
              &copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">Team IT YABIPA</span>, All Right Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
