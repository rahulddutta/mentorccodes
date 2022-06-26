import { Button, Grid, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  second: {
    height: 100,
    backgroundColor: "#d7e4f4",
    clipPath:
      "polygon(0 0, 100% 0, 100% 100%, 0 74%)   ",
    [theme.breakpoints.down("xs")]: {
      height: 20,
    },
  },
  first: {
    backgroundColor: "pink",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "20px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  bookLink: {
    textDecoration:"none",
    color:"inherit"
  }
}));

export default function Section7() {
  const classes = useStyles();
  return (
    <div className={classes.section7}>
      <Grid container>
        <Grid item sm={12} xs={12} className={classes.second}>
          <div className={classes.button}>
            <Button variant="outlined" color="primary">
            <Link to="/booking" className={classes.bookLink}>
                  Book a Free Class
                </Link>
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
