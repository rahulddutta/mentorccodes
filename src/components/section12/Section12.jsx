import { Grid, makeStyles } from "@material-ui/core";
import Peda from "../../images/pedaa.png";

const useStyles = makeStyles((theme) => ({
  first: {
    height: 530,
    backgroundColor: "#004bb3",
    [theme.breakpoints.down("xs")]: {
      height: 330,
    },
  },
  second: {
    height: 530,
    width:"100%",
    backgroundColor: "#004bb3",
    [theme.breakpoints.down("xs")]: {
      height: 330,
    },
  },
  img: {
    width: 550,
    objectFit: "cover",
    height:500,
    padding:"0px",
    [theme.breakpoints.down("xs")]: {
    height:330,
    width:"100%",
    },
  },
  text: {
    marginTop: "90px",
    marginLeft: "70px",
    fontSize: "90px",
    color: "white",
    fontFamily: "Petemoss, cursive",
    [theme.breakpoints.down("xs")]: {
      marginTop: "0px",
      marginLeft: "0px",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      fontSize: "60px",
    },
  },
  textSec: {
    fontSize: "50px",
    fontFamily: "Lobster, cursive;",
    marginTop: "-15px",
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
      fontSize:"16px",
      padding:"2px"
    },
  },
}));

export default function Section11() {
  const classes = useStyles();
  return (
    <div className={classes.section11}>
      <Grid container>
        <Grid item xs={12} sm={6} className={classes.first}>
          <div className={classes.text}>
            <div className={classes.text0}>Project based</div>
            <div className={classes.textSec}>learning pedagogy</div>
            <div className={classes.para}>
              Our pedagogy includes teaching students with project based
              approach. We will organize <b>Hackathons</b> from time to time and
              the students can compete in those once their course is done. Once
              done with the course we will guide the students in their career
              building phase and help them to get internships. We will teach the students to maintain their online presence with contribution towards <b>Open Source</b>.
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.second}>
          <div className={classes.photo}>
            <img className={classes.img} src={Peda} alt="" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
