import { Grid, makeStyles } from "@material-ui/core";
import How from "../../wordings/how.pdf"

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
      textAlign:"center",
      height:130
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
    fontSize:"18px"
  },
  text3: {
    color: "#030856",
    fontSize: "14px",
    fontFamily: "Roboto Slab, serif",
    cursor:"pointer"
  },
  span: {
      borderLeft:"1px solid red",
      borderRight:"1px solid red",
      paddingLeft:"5px",
      paddingRight:"5px"
  },
  link : {
    textDecoration:"none",
    color:"inherit"
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Grid container>
        <Grid item sm={12} xs={12} className={classes.first}>
          <div className={classes.text1}>
            All rights reserved 2021 &copy; Mentor.com
          </div>
          <div className={classes.text2}>
            Made with <span className={classes.heart}>&hearts;</span> in India
          </div>
          <div className={classes.text3}>
            About Us <span className={classes.span}><a href={How} className={classes.link}>Terms & Conditions</a></span> Private Policy
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
