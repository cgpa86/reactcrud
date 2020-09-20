import React from 'react'
import {DialogContent, DialogTitle, Dialog, makeStyles, Typography} from '@material-ui/core';
import Controls from "./controls/Controls";
import CloseIcon from '@material-ui/icons/Close';



const useStyles = makeStyles(theme => ({

    dialogWrapper : {
        padding : theme.spacing(2), //2*8 =16
        position : 'absolute' ,
         top : theme.spacing(5)  // 5*8 =40
    },
    paddingTitle:{
        paddingRight:'0px'
    }

}))

export default function Popup(props) {


const { title, children, openPopup, setOpenPopup } = props;

const classes = useStyles();


    return (
        <Dialog open={openPopup} maxWidth="md" classes={{paper : classes.dialogWrapper}}>


            <DialogTitle className={classes.DialogTitle}>
                <div style ={{display: 'flex'}}>
                    <Typography variant="h6" component="div" style={{flexGrow:1}}>
                    {title} 
                    </Typography>
                    <Controls.ActionButton 
                    color="secondary"
                    onClick={()=>{setOpenPopup(false)}}>
                       <CloseIcon /> 

                    </Controls.ActionButton>
                </div>                
            </DialogTitle>
            <DialogContent dividers>
        
                        {children}
                    </DialogContent>
            </Dialog>

    )
}
