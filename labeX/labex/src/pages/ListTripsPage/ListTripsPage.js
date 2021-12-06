import React from "react"
import { useHistory } from "react-router"
import BASE_URL from "../../constants/urls"
import useRequestData from "../../hooks/useRequestData"
import { goToTripDetails } from "../../routes/coordinator"

const ListTripsPage = () => {
    const history = useHistory
    const trips = useRequestData([], `${BASE_URL}/:aluno/trips`)

    return(
        <div>
            <h1>ListTripsPage</h1>
            <button onClick={() => goToTripDetails(history)}>Ir para Lista de Viagens</button>
        </div>
    )
}

export default ListTripsPage