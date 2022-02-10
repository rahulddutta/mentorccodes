import { Grid, makeStyles } from "@material-ui/core";
import Tutor from "../../images/codee.png";

const useStyles = makeStyles((theme) => ({
  first: {
    height: 450,
    backgroundColor: "#004bb3",
    [theme.breakpoints.down("xs")]: {
      height: 200,
    },
  },
  second: {
    height: 450,
    backgroundColor: "#004bb3",
    [theme.breakpoints.down("xs")]: {
      height: 320,
    },
  },
  img: {
    width: 600,
    objectFit: "cover",
    height: 450,
    [theme.breakpoints.down("xs")]: {
      height: 320,
      width: "100%",
    },
  },
  text: {
    fontSize: "70px",
    color: "white",
    marginTop: "100px",
    marginLeft: "50px",
    fontFamily: "Petemoss, cursive",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      marginTop: "0px",
      marginLeft: "0px",
    },
  },
  textSec: {
    fontSize: "50px",
    fontFamily: "Lobster, cursive;",
    marginTop: "-20px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
      marginTop: "-10px",
    },
  },
  para: {
    fontFamily: "Outfit, sans-serif",
    fontSize: "20px",
    marginTop: "20px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      padding: "5px",
    },
  },
}));

export default function Section10() {
  const classes = useStyles();
  return (
    <div className={classes.section10}>
      <Grid container>
        <Grid item xs={12} sm={6} className={classes.first}>
          <div className={classes.text}>
            <div className={classes.text0}>Our Teachers</div>
            <div className={classes.textSec}>a Mentor for everyone</div>
            <div className={classes.para}>
              You will learn from teachers who has industry relevant experience
              in tech and teaching.
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.second}>
          <div className={classes.photo}>
            <img className={classes.img} src={Tutor} alt="" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
