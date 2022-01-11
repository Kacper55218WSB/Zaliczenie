import React, {useState, useEffect}  from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { GiBiceps } from 'react-icons/gi'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css'
import { IconContext } from 'react-icons/lib'

//górny pasek

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false) 

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
        <IconContext.Provider value ={{ color: '#fff'}}>
            <div className='navbar'>
                <div className='navbar-container container'>
                    <Link to='/#header' className='navbar-logo' onClick={closeMobileMenu}>
                        <GiBiceps className='navbar-icon' />
                        GIGA STRONA
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}                       
                    </div>
                    <ul className={click ? 'nav-menu.active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/#header' className='nav-links' onClick={closeMobileMenu}>
                                Początek
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/#ceny' className='nav-links' onClick={closeMobileMenu}>
                                Subskrypcje
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/#footer' className='nav-links' onClick={closeMobileMenu}>
                                Zgłoszenia
                            </Link>
                        </li>
                        <li className='nav-btn'>
                            {button ? (
                                <Link to='/#footer' className='btn-link'>
                                    <Button buttonStyle='btn--outline'>Zgłoś się</Button>
                                </Link>
                            ): (
                                <Link to='/#footer' className='btn-link'>
                                    <Button buttonStyle='btn--outline'
                                            buttonSize='btn--mobile'>
                                                Zgłoś się </Button>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
