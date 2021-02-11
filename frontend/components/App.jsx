import React from "react"
import { Route, Switch } from 'react-router-dom'

import NavBarContainer from './navbar/navbar_container'
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import NotFoundPage from './notFound'

import { AuthRoute } from '../util/route_util'

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={NavBarContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
)

export default App  