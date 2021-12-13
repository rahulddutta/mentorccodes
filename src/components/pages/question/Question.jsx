import { makeStyles } from "@material-ui/core"
import Section15 from "../../section15/Section15"
import Section16 from "../../section16/Section16"

const useStyles = makeStyles((theme) => ({}))

export default function Question() {
    const classes = useStyles()
    return (
        <div className={classes.question} id="question">
            <Section15/>
            <Section16/>
        </div>
    )
}
