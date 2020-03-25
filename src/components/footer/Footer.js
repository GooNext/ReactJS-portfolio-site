import React from 'react'
import classes from './Footer.module.scss'
import Typed from 'react-typed';
import Translate from 'react-translate-component'
import counterpart from 'counterpart';


const Footer = props => {

    return (
        <div className = {classes.Footer}>
            <div className = {classes.left}>
                {
                    props.lang === 'ru'
                    ?
                    <Typed
                        strings={['Пока мы кому-то разрабатываем новый сайт, можете взглянуть на наше портфолио']}
                        typeSpeed={40}
                    />
                    :
                    <Translate 
                        content = 'center.typed' 
                        component = 'span'
                    /> 
                }
            </div>
            <div className = {classes.right}>
                <ul>
                    {props.list.map((li, index) => {
                        return (
                            <li   
                                onMouseLeave= {() => props.removeClass(li.background)}
                                onMouseEnter = {()=> {props.handleClass(li.background)}} 
                                key = {index + 1}
                                className = {`wow fadeInUp delay-${index + 1}s`}
                            >
                                <a href = {li.to}>
                                    {li.name}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Footer