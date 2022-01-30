import { AppBar, Button, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { HashLink as Lin } from "react-router-hash-link";
import "../topbar/topbar.css";


const useStyles = makeStyles((theme) => ({
  topbar: {
    backgroundColor: "#edf1fa",
    [theme.breakpoints.down("xs")]: {
      position: "static",
    },
  },
  items: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
  },
  menuItems: {
    display: "flex",
    color: "#161962",
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  listHome: {
    marginRight: "20px",
    fontFamily: "Roboto Slab, serif",
    borderBottom: "1px solid red",
  },
  list: {
    marginRight: "20px",
    fontFamily: "Roboto Slab, serif",
    color: "#614665",
  },
  title: {
    fontSize: "45px",
    fontFamily: "Praise, cursive",
    color: "#024ab3",
  },
  btn: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  button: {
    color: "#161962",
    backgroundColor: "#fff",
    fontFamily: "'Oswald', sans-serif",
    padding: "5px 25px 5px 25px",
  },
  section1: {
    marginTop: "60px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "0px",
    },
  },
  appBar: {
    top: "auto",
    bottom: 0,
    backgroundColor: "#edf1fa",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mobileButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  link: {
    textDecoration: "none",
    color: "#614665",
  },
  bookLink: {
    textDecoration:"none",
    color:"inherit"
  }
}));

export default function Topbar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar elevation={0} className={classes.topbar}>
        <Toolbar>
          <div className={classes.items}>
            <div className={classes.title}>Mentor</div>
            <div className={classes.menuItems}>
              <div className={classes.listHome}>
                <Link to="/" className={classes.link}>
                  Home
                </Link>
              </div>
              <div className={classes.list}>
                <Lin className={classes.link} smooth to="#code">
                  Why Coding
                </Lin>
              </div>
              <div className={classes.list}>
                <Lin className={classes.link} smooth to="#mentor">
                  Why Mentor
                </Lin>
              </div>
              <div className={classes.list}>
                <Lin className={classes.link} smooth to="#price">
                  Pricing
                </Lin>
              </div>
              <div className={classes.list}>
                <Lin className={classes.link} smooth to="#question">
                  FAQ
                </Lin>
              </div>
              <div className={classes.list}>
                <div>
                <Link to="/code" className={classes.bookLink}>
                  Write Code
                </Link>
                </div>
              </div>
            </div>
            <div className={classes.btn}>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                <Link to="/booking" className={classes.bookLink}>
                  Book a Free Class
                </Link>
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div className={classes.mobileButton}>
            <Button variant="outlined" color="primary">
            <Link to="/booking" className={classes.bookLink}>
                  Book a Free Class
                </Link>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
