import React , {useState} from 'react';
import './App.css';
import SideMenu from "../components/SideMenu";
import { Switch, makeStyles, CssBaseline, createMuiTheme, ThemeProvider, Paper, FormHelperText} from '@material-ui/core';
import Header from '../components/Header';
//import PageHeader from '../components/PageHeader';
//import classes from '*.module.css';
import Productos from "../pages/Productos/Productos";





    
function App() {
  const [darkMode, setDarkMode] = useState(false);



  const theme = createMuiTheme({
    palette:{
      type : darkMode ? "dark" : "light",
      primary:{
        main:"#9c0382",
       light:'#f0cbf5',
       dark:"#c30ddb"
    
       
      },
      secondary:{
        main:"#f83245",
        light:'#f8324526'
      },
      background:{
        default:"#f4f5fd"
      },
    },
      overrides:{
        MuiAppBar:{
          root:{
            transform:'translateZ(0)' //sombreado en appbar
          }
        }
      },
      props:{
        MuiIconButton:{
          disableRipple:true
        }
      }
    })
    
    const useStyles = makeStyles({
    
      appMain:{
        paddingLeft:'320px',
        width:'100%',
        height:'100%',
      
      }
    })

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}> 
    <Paper style= {{height: "150vh"}}>
    <SideMenu />
    <div className={classes.appMain}>
      <Header/>
      <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)}  />
      <FormHelperText>Modo Oscuro</FormHelperText>
      
      <Productos/>
    </div>
    <CssBaseline />
    </Paper>
    </ThemeProvider>
  );
}


export default App;
