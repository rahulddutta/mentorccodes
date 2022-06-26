import { Grid, makeStyles } from "@material-ui/core";
import Man from "../../images/man.png";


const useStyles = makeStyles((theme) => ({
  first: {
    height: 520,
    backgroundColor: "#004bb3",
    [theme.breakpoints.down("xs")]: {
      height: 270,
    },
  },
  second: {
    height: 520,
    backgroundColor: "#004bb3",
    [theme.breakpoints.down("xs")]: {
      height: 320,
    },
  },
  img: {
    width: 600,
    height:520,
    objectFit: "cover",
    alignItems:"center",
    [theme.breakpoints.down("xs")]: {
      height:320,
      width:"100%"
    },
  },
  text: {
    marginTop: "100px",
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
      padding:"5px"
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
            <div className={classes.text0}>Our Community</div>
            <div className={classes.textSec}>
              grow your experience along with our Community
            </div>
            <div className={classes.para}>
              Join in with our growing community. Take guidance from your
              seniors. Take part in <b>Hackathons</b> and above all learn and
              relearn.
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.second}>
          <div className={classes.photo}>
            <img className={classes.img} src={Man} alt="" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
