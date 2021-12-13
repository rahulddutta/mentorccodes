import { makeStyles } from "@material-ui/core"
import Section13 from "../../section13/Section13"
import Section14 from "../../section14/Section14"

const useStyles = makeStyles((theme) => ({}))

export default function Pricing() {
    const classes = useStyles()
    return (
        <div className={classes.pricing} id="price">
            <Section13/>
            <Section14/>
        </div>
    )
}
