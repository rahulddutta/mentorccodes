import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  first: {
    height: 20,
    backgroundColor: "#004bb3",
    clipPath: "polygon(0 0%, 100% 95%, 100% 100%, 0 100%)   ",
  },
}));

export default function Section8() {
  const classes = useStyles();
  return (
    <div className={classes.section8}>
      <Grid container>
        <Grid item sm={12} xs={12} className={classes.first}></Grid>
      </Grid>
    </div>
  );
}
