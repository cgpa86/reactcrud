import React from 'react';
import { withStyles } from "@material-ui/core";

//componentes de material ui withStyles y makeStyles

const styles = {
    sideMenu:{
        display: 'flex',
        flexDirection:'column',
        position: 'absolute',
        left:'0px',
        width:'320px',
        height:'270%',
        backgroundColor:'#9c059e'
    }
}


const SideMenu = (props) => {
    const {classes} = props;
    
    console.log(classes);
    return(
        <div className={classes.sideMenu}>


        </div>
    )
}
export default withStyles(styles)(SideMenu);