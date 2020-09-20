import React from 'react'
import {AppBar, Toolbar, Grid, InputBase, IconButton, makeStyles} from '@material-ui/core'
// import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
// import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WebIcon from '@material-ui/icons/Web';

const useStyles = makeStyles(theme =>({
    root: {
        backgroundColor:'#f794f4',
        //transform:'translateZ(0)'
    },
    searchInput: {
        opacity: '0.6',
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: '0.8rem',
        '&:hover':{
            backgroundColor:'#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        }
    }

}))

export default function Header(){
    const classes = useStyles();
return(
    <AppBar position ="static" className={classes.root}>
        <Toolbar>
            <Grid container
            alignItems="center">
                <Grid item>
                    <InputBase 
                    placeholder="Buscar" 
                    className={classes.searchInput}
                    startAdornment={<SearchIcon fontSize="small"/>}/>
                </Grid>
                <Grid item sm>

                </Grid>
                <Grid item >
                    <IconButton >
                        <InstagramIcon />
                        <a href="https://www.instagram.com/zazu.s" target="_blank" rel="noopener noreferrer">
                        Ig
                        </a>
                    </IconButton>
                    
                        {/* <Badge badgeContent={4} color="secondary">
                        <NotificationsNoneIcon fontSize="small" />                   
                        </Badge>
                        </IconButton>
                        <IconButton>
                        <Badge badgeContent={3} color="primary">
                        <ChatBubbleOutlineIcon fontSize="small"/>                        
                        </Badge> */} 
                        <IconButton >
                         <FacebookIcon />
                         <a href="https://www.facebook.com/zazu.showroom" target="_blank" rel="noopener noreferrer">
                            Fb
                            </a>
                         </IconButton>

                         <IconButton >
                    <WebIcon/>
                    <a href="https://www.zazushowroom.com" target="_blank" rel="noopener noreferrer">
                        Web
                        </a>
                     </IconButton>
                    <IconButton>

                        <PowerSettingsNewIcon fontSize="small"/>                        
                        
                    </IconButton>
                   
                </Grid>
            </Grid>

        </Toolbar>

    </AppBar>
    )

}