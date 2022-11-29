import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Details from '../pages/details'
import Home from '../pages/home'

export const useRoutes = () => {

        return (
            <Switch>

                <Route path='/:id/details' render={(state) => {
                        return (
                            <Details state={state} />
                        )
                }} />

                <Route path='/' render={(state) => {
                        return (
                            <Home state={state} />
                        )
                }} />

                <Redirect to='/' />
            </Switch>
        )
    
}