import { makeStyles } from '@material-ui/styles'
import React from 'react'
import Contact from '../../contact/Contact'
import Footer from '../../footer/Footer'
import Home from '../Home/Home'
import Pricing from '../pricing/Pricing'
import Question from '../question/Question'
import Whycoding from '../whyCoding/Whycoding'
import WhyMentor from '../whyMentor/WhyMentor'

const useStyles = makeStyles((theme) => ({}))

export default function Main() {
    const classes = useStyles()
    return (
        <div className={classes.main}>
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
