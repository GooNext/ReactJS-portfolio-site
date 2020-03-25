import {Switch,Route} from 'react-router-dom'
import React from 'react'
import Layout from '../hoc/Layout'

export default () => {
    return (
        <Switch>
            <Route path = '/' component = {Layout}/>
        </Switch>
    )
}