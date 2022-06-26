import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  first: {
    backgroundColor: "#edf1fa",
    height: 600,
    padding: "50px 50px 0px 50px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 10px 0px 10px",
      height: 600,
    },
  },
  accor: {
    backgroundColor: "#edf1fa",
    color: "#514042",
  },
  heading: {
    fontSize: "25px",
    fontFamily: "Readex Pro, sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
  para: {
    fontSize: "18px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
}));

export default function Section16() {
  const classes = useStyles();
  return (
    <div className={classes.section16}>
      <Grid container>
        <Grid item sm={12} xs={12} className={classes.first}>
          <Accordion className={classes.accor}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Will my child find the course hard?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.para}>
                We will not only teach the child to code but we will make him
                understand the core concept of internet. It's a step by step
                process and our doubt solving sessions are made to provide full
                knowledge on the course.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.accor}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Are the teachers eligible to teach my child coding?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.para}>
                At mentor our core principle is quality. Our main teacher for
                now has experience in Coding for more than 4 years. He has
                worked in tech company like Tata Consultancy Services.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.accor}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                When will the class begin after booking a class?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.para}>
                As soon as you book a class we will begin with the onboarding
                process. It usually takes 2-4 business days.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.accor}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Why should I enroll my child in this course?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.para}>
                Coding will be the next goto in the coming future. It can be
                seen from the very fact that Government of India has put Coding
                as a compulsory subject right from Class 6.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.accor}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                How is Mentor different from other Code teaching platforms?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.para}>
                Our platform provides a open approach while teaching your child
                to code. You may ask what is open aprroach. Well by open
                approach we mean that we will teach your child to work in their
                own developer environment so that they can develop their
                projects by themself rather relying on us for everything. We
                will make them compete in Hackatons and give their contribution
                to the developer community by helping in Open Source.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.accor}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                If my child has some trouble after completing the course who
                will help him?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.para}>
                At mentor we are focused on community building. Our Discord
                Servers will be up for every student and each will have life
                time access to it. In there we will solve their doubts and
                inform them about the latest changes in the tech world.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.accor}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Which age group of children is the course is appropriate for?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.para}>
                Computer Science is taught right from Class 1 nowadays in the
                schools. But to dive deep into coding we think that the minimum
                age of the student should be 11 years. There is no upper limit
                anyone above 11 years is good to go for the course.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </div>
  );
}
