import { makeStyles, Grid } from "@material-ui/core";
import Robot from "../../images/robot2.png";
import World from "../../images/world.png";
import Linked from "../../images/linkedin.png";
import Robot2 from "../../images/robot2.png";
import "./section3.css";

const useStyles = makeStyles((theme) => ({
  first: {
    height: 700,
    backgroundColor: "#d7e4f4",
    [theme.breakpoints.down("xs")]: {
      display:"none"
    },
  },
  mobileFirst: {
    height: 460,
    backgroundColor: "#d7e4f4",
    [theme.breakpoints.up("sm")]: {
     display:"none"
    },
  },
  photo:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    padding:"10px"
  },
  Mobileimg:{
    width:"100%",
    objectFit:"cover"
  },
  second: {
    height: 700,
    backgroundColor: "#d7e4f4",
    [theme.breakpoints.down("xs")]: {
      height: 640,
    },
  },
  img: {
    width: "100%",
    objectFit: "cover",
  },
  heading: {
    fontFamily: "Petemoss, cursive",
    fontSize: "90px",
    marginLeft: "50px",
    marginTop: "40px",
    color: "#030856",
    [theme.breakpoints.down("xs")]: {
      fontSize: "50px",
      marginTop: "0px",
      marginLeft: "0px",
      display: "flex",
      justifyContent: "center",
    },
  },
  below: {
    marginLeft: "50px",
    marginTop: "-20px",
    fontSize: "55px",
    fontFamily: "Lobster, cursive;",
    color: "#030856",
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
      marginTop: "-8px",
      marginLeft: "0px",
      display: "flex",
      justifyContent: "center",
    },
  },
  logoImg: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
    },
  },
  logo: {
    marginLeft: "60px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0px",
    },
  },
  para: {
    marginTop: "20px",
    marginLeft: "50px",
    color: "#5d515e",
    fontSize: "20px",
    padding: "2px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "10px",
      fontSize: "16px",
    },
  },
  para2: {
    margin: "20px 0px 20px 0px",
  },
  link: {
    marginTop: "20px",
  },
  mainLink: {
    textDecoration: "none",
    color: "#030856",
    borderBottom: "1px solid red",
  },
}));

export default function Section3() {
  const classes = useStyles();
  return (
    <div className={classes.Section3}>
      <Grid container>
        <Grid item sm={6} xs={12} className={classes.first}>
          <div className="photo">
            <img className={classes.img} src={Robot} alt="" />
          </div>
        </Grid>
        <Grid item  xs={12} className={classes.mobileFirst}>
          <div className={classes.photo}>
            <img className={classes.Mobileimg} src={Robot2} alt="" />
          </div>
        </Grid>
        <Grid item sm={6} xs={12} className={classes.second}>
          <div className={classes.heading}>Buckle up</div>
          <div className={classes.below}>and leap into the future</div>
          <div className={classes.logoImg}>
            <div>
              <img src={World} alt="" />
            </div>
            <div>
              <img className={classes.logo} src={Linked} alt="" />
            </div>
          </div>
          <div className={classes.para}>
            <div className={classes.para1}>
              The world is changing at such a fast pace that the high paying
              jobs of today did not even exist five years ago - and it’s hard to
              predict what kind of jobs we will be doing in another five years’
              time.
            </div>
            <div className={classes.para2}>
              The reason for this big change? Software.
            </div>
            <div className={classes.para3}>
              How can we furnish kids with the necessary skills for the future?
              Many would argue that computing is already taught in schools. But
              computer science textbooks in Indian schools teach topics related
              to the history of computer science, hardware and operating
              systems, or some basic html. This knowledge is obsolete and has
              little relevance to contemporary technologies. How many Indian
              students leave their high school with a mastery of at least one of
              the major programming languages, or at the very least a
              familiarity with coding?
            </div>
            <div className={classes.link}>
              <a
                className={classes.mainLink}
                href="https://www.weforum.org/agenda/2017/10/india-coding-children-opportunity/"
                target="_blank"
                rel="noreferrer"
              >
                Read More
              </a>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
