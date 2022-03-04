import { makeStyles, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles( ( theme ) => ( {
    root: {
        '& > *': {
            margin: theme.spacing( 1 ),
            width: '25ch',
        },
    },
    container: {
        marginTop: "20px"
    },
    formWrapper: {
        "& .MuiInputLabel-formControl": {
            color: theme.palette.primary.main,
        },
    },
    wrapper: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "40px"
    },

    btn: {
        marginTop: "30px",
        background: "#124c62",
        marginLeft: "60%",
        width: "40%",
        color: "#FFFFFF",
        fontSize: "18px",
        fontWeight: "600",
        padding: "12px 24px",
        borderRadius: "12px",
        "&:hover": {
            background: "#124c62",
        },
        textTransform: "none",
    },

    itemList: {
        marginTop: "20px"
    },

    itemTitle: {
        color: theme.palette.primary.main,
        marginBottom: "20px"
    },

    itemWrapper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px"
    },

    inputList: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "24px"
    },

    DeleteIcon: {
        "&:hover": {
            cursor: "pointer",
        }
    },

    newbtn: {
        marginTop: "20px",
        width: "100%",
        background: theme.palette.primary.light,
        color: "#FFFFFF",
        fontSize: "18px",
        fontWeight: "600",
        padding: "12px 24px",
        borderRadius: "12px",
        "&:hover": {
            background: "#124c62",
        },
        textTransform: "none",
    }

} ) )

const Form = ( { setOpen } ) => {
    const classes = useStyles();
    const [ values, setValues ] = useState( {
        customer_name: "",
        customer_email: "",
        product_description: "",
        customer_address: "",
        itemList: [ {
            itemName: "",
            itemPrice: "",
        } ]
    } );
    const handleChange = ( event ) => {
        setValues( {
            ...values,
            [ event.target.name ]: event.target.value,
        } );
        setCounter((o) => o+1)
    };
    const handleSubmit = ( e ) => {
        e.preventDefault();
        console.log( values );
        setOpen( false );
    }
    const handleNewItems = () => {
        values.itemList.push( {
            itemName: "",
            itemPrice: "",
        } )
        console.log( values )
        setCounter( oldValue => oldValue + 1 )
    }

    const handleDelete = ( id ) => {
        const newList = values.itemList.filter( ( item, i ) => i !== id );
        setValues( {
            ...values,
            itemList: newList,
        } )
    }

    const handleItemChange = ( e, i ) => {
        const copyValues = values;
        copyValues.itemList[ i ][ e.target.name ] = e.target.value;
        setValues( copyValues );
        setCounter( ( old ) => old + 1 )
    }

    const [ counter, setCounter ] = useState( 0 );

    useEffect( () => { }, [ counter ] );

    const listVal = values.itemList.map( ( item, i ) =>
        <div className={ classes.itemWrapper } key={ i }>
            <div className={ classes.inputList }>
                <TextField
                    id="outlined-basic"
                    label="Item Name"
                    variant="outlined"
                    className={ classes.TextField }
                    value={ item.itemName }
                    onChange={ ( e ) => handleItemChange( e, i ) }
                    name="itemName"
                />
                <TextField
                    id="outlined-basic"
                    label="Item Price"
                    variant="outlined"
                    className={ classes.TextField }
                    value={ item.itemPrice }
                    onChange={ ( e ) => handleItemChange( e, i ) }
                    name="itemPrice"
                />
            </div>
            <DeleteIcon
                className={ classes.DeleteIcon } onClick={ () => handleDelete( i ) } />
        </div>
    )

    return <div className={ classes.container }>
        <form className={ classes.formWrapper } onSubmit={ handleSubmit }>
            <div className={ classes.wrapper }>
                <TextField
                    id="outlined-basic"
                    label="Customer Name"
                    variant="outlined"
                    className={ classes.TextField }
                    value={ values.customer_name }
                    onChange={ handleChange }
                    name="customer_name"
                />
                <TextField
                    id="outlined-basic"
                    label="Customer Email"
                    variant="outlined"
                    className={ classes.TextField }
                    value={ values.customer_email }
                    onChange={ handleChange }
                    name="customer_email"
                />
                <TextField
                    id="outlined-basic"
                    label="Product Description"
                    variant="outlined"
                    className={ classes.TextField }
                    value={ values.product_description }
                    onChange={ handleChange }
                    name="product_description"
                />
                <TextField
                    id="outlined-basic"
                    label="Customer Address"
                    variant="outlined"
                    className={ classes.TextField }
                    value={ values.customer_address }
                    onChange={ handleChange }
                    name="customer_address"
                />
            </div>
            <div className={ classes.itemList }>
                <Typography variant="h4" className={ classes.itemTitle }>
                    List Items
                </Typography>
                { listVal }
            </div>

            <Button
                variant="contained"
                disableElevation
                disableRipple
                className={ classes.newbtn }
                onClick={ handleNewItems }
            >
                Add new Items
            </Button>

            <Button
                variant="contained"
                disableElevation
                disableRipple
                className={ classes.btn }
                type="submit"
            >
                Generate Bills
            </Button>
        </form>

    </div>
}

export default Form;