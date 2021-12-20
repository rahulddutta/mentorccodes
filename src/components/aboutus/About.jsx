import { Grid, makeStyles } from "@material-ui/core"
import Abouts from "../../images/about.jpg"

const useStyles = makeStyles((theme) => ({
    first: {
        backgroundColor:"#edf1fa",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:100,
        color:"#030856",
        fontFamily: "Lobster, cursive;",
        fontSize:"40px"
    },
    img: {
        width:"100%",
        objectFit:"cover",
        height:"600px"
    }
}))

export default function About() {
    const classes = useStyles()
    return (
        <div className={classes.about}>
            <Grid container>
                <Grid item sm={12} className={classes.first}>
                    <div>About Us</div>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item sm={6} className={classes.secondwordings}>
                    <div>About Us</div>
                </Grid>
                <Grid item sm={6} className={classes.secondlast}>
                    <div >
                        <img className={classes.img} src={Abouts} alt="" />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
