import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  text: {
    height: 100,
    backgroundColor: "#004bb3",
    color: "white",
    display: "flex",
    paddingTop:"40px",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "50px",
    fontFamily: "Lobster, cursive;",
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
      height: 50,
      paddingTop:"0px"
    },
  },
  span: {
    fontFamily: "Petemoss, cursive",
    marginLeft: "10px",
    fontSize: "70px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "35px",
      marginLeft: "5px",
    },
  },
  bold: {
    marginLeft: "10px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "5px",
    },
  },
}));

export default function Section9() {
  const classes = useStyles();
  return (
    <div className={classes.section9}>
      <Grid container>
        <Grid item xs={12} sm={12} className={classes.text}>
          What makes <b className={classes.bold}>Mentor</b>{" "}
          <span className={classes.span}>Standout</span>
        </Grid>
      </Grid>
    </div>
  );
}
