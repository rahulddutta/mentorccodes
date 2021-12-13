import { Grid, makeStyles } from "@material-ui/core";
import Photo from "../../images/why.png";

const useStyles = makeStyles((theme) => ({
  first: {
    height: 650,
    backgroundColor: "#d7e4f4",
    [theme.breakpoints.down("xs")]: {
      height: 250,
    },
  },
  photo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 650,
    [theme.breakpoints.down("xs")]: {
      height: 250,
    },
  },
  img: {
    width: "100%",
    objectFit: "cover",
  },
  second: {
    backgroundColor: "#d7e4f4",
    height: 650,
    [theme.breakpoints.down("xs")]: {
      height: 550,
    },
  },
  text: {
    paddingTop: "50px",
    paddingLeft: "50px",
    fontFamily: "Petemoss, cursive",
    fontSize: "90px",
    color: "#030856",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0px",
      fontSize: "50px",
      paddingTop: "0px",
    },
  },
  text0: {
    fontSize: "90px",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "50px",
    },
  },
  span: {
    fontFamily: "Lobster, cursive;",
    fontSize: "40px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
      marginTop: "0px",
      marginLeft: "10px",
    },
  },
  text2: {
    fontFamily: "Lobster, cursive;",
    fontSize: "40px",
    marginTop: "-20px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
      marginTop: "-12px",
      textAlign: "center",
      padding:"0px 5px 0px 5px"
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
    marginTop: "20px",
    color: "#5d515e",
    fontSize: "20px",
    padding: "2px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
    },
  },
}));

export default function Section4() {
  const classes = useStyles();
  return (
    <div className={classes.section4}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <div className={classes.first}>
            <div className={classes.photo}>
              <img className={classes.img} src={Photo} alt="" />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.second}>
            <div className={classes.text}>
              <div className={classes.text0}>
                Curriculum <span className={classes.span}>based learning</span>
              </div>
              <div className={classes.text2}>
                for better understanding of core concepts of coding
              </div>
            </div>
            <div className={classes.para}>
              <div className={classes.para1}>
                At Mentor you will learn the basic of computer science followed
                by a step by step approach into the world of coding.
              </div>
              <div className={classes.para2}>
                The first stage is learning web development. You will learn{" "}
                <b>HTML</b> and <b>CSS</b> followed by making website mobile
                responsive. The next step is heading towards <b>JavaScript</b>{" "}
                the language of the web. JavaScript is the most learnt
                programming language. More than 50% of developers around the
                world use JavaScript.
              </div>
              <div className={classes.para2}>
                Overall by the end of the course you will learn to set up your
                own <b>developer environment (IDE)</b>, work with{" "}
                <b>version control (Git)</b>. You will learn CSS framework like{" "}
                <b>Bootstrap</b> and <b>Material UI</b> along with the most
                popular Javascript library <b>React Js</b>. The one that is used
                to make this website and other <b>billion dollar</b> companies
                like <b>Meta</b>.
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
