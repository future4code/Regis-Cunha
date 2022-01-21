import React from 'react';
import {useHistory} from "react-router-dom"
import {goToListTrip, goToLoginPage} from '../../routes/coordinator';

function Header({ rightButtonText, setRigthButtontText }) {
    const token = localStorage.getItem("token");
    const history = useHistory();

    const logout = () => {
        localStorage.removeItem("token");
    };

    const rightButtonAction = () => {
        if (token) {
            logout();
            setRigthButtontText("Login");
            goToLoginPage(history);
        } else {
            goToLoginPage(history);//obs
        }
    };

    return (
        <div>
            <button onClick={() => goToListTrip(history)}>Lista de Viagens</button>
            <button onClick={rightButtonAction} color="inherit">{rightButtonText}</button>
        </div>


    );
}

export default Header

