import React from "react";
import Header from "../components/header";
import { makeStyles, Typography } from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'; 

const useStyles = makeStyles( ( theme ) => ( {
  root: {
    background: theme.palette.primary.main,
    minHeight: "90vh"
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "50px 0"
  },
  contentWrapper: {
    marginTop: "50px",
    maxWidth: "1000px",
    margin: "0 auto"
  },
  billsData: {
    display: "flex",
    justifyContent: "space-between",
    padding: "40px",
    border: "1px solid #269dbf",
    borderRadius: "16px",
    "&:hover": {
      cursor: "pointer"
    }
  },
  icon: {
    color: "white",
  }
} ) )

const Home = () => {
  const classes = useStyles();
  return (
    <div className={ classes.root }>
      <div className={ classes.container }>
        <Header />
        <div className={classes.contentWrapper}>
          <div className={classes.billsData}>
            <Typography>id</Typography>
            <Typography>name</Typography>
            <Typography>price</Typography>
            <Typography>status</Typography>
            <ArrowForwardIosIcon className={classes.icon} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;