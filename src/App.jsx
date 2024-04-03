import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./components/Start";
import Picker from "./components/Picker";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter basename={`/hoodie-color-picker/`}>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/picker" element={<Picker />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;