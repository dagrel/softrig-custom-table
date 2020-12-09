import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Contacts from "./components/Contacts"

        export default class App extends Component {
            render() {
                return (
                    <Router>
                        <Fragment>
                            <Navbar />
                            <Route exact path='/' component={ Home }>Home</Route>
                            <Route path='/contacts' component={ Contacts }>About</Route>
                        </Fragment>
                    </Router>
                )
            }
        }
