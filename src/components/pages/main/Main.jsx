import { makeStyles } from '@material-ui/styles'
import React from 'react'
import Contact from '../../contact/Contact'
import Footer from '../../footer/Footer'
import Topbar from '../../topbar/Topbar'
import Home from '../Home/Home'
import Pricing from '../pricing/Pricing'
import Question from '../question/Question'
import Whycoding from '../whyCoding/Whycoding'
import WhyMentor from '../whyMentor/WhyMentor'

const useStyles = makeStyles((theme) => ({}))

export default function Main({user}) {
    const classes = useStyles()
    return (
        <div id='container' className={classes.main}>
            <Topbar user={user}/>
            <Home/>
            <Whycoding/>
            <WhyMentor/>
            <Pricing/>
            <Question/>
            <Contact/>
            <Footer/>
        </div>
    )
}
