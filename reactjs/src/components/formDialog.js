import React from 'react';
import { Dialog, DialogTitle, DialogContent, makeStyles } from '@material-ui/core';
import CloseIcon from "@material-ui/icons/Close";
import Form from "./form";

const useStyles = makeStyles( () => ( {
    root: {
        "& .MuiDialog-paperWidthSm": {
            padding: "30px",
            minWidth: "600px",
            borderRadius: "16px",
        }
    },

    icon : {
        position: "absolute",
        right: "10px",
        top: "10px",
        "&:hover": {
           cursor: "pointer"
        }
    },

    DialogTitle: {
      "& .MuiTypography-h6" : {
        textAlign: "center",
        fontSize: "20px",
        color: "#3e3e3e",
        fontWeight: "700",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }
    }

} ) )


const FormDialog = ( { open, setOpen } ) => {

    const classes = useStyles();
    const handleClose = () => setOpen( false );
    return <Dialog
        open={ open }
        onClose={ handleClose }
        scroll="body"
        classes={ { root: classes.root } }
        maxWidth="sm">
        <DialogTitle classes={ { root: classes.DialogTitle } }>
            Customer Bill Details
            <CloseIcon onClick={ handleClose } className={ classes.icon } />
        </DialogTitle>
        <DialogContent className={ classes.dialogContent }>
            <Form setOpen={ setOpen } />
        </DialogContent>
    </Dialog>;
}

export default FormDialog;