import React from 'react'
import './Layout.scss'
import NavBar from '../components/navBar/NavBar'
import Footer from '../components/footer/Footer'
import WOW from 'wowjs'
import Center from '../components/center/Center'
import counterpart from 'counterpart'
import ru from '../lang/ru'
import en from '../lang/en'



counterpart.registerTranslations('ru', ru)
counterpart.registerTranslations('en', en)
counterpart.setLocale('ru')


class Layout extends React.Component {
    type = counterpart.translate('center.typed')

    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }

    state = {
        isHovered: false,
        list: [
            {name: 'Behance', id: 1, background: 'blue', to: 'https://www.behance.net/'},
            {name: 'Dribbble', id: 2, background: 'red', to: 'https://dribbble.com/'},
            {name: 'Instagram', id: 3, background: 'green', to: 'https://www.instagram.com/'},
        ],
        cls : [
            'Layout'
        ],
        lang: 'ru'
    }
    changeLang = (e) => {
        this.setState({
            lang: e.target.value
        })
        counterpart.setLocale(e.target.value)
        console.log(this.type)
    }

    handleHover = () => {
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }

    handleClass = (newClass) => {
        this.setState(() => ({
            cls: [
                'Layout',  newClass
            ]
        }))
    }

    removeClass = () => {
        this.setState({
            cls: [
                'Layout'
            ]
        })
    }
    
    

    render (){
        return (
            <div className = {this.state.cls.join(' ')}>
                <NavBar
                    lang = {this.state.lang}
                    changeLang = {this.changeLang}
                />
                <Center
                    type = {this.type}
                />
                <Footer
                    list = {this.state.list}
                    hover = {this.handleHover = this.handleHover.bind(this)}
                    cls = {this.state.cls}
                    handleClass = {this.handleClass.bind(this)}
                    removeClass = {this.removeClass.bind(this)}
                    lang = {this.state.lang}
                    changeLang = {this.changeLang}
                />
            </div>
        )
    }
}

export default Layout