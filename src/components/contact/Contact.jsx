import { Grid, makeStyles, TextField, Button } from "@material-ui/core";
import emailjs from "emailjs-com";
import { useRef } from "react";

const useStyles = makeStyles((theme) => ({
  first: {
    height: 100,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#edf1fa",
    [theme.breakpoints.down("xs")]: {
      height: 50,
    },
  },
  text: {
    fontFamily: "Lobster, cursive;",
    color: "#030856",
    fontSize: "50px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "35px",
    },
  },
  span: {
    fontFamily: "Petemoss, cursive",
    fontSize: "70px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "45px",
    },
  },
  second: {
    height: 500,
    backgroundColor: "#edf1fa",
    [theme.breakpoints.down("xs")]: {
      height:480
    },
  },
  inputCard: {
    height: 400,
    marginLeft: "200px",
    marginRight: "200px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0px",
      marginRight: "0px",
    },
  },
  inputText: {
    fontSize: "18px",
    color: "#414045",
    fontFamily: "Readex Pro, sans-serif",
    padding: "0px 130px 0px 130px",
    textAlign: "center",
    marginBottom: "30px",
    [theme.breakpoints.down("xs")]: {
      padding: "10px 10px 0px 10px",
      fontSize: "12px",
      marginBottom: "10px",
    },
  },
  form: {
    [theme.breakpoints.down("xs")]: {
      padding: "10px",
    },
  },
  inputField: {
    width: "99%",
    marginBottom: "20px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      padding: "",
    },
  },
  inputFieldNum: {
    width: "60%",
    marginBottom: "20px",
  },
  inputFieldEmail: {
    width: "38.5%",
  },
  inputFieldQuery: {
    width: "99%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  button: {
    display: "flex",
    marginTop: "20px",
    justifyContent: "center",
  },
}));

export default function Contact() {
  const classes = useStyles();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_29877kj",
        form.current,
        "user_iWUmX07u2pmBwDplfQ6Zq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className={classes.contact}>
      <Grid container>
        <Grid item sm={12} xs={12} className={classes.first}>
          <div className={classes.text}>
            Contact <span className={classes.span}> Us</span>{" "}
          </div>
        </Grid>
        <Grid item sm={12} xs={12} className={classes.second}>
          <div className={classes.inputCard}>
            <div className={classes.inputText}>
              If you have more queires please feel free to drop a message. We
              will revert back as soon as possible.
            </div>
            <div className={classes.form}>
              <form ref={form} onSubmit={sendEmail}>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  className={classes.inputField}
                  name="from_name"
                />
                <TextField
                  id="outlined-basic"
                  required
                  label="Phone Number"
                  variant="outlined"
                  className={classes.inputFieldNum}
                  name="phone_number"
                />{" "}
                <span>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    label="Email address"
                    variant="outlined"
                    className={classes.inputFieldEmail}
                    name="email"
                  />{" "}
                </span>
                <TextField
                  id="outlined-basic"
                  required
                  label="Please leave your queries"
                  variant="outlined"
                  multiline
                  rows={6}
                  className={classes.inputFieldQuery}
                  name="message"
                />
                <div className={classes.button}>
                  <Button
                    variant="contained"
                    value="Send"
                    type="submit"
                    color="primary"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
