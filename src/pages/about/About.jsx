/* eslint-disable react/no-unescaped-entities */
import './about.css'
import about_1 from '../../img/about_1.png'
import about_2 from '../../img/about_2.png'
import about_3 from '../../img/about_3.png'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import cloud from '../../img/cloud.svg'
import cloud__2 from '../../img/cloud__2.svg'

function About() {
    return (
        <div className="wrapper">
            <div className='oppa__possibility_2 section__padding' id='possibility'>
                <div className="oppa__possibility_2-content" id='2'>
                    <motion.div
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.2 }}
                    
                    className="oppa__possibility_2-image">
                        <div className='about_cloud_1'>
                            <img src={about_1} alt="possibility_2" />
                            <img className='about_cloud' src={cloud} alt="cloud_img" />
                        </div>
                    </motion.div>
                </div>
                <div className="oppa__possibility_2-content">
                    <div className='oppa__possibility_2-content_2'>
                        <h1 className='gradient__text'>Мгновенный поиск и доступ к поставщикам</h1>
                        <p>Забудьте о бесконечных поездках по магазинам и рынкам. С приложением 'Оппа' вы можете найти нужные автозапчасти и сервисы всего в несколько кликов.</p>
                        <div className='row-links'>
                            <a href="https://play.google.com/store/apps/details?id=com.oppa.kg.oppa_kg" className='android'></a>
                            <a href="https://apps.apple.com/kg/app/oppa/id6471983794" className='ios'></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='oppa__possibility_2 section__padding oppa__possibility_2_reversse' id='possibility'>
                <div className="oppa__possibility_2-content">
                    <motion.div
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.2 }}

                    className="oppa__possibility_2-image">
                        <div className='about_cloud_1'>
                            <img src={about_2} alt="possibility_2" />
                            <img className='about_cloud_2' src={cloud__2} alt="cloud_img" />
                        </div>
                    </motion.div>
                </div>
                <div className="oppa__possibility_2-content">
                    <div className='oppa__possibility_2-content_2'>
                        <h1 className='gradient__text'>Прямой контакт с продавцами</h1>
                        <p>Мы связываем вас напрямую с продавцами автозапчастей. Получайте уведомления, когда нужные запчасти доступны у ближайших поставщиков.</p>
                        <ul className='oppa__possibility_list'>
                            <li><IoIosCheckmarkCircleOutline /> Не нужно разбираться с поиском поставщика</li>
                            <li><IoIosCheckmarkCircleOutline /> Только проверенные магазины</li>
                            <li><IoIosCheckmarkCircleOutline /> Лучшие запчасти на рынке</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className='oppa__possibility_2 section__padding' id='possibility'>
                <div className="oppa__possibility_2-content">
                    <motion.div
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.2 }}
                        
                    className="oppa__possibility_2-image">
                        <div className='about_cloud_1'>
                            <img src={about_3} alt="possibility_2" />
                            <img className='about_cloud' src={cloud} alt="cloud_img" />
                        </div>
                    </motion.div>
                </div>
                <div className="oppa__possibility_2-content">
                    <div className='oppa__possibility_2-content_2'>
                        <h1 className='gradient__text'>Простота и удобство</h1>
                        <p>'Оппа' создано с учетом потребностей пользователей. Интуитивный интерфейс и легкая навигация делают его идеальным инструментом для всех владельцев автомобилей.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About