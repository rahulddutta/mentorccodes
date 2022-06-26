import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import Contact from "../../contact/Contact";
import Footer from "../../footer/Footer";
import Topbar from "../../topbar/Topbar";
import Home from "../Home/Home";
import Pricing from "../pricing/Pricing";
import Question from "../question/Question";
import Whycoding from "../whyCoding/Whycoding";
import WhyMentor from "../whyMentor/WhyMentor";
import Notifications from "../../../Notifications/Notifications";
import { OnMessageListener } from "../../../firebase/Firebase";
import ReactNotificationComponent from "../../../Notifications/ReactNotification";

const useStyles = makeStyles((theme) => ({}));

export default function Main({ user }) {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });

  console.log(show, notification);

  OnMessageListener()
    .then((payload) => {
      setShow(true);
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
      console.log(payload);
    })
    .catch((err) => console.log("failed: ", err));

  return (
    <div id="container" className={classes.main}>
      {show ? (
        <ReactNotificationComponent
          title={notification.title}
          body={notification.body}
        />
      ) : (
        <></>
      )}
      <Notifications />
      <Topbar user={user} />
      <Home />
      <Whycoding />
      <WhyMentor />
      <Pricing />
      <Question />
      <Contact />
      <Footer />
    </div>
  );
}
