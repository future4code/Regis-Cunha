import { useLayoutEffect } from "react"
import { useHistory } from "react-router"
import { goToAplicationForm } from "../routes/coordinator"


const useUnprotectedPage = () => {
    const history = useHistory()
    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (token){
            goToAplicationForm(history)
        }
      }, [history])
    }

    export default useUnprotectedPage