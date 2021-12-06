import { ThemeProvider } from '@material-ui/core/styles';
import React, {useState} from 'react';
import theme from './constants/theme';
import Router from './routes/Router';
import Header from "./components/Header/Header"
import { BrowserRouter } from 'react-router-dom';

 
const App = () => {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRigthButtontText] = useState(token ? "Logout" : "Login")

    return (
        <ThemeProvider theme={theme}>
          <BrowserRouter>
          <Header rightButtonText={rightButtonText} setRigthButtontText={setRigthButtontText}/>
          <Router setRigthButtontText={setRigthButtontText}/>
          </BrowserRouter>
        </ThemeProvider>
    )   
}
export default App;
