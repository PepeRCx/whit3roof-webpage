import * as React from 'react';
import './navbar.css'
import ShinyText from '../../../Reactbits/ShinyText/ShinyText'

function NavBar() {

    const contactMe = () => {
        const message = "Hola, estoy interesado en sus servicios, podrían ayudarme?";
        window.open(`https://wa.me/7841391319?text=${message}`, '_blank');
    }

    return (
        <header className='header' role='banner'>
            <div className='logo-container'>
                <a href="" className='logo' >
                    <p alt="monogram logo" >Whit3roof</p>
                </a>
            </div>

            <nav className='nav'>
                <ul className='nav-list'>
                </ul>
            </nav>

            <div className='options'>
                <button onClick={contactMe}>
                    Contacto
                </button>
            </div>
        </header>
    )
}

export default NavBar;