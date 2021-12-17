import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section2: {
    height: 150,
    backgroundColor: "#d7e4f4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
    height:50
    }
  },
  text: {
    fontSize: "60px",
    fontFamily: "Petemoss, cursive",
    color:"#030856",
    [theme.breakpoints.down("xs")]: {
      fontSize:"40px"
      }
  },
  textSpan: {
    fontFamily: "Lobster, cursive;",
    fontSize: "40px",
    [theme.breakpoints.down("xs")]: {
      fontSize:"25px"
      }
  }
}));

export default function Section() {
  const classes = useStyles();
  return (
    <div className={classes.section2}>
      <div className={classes.text}>
        Why <span className={classes.textSpan}> is Coding necessary?</span>
      </div>
    </div>
  );
}
