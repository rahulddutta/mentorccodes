import { Button, Grid, TextField, makeStyles } from "@material-ui/core";
import RoboP from "../../../images/ra.png";
import emailjs from "emailjs-com";
import { useRef } from "react";

const useStyles = makeStyles((theme) => ({
  book: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  block: {
    backgroundColor: "white",
    width: "50%",
    height: "90%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "100%",
    },
  },
  first: {
    backgroundColor: "#004bb3",
    height: 570,
    textAlign: "center",
    borderTopLeftRadius: "25px",
    borderBottomLeftRadius: "25px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    [theme.breakpoints.down("xs")]: {
      height: 540,
      borderTopLeftRadius: "25px",
      borderBottomLeftRadius: "0px",
      borderTopRightRadius: "25px",
      margin: "20px 20px 0px 20px",
    },
  },
  second: {
    height: 570,
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 0px 15px",
    borderTopRightRadius: "25px",
    borderBottomRightRadius: "25px",
    [theme.breakpoints.down("xs")]: {
      height: 570,
      borderBottomLeftRadius: "25px",
      borderTopRightRadius: "0px",
      margin: "0px 20px 20px 20px",
    },
  },
  titleFirst: {
    marginTop: "20px",
    fontFamily: "Abril Fatface, cursive",
    fontSize: "24px",
    color: "white",
  },
  titleSecond: {
    marginTop: "10px",
    fontFamily: "Playfair Display, serif",
    fontSize: "40px",
    color: "white",
    lineHeight: "45px",
  },
  img: {
    width: "160px",
    objectFit: "cover",
    height: "200px",
    marginTop: "15px",
  },
  alarm: {
    display: "flex",
    marginTop: "10px",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: "1px solid white",
    paddingBottom: "20px",
  },
  alarmIcon: {
    height: "30px",
    marginRight: "5px",
  },
  span: {
    fontFamily: "Readex Pro, sans-serif",
    color: "white",
  },
  titleThird: {
    fontFamily: "Readex Pro, sans-serif",
    color: "white",
    marginTop: "20px",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: "50px",
    marginTop: "10px",
    color: "white",
    fontWeight: "bold",
    fontSize: "14px",
    [theme.breakpoints.down("xs")]: {
      marginLeft:"70px"
    },
  },
  text1: {
    color: "#020756",
    fontFamily: "Oswald, sans-serif",
    fontSize: "14px",
    marginLeft: "20px",
    marginTop: "50px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0px",
      marginTop: "0px",
      padding: "30px 10px 20px 10px",
      textAlign: "center",
    },
  },
  text2: {
    fontSize: "12px",
    marginTop: "15px",
    marginLeft: "20px",
    color: "#3954af",
    fontFamily: "Raleway, sans-serif",
    marginBottom: "20px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "0px",
      margin: "0 10px 0 10px",
      textAlign: "center",
    },
  },
  inputText: {
    marginLeft: "20px",
    marginTop: "20px",
  },
  form: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      marginTop: "30px",
    },
  },
  inputField: {
    width: "90%",
    marginTop: "10px",
    marginLeft: "20px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
      marginLeft: "0px",
      width: "100%",
    },
  },
  firstInput: {
    width: "380px",
    marginBottom: "0px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  sameInput: {
    display: "flex",
    marginLeft: "20px",
    marginTop: "10px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0px",
    },
  },
  modifyInput: {
    border: "1px solid #877f97",
    padding: "16px 20px 20px 16px",
    borderRadius: "5px",
    color: "#004bb3",
    marginRight: "5px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  spanInput: {
    width: "275px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  button: {
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
  },
}));

export default function Book() {
  const classes = useStyles();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_ascwa2x",
        form.current,
        "user_9BDt6EEZBYGhhdIA6kbrq"
      )
      .then(
        (result) => {
          alert("You are successfuly registered. Please expect a call from us regarding your schedule");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className={classes.book}>
      <div className={classes.block}>
        <Grid container>
          <Grid item xs={12} md={5} sm={12} className={classes.first}>
            <div className={classes.titleFirst}>Schedule Your</div>
            <div className={classes.titleSecond}>Free Coding Class</div>
            <div className={classes.photo}>
              <img className={classes.img} src={RoboP} alt="" />
            </div>
            <div className={classes.alarm}>
              {/* <img className={classes.alarmIcon} src={Alarm} alt="" />{" "} */}
              <span className={classes.span}>Hurry! Limited slots left.</span>
            </div>
            <div className={classes.titleThird}>
              Our Free Trial Class Includes
            </div>
            <ul className={classes.list}>
              <li>Introduction to Internet</li>
              <li>Evolution of Web</li>
              <li>Basic HTML and file Structuring</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={7} sm={12} className={classes.second}>
            <div className={classes.text1}>
              The class is for students studying in Class 5 and above
            </div>
            <div className={classes.text2}>
              Certificate on Web Development will be awarded post course
            </div>
            <div className={classes.form}>
              <form ref={form} onSubmit={sendEmail}>
                <div className={classes.firstInput}>
                  <TextField
                    id="outlined-basic"
                    required
                    label="Student's Name"
                    variant="outlined"
                    className={classes.inputField}
                    name="from_name"
                  ></TextField>
                </div>
                <div className={classes.sameInput}>
                  <div className={classes.modifyInput}>+91</div>{" "}
                  <span>
                    <TextField
                      id="outlined-basic"
                      required
                      label="Phone Number"
                      variant="outlined"
                      name="phone_number"
                      className={classes.spanInput}
                    ></TextField>
                  </span>
                </div>
                <div className={classes.firstInput}>
                  <TextField
                    id="outlined-basic"
                    required
                    label="Parent's Name"
                    variant="outlined"
                    className={classes.inputField}
                    name="parent_name"
                  ></TextField>
                  <div className={classes.firstInput}>
                    <TextField
                      id="outlined-basic"
                      label="Please leave your Address"
                      variant="outlined"
                      multiline
                      rows={3}
                      className={classes.inputField}
                      name="address"
                    />
                  </div>
                </div>
                <div className={classes.button}>
                  <Button
                    variant="contained"
                    value="Send"
                    type="submit"
                    color="primary"
                  >
                    Book Class
                  </Button>
                </div>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
