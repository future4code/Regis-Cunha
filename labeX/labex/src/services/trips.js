import axios from "axios"
import BASE_URL from "../constants/urls"
import { goToAplicationForm } from "../routes/coordinator"

export const login = (body, clear, history, setRigthButtontText) => {
    axios.post(`${BASE_URL}/:aluno/login`, body)
        .then((res)=> {
            localStorage.setItem("token", res.data.token)
            clear()
            goToAplicationForm(history)
            setRigthButtontText("Logout")
        })
        .catch((err)=> alert(err.response.data.message))
}