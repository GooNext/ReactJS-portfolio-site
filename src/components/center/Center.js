import React from 'react'
import classes from './Center.module.scss'
import Translate from 'react-translate-component'


const Center = props =>{
        return (
            <div className = {classes.Center}>
                <Translate content = 'center.h3' component = 'h3'/>
                <Translate content = 'center.links.link1' component = 'h3' unsafe = {true}/>
                <Translate content = 'center.links.link2' component = 'h3' unsafe = {true}/>
                {/* <h3><a href="mailto:info@begoody.com">info@begoody.com</a></h3> */}
                {/* <h3><a href="mailto:info@begoody.com">презентация.pdf</a></h3> */}
            </div>
        )
}

export default Center