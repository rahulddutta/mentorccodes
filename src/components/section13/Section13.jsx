import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  first: {
    height: 150,
    display: "flex",
    paddingTop:"20px",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "50px",
    fontFamily: "Lobster, cursive;",
    color: "#030856",
    [theme.breakpoints.down("sm")]: {
      display:"none"
    },
  },
  span: {
    fontFamily: "Petemoss, cursive",
    fontSize: "80px",
    marginLeft: "10px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
      marginLeft: "5px",
    },
  },
}));

export default function Section13() {
  const classes = useStyles();
  return (
    <div className={classes.section13}>
      <Grid container>
        <Grid item xs={12} sm={12} className={classes.first}>
          Curriculum &<span className={classes.span}> Pricing</span>
        </Grid>
      </Grid>
    </div>
  );
}
