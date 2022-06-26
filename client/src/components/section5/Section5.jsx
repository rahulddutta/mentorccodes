import { Grid, makeStyles } from "@material-ui/core";
import Comp from "../../images/comp.webp";

const useStyles = makeStyles((theme) => ({
  first: {
    height: 400,
    backgroundColor: "#d7e4f4",
    [theme.breakpoints.down("xs")]: {
      height: 250,
    },
  },
  second: {
    height: 400,
    backgroundColor: "#d7e4f4",
    [theme.breakpoints.down("xs")]: {
      height: 250,
    },
  },
  photo: {
    height:400,
    [theme.breakpoints.down("xs")]: {
    height: 250,
    },
  },
  img: {
    height: 400,
    width: "100%",
    objectFit: "cover",
    [theme.breakpoints.down("xs")]: {
      height: 250,
    },
  },
  head: {
    paddingTop: "50px",
    paddingLeft: "50px",
    fontFamily: "Petemoss, cursive",
    fontSize: "90px",
    color: "#030856",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "0px",
      display: "flex",
      paddingLeft: "0px",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "50px",
    },
  },
  span: {
    fontFamily: "Lobster, cursive;",
    fontSize: "40px",
    [theme.breakpoints.down("xs")]: {
      marginLeft:"10px",
      fontSize:"25px"
    },
  },
  para: {
    marginTop: "20px",
    marginLeft: "50px",
    color: "#5d515e",
    fontSize: "20px",
    padding: "2px",
    [theme.breakpoints.down("xs")]: {
      marginLeft:"10px",
      fontSize: "16px",
    },
  },
  para2: {
    marginTop: "10px",
  },
}));

export default function Section5() {
  const classes = useStyles();
  return (
    <div className={classes.Section5}>
      <Grid container>
        <Grid item xs={12} sm={6} className={classes.first}>
          <div className={classes.photo}>
            <img className={classes.img} src={Comp} alt="" />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.second}>
          <div className={classes.text}>
            <div className={classes.head}>
              Learning <span className={classes.span}>by Building</span>
            </div>
            <div className={classes.para}>
              <div className={classes.para1}>
                Learning to code without making real life projects is just
                learning in a obsolete manner.
              </div>
              <div className={classes.para2}>
                We make you learn about <b>API</b> and how to interact with them
                using the Frontend. We will make Ui using Industry relevent
                design. Practice and consistency is the key for becoming a good
                developer.
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
