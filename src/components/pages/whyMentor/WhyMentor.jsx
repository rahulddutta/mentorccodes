import {  makeStyles } from "@material-ui/core";
import Section8 from "../../section8/Section8";
import Section10 from "../../section10/Section10";
import Section9 from "../../section9/Section9";
import Section11 from "../../section11/Section11";
import Section12 from "../../section12/Section12"

const useStyles = makeStyles((theme) => ({
}));

export default function WhyMentor() {
  const classes = useStyles();
  return (
    <div className={classes.whyMentor} id="mentor">
    <Section8/>
    <Section9/>
    <Section10/>
    <Section11/>
    <Section12/>
    </div>
  );
}
