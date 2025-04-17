import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Booking from "./components/pages/home/Booking";
import FindOs from "./components/Layout/footer/FindOs";
import Anmeldelser from "./components/pages/home/Anmeldelser";
import Kontakt from "./components/pages/contact/Kontakt";
import Mainframe from "./components/pages/home/Mainframe";
import Priser from "./components/pages/prices/Priser";
import Kundecases from "./components/pages/cases/Kundecases";
import Teamet from "./components/pages/teamet/Teamet";
import FAQ from "./components/Layout/footer/FAQ";
import Omos from "./components/Layout/footer/Omos";
import Tilvalg from "./components/pages/prices/Tilvalg"; // Korrekt import navn
import PoleringPriser from "./components/pages/prices/Poleringpriser";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Nav from "./components/Layout/header/Nav";
import Footer from "./components/Layout/footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/findos" element={<FindOs />} />
          <Route path="/anmeldelser" element={<Anmeldelser />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/teamet" element={<Teamet />} />
          <Route path="/mainframe" element={<Mainframe />} />
          <Route path="/priser" element={<Priser />} />
          <Route path="/kundecases" element={<Kundecases />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/omos" element={<Omos />} />
          {/* Korrekt rute navn */}
          <Route path="/tilvalg/:pakkenavn" element={<Tilvalg />} />
          <Route path="/poleringpriser" element={<PoleringPriser />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
