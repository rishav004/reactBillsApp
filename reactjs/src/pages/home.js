import React from "react";
import Header from "../components/header";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles( ( theme ) => ( {
  root: {
    background: theme.palette.primary.main,
    minHeight: "90vh"
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "50px 0"
  }
} ) )

const Home = () => {
  const classes = useStyles();
  return (
    <div className={ classes.root }>
      <div className={ classes.container }>
        <Header />
      </div>
    </div>
  )
};

export default Home;