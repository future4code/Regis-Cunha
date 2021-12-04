export const goToAdminHome = (history) => {
    history.push("/admin-page")
}

export const goToAplicationForm = (history) => {
    history.push("aplication-form")
}

export const goCreateTrip = (history) => {
    history.push("create-trip")
}

export const goToHomePage = (history) => {
    history.push("/home")
}

export const goToListTrip = (history) => {
    history.push("/")
}

export const goToLoginPage= (history) => {
    history.push("/login")
}

export const goToTripDetails = (history, id) => {
    history.push(`/details/${id}`)
}