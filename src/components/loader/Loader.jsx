import { makeStyles } from "@material-ui/core";
import { BallTriangle } from "react-loader-spinner";

const useStyles = makeStyles((theme) => ({
  loader: {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor:"#edf1fa"
  },
}));

export default function Loader() {
  const classes = useStyles();
  return (
    <div className={classes.loader}>
      <BallTriangle height="100" width="100" color="#030856" ariaLabel="loading" />
    </div>
  );
}
