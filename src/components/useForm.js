import React, {useState} from 'react'
import {makeStyles }  from "@material-ui/core";
export  function useForm(initialFValues, validateOnChange=false, validate) {


    const [values , setValues] = useState(initialFValues);
    const [errors , setErrors] = useState({});



// evento e para cuando input cambie de estado... 

const handleInputChange = e => {

    //dentro de target se registra el input
    const {name, value} = e.target
    setValues({
        ...values, // ... separador 
        [name]:value
    })
    //validación de input en tiempo real***
    if(validateOnChange)
    validate({[name]: value })
}

// funcion boton reset

    const resetForm = () => {
        setValues(initialFValues);
        setErrors({})
    } 


    return {
        
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
        }

    }

//uso de estilos con MUI 
const useStyles = makeStyles(theme =>({
    root:{
        '& .MuiFormControl-root': {
            width:'50%',
            margin:theme.spacing(1)

        }

    }
}))



    export  function Form(props){
const classes = useStyles();
const { children, ...other } = props;

        return(

            <form className={classes.root} autoComplete="off" {...other}>

            {props.children}

            </form>

            )
    }