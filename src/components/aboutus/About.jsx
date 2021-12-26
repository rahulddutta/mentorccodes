import { Grid, makeStyles } from "@material-ui/core";
import Abouts from "../../images/about.jpg";

const useStyles = makeStyles((theme) => ({
  first: {
    backgroundColor: "#fffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    color: "#030856",
    fontFamily: "Lobster, cursive;",
    fontSize: "40px",
  },
  secondwordings: {
    backgroundColor: "#fffff",
  },
  img: {
    width: "100%",
    objectFit: "cover",
    height: "480px",
  },
  title: {
    textAlign: "center",
    padding: "10px",
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.about}>
      <Grid container>
        <Grid item sm={12} className={classes.first}>
          <div>About Us</div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item sm={6} className={classes.secondwordings}>
          <div className={classes.title}>A humble overview</div>
          <div className={classes.firstPara}>
            We started our journey with the aim to provide assistance to younger
            generations so that their career building journey starts from a much
            younger age. We have seen that Tier 1 city teens tend to be more
            active in their career building phase right from young. We believe
            that education must have quality as well as it should be affordable.
            So our pricing structure is such that the students gain the maximum
            paying minimum.
          </div>
          <div className={classes.secondPara}>
            Our approach is open model. We don't put students confined to our
            website. We push them to go beyond syllabus. We tech them how to
            find solutions to their own coding problems through searching
            correct terms on Google. The most impotant skill while learning
            coding is be able to google correctly. Remember most of the problems
            that you might encountered while coding has been encountered by many
            developers and therefore the developer community has put up
            solutions in stackoverflows and many other websites for others to
            follow. We want our students to be able to contribute to the
            developer community and at the same time do some good for the
            society as well.
          </div>
        </Grid>
        <Grid item sm={6} className={classes.secondlast}>
          <div>
            <img className={classes.img} src={Abouts} alt="" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
