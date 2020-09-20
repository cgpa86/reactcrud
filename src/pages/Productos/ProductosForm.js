import React, { useState, useEffect} from 'react';
import { Grid,  InputAdornment} from '@material-ui/core';
import {useForm, Form } from '../../components/useForm';
import Controls from "../../components/controls/Controls";
import * as productoService from "../../services/productoService"

const tallaItems = [
    {id:'chica', title:'Chica'},
    {id:'mediana', title:'Mediana'},
    {id:'grande', title:'Grande'},
]

const calidadItems = [
    {id:'lowcost', title:'LowCost'},
    {id:'premium', title:'Premium'},

]


//valores iniciales del formulario 
const initialFValues = {
    id:0,
    categoriaId:12,
    // categoria:'',
    descripcion:'',
    marca:'',
    talla:'chica',
    cantidad:'',
    color:'',
    precio:'',
    extensiones:'',
    enInsta:true,
    enWeb:true,
    estado:'',
    calidad:'lowcost',
    fechaAlta:new Date(),


}



//aquí se mostrará el formulario de Productos 
export default function ProductosForm(props) {

    const {addOrEdit, recordForEdit } = props


    //sección de validación de Inputs desde input.js
//expresion regular email valid. temp.email=(/$|.+@.+..+/).test(values.email)?"":"mail invalido"
    const validate = (fieldValues = values) => {
        let temp = {...errors}
        if('descripcion' in fieldValues)
        temp.descripcion = fieldValues.descripcion?"":"Campo Requerido."
        if('precio' in fieldValues)
        //temp.precio = fieldValues.precio?"":"Campo Requerido."
        if('categoriaId' in fieldValues)
        temp.categoriaId = fieldValues.categoriaId.lenght !==  0 ? "" : "Campo Requerido."
        setErrors({

            ...temp
        })
//every = validación de campos vacíos en el array, regresa un valor Boolean
                                            //true o false
                                          //  console.log(errors)
                                           // console.log(values)
          if(fieldValues === values)                                 
       return Object.values(temp).every(x => x === "")

    }

//values es el objeto donde se tendrá el control de los inputs en el formulario


//const classes = useStyles();

const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
} = useForm(initialFValues, true, validate); 

const handleSubmit = e => {
    e.preventDefault()
    if (validate()){
        addOrEdit(values, resetForm);
    //window.alert('funciona!')
    // productoService.insertProductos(values)
    // console.log(values)
    // resetForm()
    }

}

//update de registros
  useEffect(() => {
    if (recordForEdit != null)
        setValues({
            ...recordForEdit
        })
}, [recordForEdit])
//Los elementos de Form serán importados de useForm
    return(

    <Form onSubmit={handleSubmit}>
<Grid container>
        <Grid item xs={6}>
 
             <Controls.Input
            name="descripcion"
            label="Descripción"
            value={values.descripcion}  
            onChange ={handleInputChange}
            error={errors.descripcion}
            

            />

            <Controls.Input
        
            label="Marca"
            name="marca"
            value={values.marca}
            onChange ={handleInputChange}
            />

            <Controls.Input
          
            label="Cantidad"
            name="cantidad"
            value={values.cantidad}
            onChange ={handleInputChange}
            error={errors.cantidad}
            
            />
              <Controls.Input
           
           label="Color"
           name="color"
           value={values.color}
           onChange ={handleInputChange}
           />
                       <Controls.RadioGroup 
             name="talla" 
             label="Talla:"
             value={values.talla}
            onChange={handleInputChange}
            items={tallaItems}
            />

            <Controls.RadioGroup 
             name="calidad" 
             label="Calidad:"
             value={values.calidad}
            onChange={handleInputChange}
            items={calidadItems}
            />

        

</Grid>
<Grid item xs={6}>



        <Controls.Input
         
         label="Precio"
         name="precio"
         value={values.precio}
         startAdornment={<InputAdornment position="start">$</InputAdornment>}
         onChange ={handleInputChange}
         error={errors.precio}
         
         /> 



       <Controls.Input
        
         label="Extensiones"
         name="extensiones"
         value={values.extensiones}
         onChange ={handleInputChange}
         
       />

         <Controls.Input
     
         label="Estado del Producto"
         name="estado"
         value={values.estado}
         onChange ={handleInputChange}
         
         />
         <Controls.Select
         name="categoriaId"
         label="Categoría"
         value={values.categoriaId}
         onChange={handleInputChange}
         options={productoService.getCategoriaCollection()}
         error={errors.categoriaId}
         />
         <Controls.DatePicker
          name="fechaAlta"
          label="Fecha de Alta"
          value={values.fechaAlta}
          onChange={handleInputChange}
          />

         <Controls.Checkbox
         name="enInsta"
         label="en Instagram"
         value={values.enInsta}
         onChange={handleInputChange}
         />

        <Controls.Checkbox
         name="enWeb"
         label="en Web"
         value={values.enWeb}
         onChange={handleInputChange}
         />
         
<div>
    <Controls.Button
    type="submit"
    text="Insertar"/>
    <Controls.Button
    text="Limpiar" 
    color="default"
    onClick={resetForm}/>

</div>

     </Grid>

   </Grid>
 </Form>

    )

}