import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "../topbar/topbar.css";
import { firebase } from "../../firebase/Firebase";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";

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
    justifyContent: "space-between",
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
    textDecoration:"none",
    cursor:"pointer"
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
  info: {
    display: "flex",
    color: "black",
    width: "250px",
    height: "40px",
    alignItems: "center",
    justifyContent: "space-around",
  },
  avatar: {
    height: "40px",
    width: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  avatarName: {
    color: "#614665",
    marginRight: "20px",
    fontFamily: "Roboto Slab, serif",
  },
}));

const auth = firebase.auth();

const VideoNav = () => {
  const classes = useStyles();
  const SignOut = () => {
    firebase.auth().signOut();
  };

  const [user] = useAuthState(auth);
  return (
    <div className={classes.navbar}>
      <AppBar elevation={0} className={classes.topbar}>
        <Toolbar>
          <div className={classes.items}>
            <div>
            <Link to="/" className={classes.title}>
                    Mentor
                  </Link>
            </div>
            <div>
              <div className={classes.info}>
                <div>
                  <img className={classes.avatar} src={user.photoURL} alt="" />
                </div>
                <div className={classes.avatarName}>{user.displayName}</div>
                {user ? (
                  <div className="link" onClick={SignOut}>
                    Logout
                  </div>
                ) : (
                  <div>
                    <Link to="/login" className="link">
                      Login
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default VideoNav;
