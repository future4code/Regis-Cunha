import React from "react"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"
import LoginForm from "./LoginForm"


const LoginPage = ({setRigthButtontText}) => {
    useUnprotectedPage()
    
    return(
        <div>
            <LoginForm setRigthButtontText={setRigthButtontText}/>
        </div>
    )
}

export default LoginPage