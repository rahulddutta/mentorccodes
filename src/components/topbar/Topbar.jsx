import { AppBar, Button, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { HashLink as Lin } from "react-router-hash-link";
import "../topbar/topbar.css";
import { firebase } from "../../firebase/Firebase";
import "firebase/compat/auth";


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
    // borderBottom: "1px solid red",
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
  bookLink: {
    textDecoration: "none",
    color: "inherit",
  },
  info : {
    display:"flex",
    color:"black",
    width:"200px",
    height:"40px",
    alignItems:"center",
    justifyContent:"space-around"
  },
  avatar : {
    height:"40px",
    width:"40px",
    borderRadius:"50%",
    objectFit:"cover"
  },
  avatarName : {
    color: "#614665",
    marginRight: "20px",
    fontFamily: "Roboto Slab, serif",

  }
}));

export default function Topbar({ user }) {
  const classes = useStyles();
  const SignOut = () => {
    firebase.auth().signOut();
  };
  return (
    <div>
      <AppBar elevation={0} className={classes.topbar}>
        <Toolbar>
          <div className={classes.items}>
            <div className={classes.title}>Mentor</div>
            <div className={classes.menuItems}>
              <div className={classes.listHome}>
                <NavHashLink smooth to="#home" className="link">
                  Home
                </NavHashLink>
              </div>
              <div className={classes.list}>
                <Lin smooth to="#code" className="link">
                  Why Coding
                </Lin>
              </div>
              <div className={classes.list}>
                <Lin smooth to="#mentor" className="link">
                  Why Mentor
                </Lin>
              </div>
              <div className={classes.list}>
                <Lin smooth to="#price" className="link">
                  Pricing
                </Lin>
              </div>
              <div className={classes.list}>
                <Lin smooth to="#question" className="link">
                  FAQ
                </Lin>
              </div>
              <div className={classes.list}>
                <div>
                  <Link to="/code" className="link">
                    Write Code
                  </Link>
                </div>
              </div>
              <div className={classes.list}>
                <div>
                  <Link to="/videocall" className="link">
                    Join Live Class
                  </Link>
                </div>
              </div>
              <div className={classes.list}>
                {user ? (
                  <div className="link" onClick={SignOut}>Logout</div>
                ) : (
                  <div>
                    <Link to="/login" className="link">
                      Login
                    </Link>
                  </div>
                )}
              </div>
            </div>
            {user ? (
              <div className={classes.info}>
                <div>
                  <img className={classes.avatar} src={user.photoURL} alt="" />
                </div>
                <div className={classes.avatarName}>{user.displayName}</div>
              </div>
            ) : (
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
            )}
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
