import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import './form.css'
import oppaBanner from '../../img/oppaBanner.png'
import cloud from '../../img/cloud.svg'
import { useState } from "react";
import axios from "axios";

function Form() {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            Name: name,
            Phone: phone
        }

        axios.post('https://sheet.best/api/sheets/93a33348-f545-4509-ace9-9060dfa283fc', data).then((res) => {
            console.log(res);
            setName('')
            setPhone('')
        })
    }

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
                        <form onSubmit={handleSubmit}>
                            <p className="form_p">Как вас зовут</p>
                            <input type="text" placeholder="Ваше Имя" onChange={e => setName(e.target.value)} value={name}/>
                            <p className="form_p">Ваш номер телефона</p>
                            <input type="text" placeholder="Ваш номер телефона" onChange={e => setPhone(e.target.value)} value={phone}/>
                            <input className="form_submit" type="submit" placeholder="Отправить"/>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default Form