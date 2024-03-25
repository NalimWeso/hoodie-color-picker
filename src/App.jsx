import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Picker from "./Picker";
import Footer from "./Footer";

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="header" element={<Header />} />
        <Route path="picker" element={<Picker />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
  );
}

export default App;