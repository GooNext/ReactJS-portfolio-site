import React from 'react'
import classes from './NavBar.module.scss'
import {Link} from 'react-router-dom'
import image from './images/logo.png'


const NavBar = props => {
        return (
            <div className = {classes.NavBar}>
                <Link to = '/'>
                    <img src= {image} alt=""/>
                </Link>
                <div className = {classes.right}>
                    <h3 className = {classes.tel}>+375 44 779 80 35</h3>
                    <select value = {props.lang} onChange = {props.changeLang}>
                        <option>ru</option>
                        <option>en</option>
                    </select>
                </div>
            </div>
        )
}

export default NavBar