import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import NotFound from './views/Notfound'
import injectContext from './store/appContext'
import Test from './views/test'

const Layout = props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default injectContext(Layout);