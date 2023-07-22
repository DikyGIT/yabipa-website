import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import Hero1 from "../assets/homepage/hero/hero-1.jpg";
import Hero2 from "../assets/homepage/hero/hero-2.jpg";
import Hero3 from "../assets/homepage/hero/hero-3.jpg";
import Hero4 from "../assets/homepage/hero/hero-4.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import required modules
import { Pagination, EffectFade, Autoplay } from "swiper/modules";

import { Container, Row, Col } from "react-bootstrap";

import KBM1 from "../assets/homepage/gallery/kbm/galeri-1.jpg";
import KBM2 from "../assets/homepage/gallery/kbm/galeri-2.jpg";
import KBM3 from "../assets/homepage/gallery/kbm/galeri-3.jpg";
// import KBM4 from "../assets/homepage/gallery/kbm/galeri-4.jpg";
// import KBM5 from "../assets/homepage/gallery/kbm/galeri-5.jpg";

const HomePage = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  let navigate = useNavigate();

  return (
    <div className="homepage">
      <div className="hero">
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          pagination={true}
          modules={[Pagination, EffectFade, Autoplay]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide className="position-relative">
            <img src={Hero1} alt="unsplash.com" />
            <div className="position-absolute w-100 h-100 bg-black opacity-75"></div>
            <div className="hero-title">
              <Container>
                <h1>OUR TEAM</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum unde distinctio illo et, earum cumque autem consequuntur similique fugiat ab.</p>
              </Container>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Hero2} alt="unsplash.com" />
            <div className="position-absolute w-100 h-100 bg-black opacity-75"></div>
            <div className="hero-title">
              <Container>
                <h1>STOP BULLYING</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum unde distinctio illo et, earum cumque autem consequuntur similique fugiat ab.</p>
              </Container>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Hero3} alt="unsplash.com" />
            <div className="position-absolute w-100 h-100 bg-black opacity-75"></div>
            <div className="hero-title">
              <Container>
                <h1>UPGRADE SKILL</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum unde distinctio illo et, earum cumque autem consequuntur similique fugiat ab.</p>
              </Container>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Hero4} alt="unsplash.com" />
            <div className="position-absolute w-100 h-100 bg-black opacity-75"></div>
            <div className="hero-title">
              <Container>
                <h1>STAY HEALTHY</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum unde distinctio illo et, earum cumque autem consequuntur similique fugiat ab.</p>
              </Container>
            </div>
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>

      <section className="tentang-kami">
        <Container>
          <Row>
            <Col>
              <h1 className="section-title mb-3">Tentang Kami</h1>
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
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="text-center">
              <button className="btn btn-success btn-lg rounded-pill fs-5 px-4" onClick={() => navigate("/tentang")}>
                Detail Tentang Kami <i className="fa-solid fa-chevron-right"></i>{" "}
              </button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="galeri-kegiatan">
        <Container fluid>
          <Row>
            <Col className="text-center galeri-title">
              <h1 className="section-title m-0">Galeri Kegiatan</h1>
            </Col>
          </Row>
        </Container>
        <Container>
          <div className="mb-5">
            <Row style={{ marginTop: "100px" }}>
              <Col>
                <h1 className="section-title mb-4">KBM</h1>
              </Col>
            </Row>
            <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 row-gap-4">
              <Col>
                <img src={KBM1} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
              <Col>
                <img src={KBM2} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
              <Col>
                <img src={KBM3} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="text-center">
                <button className="btn btn-success btn-lg rounded-pill fs-5 px-4" onClick={() => navigate("/gallery-kbm")}>
                  Lihat Semua <i className="fa-solid fa-chevron-right"></i>{" "}
                </button>
              </Col>
            </Row>
          </div>
          <div className="mb-5">
            <Row style={{ marginTop: "100px" }}>
              <Col>
                <h1 className="section-title mb-4">Ekskul</h1>
              </Col>
            </Row>
            <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 row-gap-4">
              <Col>
                <img src={KBM1} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
              <Col>
                <img src={KBM2} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
              <Col>
                <img src={KBM3} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="text-center">
                <button className="btn btn-success btn-lg rounded-pill fs-5 px-4" onClick={() => navigate("/gallery-ekskul")}>
                  Lihat Semua <i className="fa-solid fa-chevron-right"></i>{" "}
                </button>
              </Col>
            </Row>
          </div>
          <div className="mb-5">
            <Row style={{ marginTop: "100px" }}>
              <Col>
                <h1 className="section-title mb-4">Lifeskill</h1>
              </Col>
            </Row>
            <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 row-gap-4">
              <Col>
                <img src={KBM1} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
              <Col>
                <img src={KBM2} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
              <Col>
                <img src={KBM3} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="text-center">
                <button className="btn btn-success btn-lg rounded-pill fs-5 px-4" onClick={() => navigate("/gallery-lifeskill")}>
                  Lihat Semua <i className="fa-solid fa-chevron-right"></i>{" "}
                </button>
              </Col>
            </Row>
          </div>
          <div className="mb-5">
            <Row style={{ marginTop: "100px" }}>
              <Col>
                <h1 className="section-title mb-4">Event</h1>
              </Col>
            </Row>
            <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 row-gap-4">
              <Col>
                <img src={KBM1} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
              <Col>
                <img src={KBM2} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
              <Col>
                <img src={KBM3} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="text-center">
                <button className="btn btn-success btn-lg rounded-pill fs-5 px-4" onClick={() => navigate("/gallery-event")}>
                  Lihat Semua <i className="fa-solid fa-chevron-right"></i>{" "}
                </button>
              </Col>
            </Row>
          </div>
          <div className="mb-5">
            <Row style={{ marginTop: "100px" }}>
              <Col>
                <h1 className="section-title mb-4">Graduation</h1>
              </Col>
            </Row>
            <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 row-gap-4">
              <Col>
                <img src={KBM1} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
              <Col>
                <img src={KBM2} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
              <Col>
                <img src={KBM3} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="text-center">
                <button className="btn btn-success btn-lg rounded-pill fs-5 px-4" onClick={() => navigate("/gallery-graduation")}>
                  Lihat Semua <i className="fa-solid fa-chevron-right"></i>{" "}
                </button>
              </Col>
            </Row>
          </div>
          <div className="mb-5">
            <Row style={{ marginTop: "100px" }}>
              <Col>
                <h1 className="section-title mb-4">Fieldtrip</h1>
              </Col>
            </Row>
            <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 row-gap-4">
              <Col>
                <img src={KBM1} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
              <Col>
                <img src={KBM2} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
              <Col>
                <img src={KBM3} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="text-center">
                <button className="btn btn-success btn-lg rounded-pill fs-5 px-4" onClick={() => navigate("/gallery-fieldtrip")}>
                  Lihat Semua <i className="fa-solid fa-chevron-right"></i>{" "}
                </button>
              </Col>
            </Row>
          </div>
          <div className="mb-5">
            <Row style={{ marginTop: "100px" }}>
              <Col>
                <h1 className="section-title mb-4">Munaqosyah</h1>
              </Col>
            </Row>
            <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 row-gap-4">
              <Col>
                <img src={KBM1} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
              <Col>
                <img src={KBM2} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
              <Col>
                <img src={KBM3} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="text-center">
                <button className="btn btn-success btn-lg rounded-pill fs-5 px-4" onClick={() => navigate("/gallery-munaqosyah")}>
                  Lihat Semua <i className="fa-solid fa-chevron-right"></i>{" "}
                </button>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
