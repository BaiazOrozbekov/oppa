import logo from '../../img/logo.svg'
import './footer.css'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




const Footer = () => {
    const navigate = useNavigate()
    return (
        <div className="wrapper">
            <div className='oppa__footer section__padding'>
            <div className="oppa__footer-links">
                <div className="oppa__footer-links_logo">
                    <img src={logo} alt="logo" />
                    <p>С "Oppa" вы можете искать детали удобно, не выходя из дома, на работе или даже во время отдыха. Забудьте о долгих поисках и неопределенности. "OPPA" - здесь, чтобы сделать вашу жизнь проще и автомобильный опыт был ещё более приятным!</p>
                </div>
                <div className="oppa__footer-links_div">
                    <h4>Документы</h4>
                    <p><a href='privacy-policy' onClick={() => navigate('/privacy-policy')}>Политика конфидециальности</a></p>
                    <p><a href='contract-offer' onClick={() => navigate('/contract-offer')}>Публичная офферта</a></p>
                    <p><a href='return-policy'  onClick={() => navigate('/return-policy')}>Правила возврата средств</a></p>
                </div>
                <div className="oppa__footer-links_div">
                    <h4>Для связи</h4>
                    <p><FaPhoneAlt /> 0552005001</p>
                    <p><FaLocationDot /> Ошская область, село Таштак</p>
                    <p><IoMail /> oppa.avto@gmail.com</p>
                </div>
                <div className="oppa__footer-links_div">
                    <h4>Cоц.Сети</h4>
                    <p><FaFacebook /> Facebook</p>
                    <p><AiFillInstagram /> Instagram</p>
                    <p><FaTwitter /> Twitter</p>
                </div>
            </div>
            <div className="oppa__footer-copyright">
                <p>Copyright © 2020. Oppa . All rights reserved.</p>
            </div>
        </div>
        </div>
    )
}

export default Footer