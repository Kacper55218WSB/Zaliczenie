import React from 'react'
import { RiVipLine } from 'react-icons/ri'
import { HashLink as Link } from 'react-router-hash-link'
import { GiCardAceSpades } from 'react-icons/gi'
import Button from './Button'
import { FaBeer } from 'react-icons/fa'
import { IconContext } from  'react-icons/lib'
import './Pricing.css'

//Zakładka z subskrypcjami

function Pricing() {
    return (
        <IconContext.Provider value= {{color: '#fff', size: 64,}}>
        <div>
            <div className='pricing__section' id='ceny'>
                <div className='pricing__wrapper'>
                    <h1 className='pricing__heading'>Subskrypcje</h1>
                    <div className='pricing__container'>
                        <Link to='/' className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <RiVipLine />
                                </div>
                                <h3>Starter Edition</h3>
                                <h4>9.99PLN</h4>
                                <p>miesięcznie</p>
                                <ul className='pricing__container-features'>
                                    <li>Cotygodniowe maile z poradami</li>
                                    <li>Naklejka dzielnego chada</li>
                                    <li>Dostęp do Giga grupy</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Wybierz
                                </Button>
                            </div>
                        </Link>
                        <Link to='/' className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <GiCardAceSpades />
                                </div>
                                <h3>Chad Edition</h3>
                                <h4>29.99PLN</h4>
                                <p>miesięcznie</p>
                                <ul className='pricing__container-features'>
                                    <li>Cotygodniowe maile z poradami</li>
                                    <li>Naklejka dzielnego chada</li>
                                    <li>Dostęp do Giga grupy</li>
                                    <li>Indywidualne podejście</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='red'>
                                    Wybierz
                                </Button>
                            </div>
                        </Link>
                        <Link to='/' className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <FaBeer />
                                </div>
                                <h3>P I W O Edition</h3>
                                <h4>99.99PLN</h4>
                                <p>miesięcznie</p>
                                <ul className='pricing__container-features'>
                                    <li>Wszystko co zapewniają poprzednie pakiety</li>
                                    <li>Paczka z gadżetami co miesiąc</li>
                                    <li>Wyjście na PIWO raz w tygodniu z Giga Chadem</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Wybierz
                                </Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </IconContext.Provider>
    )
}

export default Pricing
