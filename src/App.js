import { BrowserRouter, Routes, Route } from "react-router-dom";
import MessengerCustomerChat from 'react-messenger-customer-chat';
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
      <MessengerCustomerChat
    pageId="109790721641423"
    appId=" 370066444957420"
  />,
    </BrowserRouter>
  );
}

export default App;
