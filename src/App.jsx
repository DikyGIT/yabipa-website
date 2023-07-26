// import React from "react";
import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
// let HomePage = React.lazy(() => import("./pages/HomePage"));
// let TentangPage = React.lazy(() => import("./pages/profil/TentangPage"));
import TentangPage from "./pages/profil/TentangPage";
// import SejarahPage from "./pages/profil/SejarahPage";
// import VisiMisiPage from "./pages/profil/VisiMisiPage";
// import ProfilSantri from "./pages/profil/ProfilSantriPage";
// import ProfilGuru from "./pages/profil/ProfilGuruPage";
// import ProfilSekolah from "./pages/profil/ProfilSekolahPage";
// import EkskulPage from "./pages/gallery/EkskulPage";
// import EventPage from "./pages/gallery/EventPage";
// import FieldTripPage from "./pages/gallery/FieldTripPage";
// import GraduationPage from "./pages/gallery/GraduationPage";
// import KBMPage from "./pages/gallery/KBMPage";
// import LifeSkillPage from "./pages/gallery/LifeSkillPage";
// import MunaqosyahPage from "./pages/gallery/MunaqosyahPage";
import PPDBPage from "./pages/PPDB/PPDBPage";

function App() {
  return (
    <>
      {/* Navbar */}
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/tentang" Component={TentangPage} />
        {/* <Route path="/sejarah" Component={SejarahPage} />
        <Route path="/visi-misi" Component={VisiMisiPage} />
        <Route path="/profil-santri" Component={ProfilSantri} />
        <Route path="/profil-guru" Component={ProfilGuru} />
        <Route path="/profil-sekolah" Component={ProfilSekolah} />
        <Route path="/gallery-kbm" Component={KBMPage} />
        <Route path="/gallery-ekskul" Component={EkskulPage} />
        <Route path="/gallery-lifeskill" Component={LifeSkillPage} />
        <Route path="/gallery-event" Component={EventPage} />
        <Route path="/gallery-graduation" Component={GraduationPage} />
        <Route path="/gallery-fieldtrip" Component={FieldTripPage} />
        <Route path="/gallery-munaqosyah" Component={MunaqosyahPage} /> */}
        <Route path="/ppdb" Component={PPDBPage} />
      </Routes>

      {/* Footer */}
      <FooterComponent />
    </>
  );
}

export default App;
