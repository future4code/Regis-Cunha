import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"

const AplicationFormPage = () => {
    useProtectedPage()
    
    return(
        <div>
            <h1>AplicationFormPage</h1>
        </div>
    )
}

export default AplicationFormPage