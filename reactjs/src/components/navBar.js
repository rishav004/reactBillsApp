import { makeStyles } from "@material-ui/core";
import React from "react";
import { Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) =>({
    container: {
        background: theme.palette.primary.main
    },
    logo: {
        height: "80px",
        width: "80px"
    },
    logoContainer:{
        padding: "10px",
        display: "flex",
        alignItems: "center",
        "&:hover": {
            cursor: "pointer",
        }
    },
    title: {
        marginLeft: "10px"
    }
}))

const Navbar = () =>{
    const classes = useStyles();
    const navigate = useNavigate();
    return <div className={classes.container}>
        <div className={classes.logoContainer} onClick={()=>navigate("/")}>
            <img src="./favicon.svg" alt="logo" className={classes.logo}/>
            <Typography variant="h1" className={classes.title}>
                BillsApp
            </Typography>
        </div>
    </div>
}

export default Navbar