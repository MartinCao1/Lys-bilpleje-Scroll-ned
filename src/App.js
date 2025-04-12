import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Booking from "./components/pages/home/Booking";
import FindOs from "./components/pages/home/FindOs";
import Anmeldelser from "./components/pages/home/Anmeldelser";
import Kontakt from "./components/pages/Kontakt";
import Mainframe from "./components/pages/home/Mainframe";
import Priser from "./components/pages/prices/Priser";
import Kundecases from "./components/pages/Kundecases";
import Teamet from "./components/pages/Teamet";
import HvadKunderSiger from "./components/pages/HvadKunderSiger";
import FAQ from "./components/pages/Faq";
import Omos from "./components/pages/Omos";
import Tilvalg from "./components/pages/Tilvalg"; // Korrekt import navn
import PoleringPriser from "./components/pages/Poleringpriser";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Nav from "./components/Layout/Nav";
import Footer from "./components/Layout/Footer";

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
          <Route path="/hvadkundersiger" element={<HvadKunderSiger />} />
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
