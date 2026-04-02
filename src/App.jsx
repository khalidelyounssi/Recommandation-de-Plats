import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Plates from "./pages/Plates";
import PlateDetail from "./pages/PlateDetail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plates" element={<Plates />} />
          <Route path="/plates/:id" element={<PlateDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;