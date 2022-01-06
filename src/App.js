import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Main from "./components/pages/main/Main";
import Booking from "./components/pages/book/Book"

function App() {
  return (
    <BrowserRouter>
      <>
        <Topbar />
      </>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/booking" element={<Booking/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
