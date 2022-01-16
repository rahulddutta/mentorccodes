import { Button, Grid, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import Kid from "../../../images/vr.png";

const useStyles = makeStyles((theme) => ({
  section1: {
    marginTop: "60px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "0px",
    },
  },
  first: {
    backgroundColor: "#edf1fa",
    height: 600,
    paddingTop:"53px",
    [theme.breakpoints.down("xs")]: {
      height: 210,
      paddingTop:"0px"
    },
  },
  text: {
    color: "#030856",
    fontSize: "60px",
    marginTop: "100px",
    marginLeft: "100px",
    fontFamily: "Lobster, cursive;",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      marginTop: "53px",
      marginLeft: "0px",
      fontSize: "30px",
      display:"flex",
      alignItems:"center"
    },
  },
  second: {
    backgroundColor: "#edf1fa",
    height: 600,
    paddingTop:"0px",
    paddingLeft:"60px",
    [theme.breakpoints.down("xs")]: {
      height: 450,
      paddingTop:"0px",
      paddingLeft:"0px"
    },
  },
  img: {
    height: 700,
    width: "500px",
    objectFit: "cover",
    [theme.breakpoints.down("xs")]: {
      height: 500,
      width:"100%",
      objectFit:"cover"
    },
  },
  thirdSpan: {
    fontFamily: "Lobster, cursive;",
    fontSize: "60px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
    },
  },
  text3: {
    fontFamily: "Petemoss, cursive",
    fontSize: "80px",
    lineHeight: "60px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "50px",
      lineHeight: "40px",
    },
  },
  textSecond: {
    fontSize: "20px",
    marginLeft: "100px",
    color: "#030856",
    fontFamily: "Roboto Slab, serif",
    marginTop: "30px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0px",
      fontSize: "15px",
      textAlign:"center"
    },
  },
  border: {
    borderLeft: "3px solid red",
    borderRight: "3px solid red",
    paddingLeft: "5px",
    paddingRight: "5px",
  },
  button: {
    marginLeft: "100px",
    marginTop: "60px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  bookLink: {
    textDecoration:"none",
    color:"inherit"
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.section1} id="home" >
      <Grid container>
        <Grid item sm={6} xs={12} className={classes.first}>
          <div className={classes.text}>
            <div>Live coding classes for</div>
            {/* <div>classes for</div> */}
            <div className={classes.text3}>
              Automating{" "}
              <span className={classes.thirdSpan}>repetetive task</span>{" "}
            </div>
          </div>
          <div className={classes.textSecond}>
            <div> Learn from the best teachers </div>
            <div className={classes.learn}>
              {" "}
              Computer <span className={classes.border}>
                Coding
              </span> Reasoning{" "}
            </div>
          </div>
          <div className={classes.button}>
            <Button variant="outlined" color="primary">
            <Link to="/booking" className={classes.bookLink}>
                  Book a Free Class
                </Link>
            </Button>
          </div>
        </Grid>
        <Grid item sm={6} xs={12} className={classes.second}>
          <div className={classes.image}>
            <img className={classes.img} src={Kid} alt="" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
