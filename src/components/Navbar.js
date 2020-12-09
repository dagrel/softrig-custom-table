import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    render () {

        const style = {
            marginRight: 10,
            color: 'black'
        }

        return (
            <div>
                <NavLink to="/" style={style}>Fremside</NavLink>
            </div>
        )
    }
}
