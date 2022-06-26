import { Grid, makeStyles } from "@material-ui/core";
import Privacy from "../../wordings/privacymentor.pdf";
import Terms from "../../wordings/mentorterms.pdf";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  first: {
    height: 70,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#edf1fa",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      textAlign: "center",
      height: 130,
    },
  },
  text1: {
    color: "#030856",
    fontSize: "14px",
    fontFamily: "Roboto Slab, serif",
  },
  text2: {
    color: "#030856",
    fontSize: "14px",
    fontFamily: "Roboto Slab, serif",
  },
  heart: {
    color: "red",
    fontSize: "18px",
  },
  text3: {
    color: "#030856",
    fontSize: "14px",
    fontFamily: "Roboto Slab, serif",
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      cursor: "none",
    },
  },
  span: {
    borderLeft: "1px solid red",
    borderRight: "1px solid red",
    paddingLeft: "5px",
    paddingRight: "5px",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  linkLast: {
    marginLeft: "5px",
    textDecoration: "none",
    color: "inherit",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Grid container>
        <Grid item sm={12} xs={12} className={classes.first}>
          <div className={classes.text1}>
            All rights reserved 2021 &copy; mentorcodes.com
          </div>
          <div className={classes.text2}>
            Made with <span className={classes.heart}>&hearts;</span> in India
          </div>
          <div className={classes.text3}>
            <Link className={classes.link} to="/about">
              About Us
            </Link>{" "}
            <span className={classes.span}>
              {" "}
              <a className={classes.link} href={Terms}>
                Terms & Conditions
              </a>{" "}
            </span>{" "}
            <a className={classes.linkLast} href={Privacy}>
              Private Policy
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
