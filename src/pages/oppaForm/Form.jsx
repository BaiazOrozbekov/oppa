import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import './form.css'
import oppaBanner from '../../img/oppaBanner.png'
import cloud from '../../img/cloud.svg'

function Form() {
    return (
        <div className='oppa__possibility_3 section__padding' id='possibility'>
                <div className="oppa__possibility_3-content">
                    <motion.div
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}    
                    viewport={{ once: true, amount: 0.2 }}

                    className="oppa__possibility_3-image">
                        <div className='about_cloud_1'>
                            <img src={oppaBanner} alt="possibility_2" />
                            <img className='about_cloud-qq' src={cloud} alt="cloud_img" />
                        </div>
                    </motion.div>
                </div>
                <div className="oppa__possibility_3-content">
                    <div className='oppa__possibility_3-content_2'>
                        <h1 className='gradient__text'>Oppa для бизнеса</h1>
                        <p>Станьте нашим партнером</p>
                        <form>
                            <p className="form_p">Как вас зовут</p>
                            <input type="text" placeholder="Ваше Имя"/>
                            <p className="form_p">Ваш номер телефона</p>
                            <input type="text" placeholder="Ваш номер телефона" />
                            <input className="form_submit" type="submit" placeholder="Отправить" />
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default Form