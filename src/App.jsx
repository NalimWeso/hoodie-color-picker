import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Picker from "./Picker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="header" element={<Header />} />
        <Route path="picker" element={<Picker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;