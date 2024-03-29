import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./Start";
import Picker from "./Picker";
import Footer from "./Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="start" element={<Start />} />
          <Route path="picker" element={<Picker />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;