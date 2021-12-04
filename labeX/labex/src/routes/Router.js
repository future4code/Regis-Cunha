import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage"
import AplicationFormPage from "../pages/AplicationFormPage/AplicationFormPage"
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage"
import HomePage  from '../pages/HomePage/HomePage'
import ListTripsPage from '../pages/ListTripsPage/ListTripsPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import TripDetailsPage from '../pages/TripDetailsPage/TripDetailsPage'
import ErrorPage from "../pages/ErrorPage/ErrorPage"


const Router = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/admin-page">
                <AdminHomePage/>
            </Route>
            <Route exact path="aplication-form">
                <AplicationFormPage/>
            </Route>
            <Route exact path="create-trip">
                <CreateTripPage/>
            </Route>
            <Route exact path="/home">
                <HomePage/>
            </Route>
            <Route exact path="/">
                <ListTripsPage/>
            </Route>
            <Route exact path="/login">
                <LoginPage/>
            </Route>
            <Route exact path="/details/:id">
                <TripDetailsPage/>
            </Route>
            <Route>
                <ErrorPage/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Router