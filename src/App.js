import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/main/Main";
import Booking from "./components/pages/book/Book";
import About from "./components/aboutus/About";
import Code from "./components/pages/Code/Code"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/code" element={<Code />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
