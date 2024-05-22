import logo from '../../img/logo.svg'
import './footer.css'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { IoLogoWhatsapp } from "react-icons/io";




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
                    <p><a href="tel:996552005001"><FaPhoneAlt /> 0552005001</a></p>
                    <p><a href="https://www.google.com/maps/place/%D0%9E%D1%88%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D1%81%D0%B5%D0%BB%D0%BE+%D0%A2%D0%B0%D1%88%D1%82%D0%B0%D0%BA/data=!4m2!3m1!1s0x38bc4a73ccff755d:0xfd343dcb30be4d78?sa=X&ved=1t:242&ictx=111&cshid=1716371916919551"><FaLocationDot /> Ошская область, село Таштак</a></p>
                    <p><a href="mailto:oppa.avto@gmail.com"><IoMail /> oppa.avto@gmail.com</a></p>
                </div>
                <div className="oppa__footer-links_div">
                    <h4>Cоц.Сети</h4>
                    <p><a href='https://www.instagram.com/oppa.kgz/'><AiFillInstagram /> Instagram</a></p>
                    <p><a href='https://wa.me/+996552005001'><IoLogoWhatsapp /> WhatsApp</a></p>
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