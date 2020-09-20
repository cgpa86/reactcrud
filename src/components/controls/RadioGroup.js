import React from 'react'
import {FormControl, FormLabel, RadioGroup as MuiRadioGroup, FormControlLabel, Radio} from '@material-ui/core';


export default function RadioGroup(props){

    const{name,label, value, onChange, items } = props;
return(
       
    <FormControl>
    <FormLabel>{label}</FormLabel>
    <MuiRadioGroup row
     name={name} 
     value={value}
    onChange={onChange}>

        {
            items.map( 
                item  => (
                    <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.title}/>                  
                )
            )
        }


        {/* <FormControlLabel value="chica" control={<Radio />} label="Chica"/>
        <FormControlLabel value="mediana" control={<Radio />} label="Mediana"/>
        <FormControlLabel value="grande" control={<Radio />} label="Grande"/> */}

    {/* </MuiRadioGroup>

     <FormLabel>{label}</FormLabel>
    <MuiRadioGroup row
     name={name} 
     value={value}
    onChange={onChange}>

        {
            items.map( 
                (item, index ) => (
                    <FormControlLabel value={item.id} control={<Radio />} label={item.title}/>                  
                )
            )
        } */}
</MuiRadioGroup>
 </FormControl>

     )
}