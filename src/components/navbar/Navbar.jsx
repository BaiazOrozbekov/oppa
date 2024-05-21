import './navbar.css'
import logo from '../../img/logo.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [span, setSpan] = useState(false)
    const navigate = useNavigate()

    return (
        <div className="wrapper">
        <nav className='navigation-bar'>
            <Link to='/'><img src={logo} alt="logo" /></Link>
            <div className={span === false?"dark":"dark dark-active"} onClick={()=>{span===false?setSpan(true):setSpan(false)}}></div>     
            <ul className={span === false?"nav__menu":"nav__menu nav__menu-active"}>
                <li><a href='#1' onClick={() => {
                    navigate('/')
                    span===false?setSpan(true):setSpan(false)
                }}>Преимушества</a></li>
                <li><a href='#2' onClick={() => {
                    navigate('/')
                    span===false?setSpan(true):setSpan(false)
                }}>О приложении</a></li>
                <li><a href='#3' onClick={() => {
                    navigate('/')
                    span===false?setSpan(true):setSpan(false)
                }}>Тарифы</a></li>
            </ul>    
            <button className="burger" onClick={()=>{span===false?setSpan(true):setSpan(false)}}>
                <span className={span === false?"top":"top top-active"}></span>
                <span className={span === false?"mid":"mid mid-active"}></span>
                <span className={span === false?"bot":"bot bot-active"}></span>
            </button>  
            <div className='empty-spase'>
            
            </div>
        </nav>
        </div>
    );
};

export default Navbar;