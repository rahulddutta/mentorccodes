import { makeStyles } from "@material-ui/core"
import Section from "../../section2/Section2"
import Section3 from "../../section3/Section3"
import Section4 from "../../section4/Section4"
import Section5 from "../../section5/Section5"
import Section6 from "../../section6/Section6"
import Section7 from "../../section7/Section7"

const useStyles = makeStyles((theme)=> ({
}))

export default function Whycoding() {
const classes = useStyles()
    return (
        <div className={classes.whyCoding} id="code">
            <Section/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            <Section7/>
        </div>
    )
}
