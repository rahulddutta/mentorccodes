import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Loader from "./components/loader/Loader";
import Main from "./components/pages/main/Main";
import Booking from "./components/pages/book/Book";
import About from "./components/aboutus/About";
import Code from "./components/pages/Code/Code";
import { useEffect, useState } from "react";
import Login from "./components/pages/login/Login";
import { firebase } from "./firebase/Firebase";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import VideoCall from "./components/pages/videoCall/VideoCall"

const auth = firebase.auth();


function App() {
  const [isloading, setIsLoading] = useState(true);
  //const [user,setUser] = useState(true)
  const [user] = useAuthState(auth);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  });

  return (
    <>
      {isloading === true ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main user={user} />}></Route>
            <Route path="/booking" element={<Booking />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route
              path="/code"
              element={user ? <Code /> : <Navigate to="/login" />}
            ></Route>
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <Login />}
            ></Route>
            <Route path="/videocall" element={user ? <VideoCall/> : <Navigate to="/login" />}></Route>
          </Routes>
          <MessengerCustomerChat
            pageId="109790721641423"
            appId=" 370066444957420"
          />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
