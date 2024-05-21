import './main.css'
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import main_img from '../../img/main_img.png'
import icon_1 from '../../img/icon_1.png'
import icon_2 from '../../img/icon_2.png'
import icon_3 from '../../img/icon_3.png'
import icon_4 from '../../img/icon_4.png'
import icon_5 from '../../img/icon_5.png'
import icon_6 from '../../img/icon_6.png'

function Main() {
    return (
        <div className="wrapper">
            <div className='oppa__possibility section__padding' id='possibility'>
                <motion.div
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.2 }}
                    
                className="oppa__possibility-content">
                    <h1 className='gradient__text'>Используйте Oppa на полную мощь</h1>
                </motion.div>
                <div className="oppa__possibility-content">
                    <p>Мы предоставляем инновационное решение для владельцев автомобилей, которые хотят сэкономить время, деньги и упростить процесс поиска автозапчастей и сервисных центров.</p>
                    <div className='row-links'>
                        <a href="https://play.google.com/store/apps/details?id=com.oppa.kg.oppa_kg" className='android'></a>
                        <a href="https://apps.apple.com/kg/app/oppa/id6471983794" className='ios'></a>
                    </div>
                </div>
            </div>
            <div className="section__padding">
                <div className="main-img">
                    <img src={main_img} alt="main img" />
                </div>
            </div>
            <div className='section__padding'>
                <div className="icons" id='1'>
                    <div className="icons__flex">
                        <motion.div
                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.2 }}
                        
                        className="icons__flex-items">
                            <img src={icon_1} alt="IT PARK" />
                            <p>Мгновенный поиск запчастей</p>
                        </motion.div>
                        <motion.div
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.2 }} 
                        
                        className="icons__flex-items">
                            <img src={icon_2} alt="IT PARK" />
                            <p>Простой подбор автомастера</p>
                        </motion.div>
                        <motion.div
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.2 }}
                        
                        className="icons__flex-items">
                            <img src={icon_3} alt="IT PARK" />
                            <p>Промокоды для пользователей</p>
                        </motion.div>
                        <motion.div
                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.2 }}
                            
                            className="icons__flex-items">
                            <img src={icon_4} alt="IT PARK" />
                            <p>Простота и удобство сервиса</p>
                        </motion.div>
                        <motion.div
                            variants={fadeIn("up", 0.1)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.2 }}
                        
                        className="icons__flex-items">
                            <img src={icon_5} alt="IT PARK" />
                            <p>Огромный выбор предложений</p>
                        </motion.div>
                        <motion.div
                            variants={fadeIn("up", 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.2 }}

                            className="icons__flex-items">
                            <img src={icon_6} alt="IT PARK" />
                            <p>Выбор подрядчика</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main