import { Grid, makeStyles } from "@material-ui/core";
import Logic from "../../images/logic.webp";

const useStyles = makeStyles((theme) => ({
  first: {
    height: 500,
    backgroundColor: "#d7e4f4",
    [theme.breakpoints.down("xs")]: {
      height: 290,
    },
  },
  second: {
    height: 500,
    backgroundColor: "#d7e4f4",
    [theme.breakpoints.down("xs")]: {
      height: 250,
    },
  },
  photo: {
    height: 500,
    [theme.breakpoints.down("xs")]: {
      height: 290,
    },
  },
  img: {
    height: 500,
    width: "100%",
    objectFit: "cover",
    [theme.breakpoints.down("xs")]: {
      height: 290,
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
      marginLeft: "10px",
      fontSize: "25px",
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
    marginTop: "10px",
  },
}));

export default function Section6() {
  const classes = useStyles();
  return (
    <div className={classes.Section6}>
      <Grid container>
        <Grid item xs={12} sm={6} className={classes.first}>
          <div className={classes.photo}>
            <img className={classes.img} src={Logic} alt="" />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.second}>
          <div className={classes.text}>
            <div className={classes.head}>
              A strong <span className={classes.span}>Foundation</span>
            </div>
            <div className={classes.para}>
              <div className={classes.para1}>
                Coding is not only the language of future but it also helps in
                thinking in a problem solving manner. People tend to be more
                creative and they develop persistence.
              </div>
              <div className={classes.para2}>
                Coding helps to develop resilience and can improve on one's
                communication skill. People improve their structural thinking
                when learning to code.
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
