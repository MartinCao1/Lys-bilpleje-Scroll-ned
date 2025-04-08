import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/sections/Home";
import Booking from "./components/sections/Booking";
import FindOs from "./components/sections/FindOs";
import Kontakt from "./components/sections/Kontakt";
import Mainframe from "./components/sections/Mainframe";
import Priser from "./components/sections/Priser";
import Kundecases from "./components/sections/Kundecases";
import Teamet from "./components/sections/Teamet";

import Nav from "./components/UI/Nav";
import Footer from "./components/UI/Footer";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/findos" element={<FindOs />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/teamet" element={<Teamet />} />
          <Route path="/mainframe" element={<Mainframe />} />
          <Route path="/priser" element={<Priser />} />
          <Route path="/kundecases" element={<Kundecases />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
