import { makeStyles, Grid } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import "./Login.css";
import Quote from "../../../images/quote.png";
import Poet from "../../../images/poet.webp";
import Google from "../../../images/google.png"
import Github from "../../../images/github.png"
import Facebook from "../../../images/facebook.png"
import {firebase} from "../../../firebase/Firebase"
import "firebase/compat/auth";


const useStyles = makeStyles((theme) => ({
  login: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    height: "100%",
    width: "100%",
  },
  pad: {
    paddingLeft:"120px",
    paddingTop:"50px",
   
  },
  choose : {
    fontFamily: "Lato, sans-serif",
    fontSize:"14px",
    color:"#c1c0c6",
    fontWeight:"400"
  },
  welcome: {
    marginTop:"60px",
    fontFamily: "'Poppins', sans-serif",
    fontSize:"30px",
    fontWeight:"600"
  }, 
  remember: {
    width:"400px",
    fontFamily: "Lato, sans-serif",
    fontSize:"14px",
    color:"#c1c0c6",
    fontWeight:"400",
    marginBottom:"40px"
  },
  google: {
    cursor:"pointer",
    width:"350px",
    marginTop:"30px",
    height:"50px",
    borderRadius:"20px",
    display:"flex",
    alignItems:"center",
    marginBottom:"0px"

  },
  googleImg: {
    width:"30px",
    height:"30px",
    paddingLeft:"40px",
    paddingRight:"40px"
  }
}));

const Login = () => {
  const classes = useStyles();
  const GoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const FacebookSignIn = () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider()
    firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then((res) => {
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const GithubSignIn = () => {
    const githubProvider = new firebase.auth.GithubAuthProvider()
    firebase
      .auth()
      .signInWithPopup(githubProvider)
      .then((res) => {
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.login}>
      <div className="block">
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div className={classes.box}>
              <div className={classes.pad}>
                <div className={classes.choose}>Login through one of the following methods</div>
                <div className={classes.welcome}>Welcome to Mentor Codes</div>
                <div className={classes.remember}>Please remember the singin method as only one email is authorized per account</div>
                <div className={classes.method}>
                  <Box boxShadow={5} className={classes.google} onClick={GoogleSignIn}>
                    <img className={classes.googleImg} src={Google} alt="" />
                    <div>Sign in with Google</div>
                  </Box>
                  <Box boxShadow={5} className={classes.google} onClick={GithubSignIn}>
                    <img className={classes.googleImg} src={Github} alt="" />
                    <div>Sign in with Github</div>
                  </Box>   <Box boxShadow={5} className={classes.google} onClick={FacebookSignIn}>
                    <img className={classes.googleImg} src={Facebook} alt="" />
                    <div>Sign in with Facebook</div>
                  </Box>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} className="second">
            <div className="quotation">
              <img src={Quote} alt="" className="quote-img" />
            </div>
            <div className="design">
              <div className="line"></div>
              <div className="text">Make a</div>
              <div className="text2">Dream .</div>
              <div className="line2"></div>
              <div className="say">
                {" "}
                “Hold fast to dreams, for if dreams die, life is a broken-winged
                bird that cannot fly.”{" "}
              </div>
              <div className="info">
                <img className="poetImg" src={Poet} alt="" />
                <div className="name">Langston Hughes</div>
                <div className="about">Poet, novelist and playwright</div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Login;
