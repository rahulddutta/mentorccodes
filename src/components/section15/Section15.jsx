import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  first: {
    height: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#edf1fa",
    fontFamily: "Petemoss, cursive",
    fontSize: "90px",
    color: "#030860",
    [theme.breakpoints.down("sm")]: {
      fontSize: "50px",
      height: 80,
    },
  },
}));

export default function Section15() {
  const classes = useStyles();
  return (
    <div className={classes.section15}>
      <Grid container>
        <Grid item xs={12} sm={12} className={classes.first}>
          FAQ
        </Grid>
      </Grid>
    </div>
  );
}
