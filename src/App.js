import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import VidaNova from './pages/VidaNova'
import Plano from './pages/Plano'
import Player from './pages/Player'
import Cultos from './pages/Cultos'
import NotFound from './pages/NotFound'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/vidanova" component={VidaNova}/>
                <Route exact path="/plano" component={Plano}/>
                <Route exact path="/player" component={Player}/>
                <Route exact path="/cultos" component={Cultos}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App


