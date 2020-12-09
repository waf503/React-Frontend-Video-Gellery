import React from 'react'
//BrowserRouter encapsula los elementos principales que componen nuestro sitio
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../containers/Home.jsx'
import Login from '../containers/Login.jsx'
import Register from '../containers/Register.jsx'
import NotFound from '../containers/NotFound.jsx'
import Layout from '../components/Layout.jsx'
import Player from '../containers/Player.jsx'

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/register" component={Register}></Route>
                <Route exact path="/player/:id" component={Player} ></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </Layout>
        
    </BrowserRouter>
)

export default App;



