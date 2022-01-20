import { Button, Grid, makeStyles } from "@material-ui/core";
import Teacher from "../../images/teacher.png";
import Test from "../../images/test.png";
import Doubt from "../../images/doubt.png";
import Laptop from "../../images/laptop.png";
import Certificate from "../../images/certification.png";
import Robo from "../../images/robo.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  first: {
    height: 600,
    [theme.breakpoints.down("sm")]: {
      height: 440,
    },
  },
  text: {
    color: "#030856",
    fontFamily: "Lobster, cursive;",
    fontSize: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "50px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "30px",
    },
  },
  span: {
    fontFamily: "Petemoss, cursive",
    fontSize: "60px",
    marginLeft: "10px",
  },
  second: {
    height: 600,
    [theme.breakpoints.down("sm")]: {
      height: 590,
    },
  },
  icon: {
    display: "flex",
    alignItems: "center",
    marginLeft: "90px",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "20px",
    },
  },
  iconImg: {
    height: 50,
    objectFit: "cover",
  },
  iconText: {
    marginLeft: "30px",
    fontFamily: "Raleway, sans-serif",
    color: "#414141",
  },
  card: {
    textAlign: "center",
    backgroundColor: "#ebf4ff",
    margin: "30px 20px ",
    height: 490,
    borderRadius: "20px",
    //  boxShadow: "5px 7px grey",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",

    [theme.breakpoints.down("sm")]: {
     
    },
  },
  cardPhoto: {
    height: 200,
  },
  cardImg: {
    height: 200,
    objectFit: "cover",
  },
  cardFirst: {
    marginTop: "10px",
    color: "#004bb3",
    fontSize: "20px",
    marginBottom: "9px",
    fontFamily: "Raleway, sans-serif",
  },
  cardSecond: {
    color: "#004bb3",
    fontSize: "13px",
    fontFamily: "Raleway, sans-serif",
  },
  dummyPrice: {
    textDecoration: "line-through",
    marginTop: "10px",
    color: "#004bb3",
    fontSize: "20px",
    marginBottom: "10px",
  },
  offer: {
    backgroundColor: "#fc9b00",
    color: "#004bb3",
    marginLeft: "240px",
    marginRight: "240px",
    marginBottom: "10px",
    fontSize: "14px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "100px",
      marginRight: "100px",
    },
  },
  price: {
    color: "#004bb3",
    fontSize: "26px",
    marginBottom: "10px",
  },
  details: {
    color: "#004bb3",
    fontSize: "14px",
    marginBottom: "10px",
  },
  curri: {
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px",
    fontFamily: "Lobster, cursive;",
    color: "#030856",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  spanCuri: {
    fontFamily: "Petemoss, cursive",
    fontSize: "50px",
    marginLeft: "10px",
  },
  bookLink: {
    textDecoration: "none",
    color: "inherit",
  },
}));

export default function Section14() {
  const classes = useStyles();
  return (
    <div className={classes.section14}>
      <Grid container>
        <Grid item sm={6} xs={12} className={classes.first}>
          <div className={classes.text}>
            Guidance<span className={classes.span}> at Mentor</span>
          </div>
          <div className={classes.icon}>
            <img className={classes.iconImg} src={Teacher} alt="" />{" "}
            <span className={classes.iconText}>Online Live classes</span>
          </div>
          <div className={classes.icon}>
            <img className={classes.iconImg} src={Doubt} alt="" />{" "}
            <span className={classes.iconText}>
              On demand doubt solving sessions
            </span>
          </div>{" "}
          <div className={classes.icon}>
            <img className={classes.iconImg} src={Laptop} alt="" />{" "}
            <span className={classes.iconText}>Open Learning Model</span>
          </div>{" "}
          <div className={classes.icon}>
            <img className={classes.iconImg} src={Test} alt="" />{" "}
            <span className={classes.iconText}>
              Hackathons and Brainstorming
            </span>
          </div>{" "}
          <div className={classes.icon}>
            <img className={classes.iconImg} src={Certificate} alt="" />{" "}
            <span className={classes.iconText}>Completion Certificate</span>
          </div>
        </Grid>
        <Grid item sm={6} xs={12} className={classes.second}>
          <div className={classes.curri}>
            Curriculum &<span className={classes.spanCuri}> Pricing</span>
          </div>
          <div className={classes.card}>
            <div className={classes.cardPhoto}>
              <img className={classes.cardImg} src={Robo} alt="" />
            </div>
            <div className={classes.cardFirst}>
              <b>Website/WebApp Developer</b>{" "}
            </div>
            <div className={classes.cardSecond}>
              HTML, Css, JavaScript, BootStrap,{" "}
            </div>
            <div className={classes.cardSecond}>
              Material Ui, React Js, Git{" "}
            </div>
            <div className={classes.dummyPrice}>
              <b> 53,999</b>
            </div>
            <div className={classes.offer}>
              <b>Introductory Offer (valid 02/02/2022)</b>{" "}
            </div>
            <div className={classes.price}>
              <b>24,999</b>{" "}
            </div>
            <div className={classes.details}>Full Course 6 months</div>
            <div className={classes.book}>
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
        </Grid>
      </Grid>
    </div>
  );
}
