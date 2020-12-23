import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Contacts from './Pages/Contacts'
import Auth from './Pages/Auth'

export const useRouter = (status) => {
    if (status) {
        return (
            <Switch>
                <Route path="/contacts" exact>
                    <Contacts />
                </Route>
                <Redirect to="/contacts" />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/login" exact>
                <Auth />
            </Route>
            <Redirect to="/login" />
        </Switch>
    )

}


