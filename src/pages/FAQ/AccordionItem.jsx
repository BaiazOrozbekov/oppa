import { useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import { LuDot } from "react-icons/lu";


const AccordionItem = ({faqItem, onClick, isOpen}) => {
    const itemRef = useRef(null)
    return (
        <li className='accardion-item'>
            <button className='accardion-header' onClick={() => onClick()}>
                <h4 className={`${isOpen ? 'active-title' : ''}`}>{faqItem.q}</h4>
                <FaArrowUp className={`accardion-arrow ${isOpen ? 'active' : ''}`}/>
            </button>
            <div className='accardion-collapse'
                style={
                    isOpen ? {height: itemRef.current.scrollHeight} : {height: '0px'}
                }
            >
                <div className='accardion-body' ref={itemRef}>
                    {
                        faqItem.text
                        ?
                        <p>{faqItem.text}</p>
                        :
                        null
                    }
                    {
                        faqItem.text2
                        ?
                        <p className="accordion_img">{faqItem.text2}</p>
                        :
                        null
                    }
                    {
                        faqItem.img
                        ?
                        <div className="accordion_img">
                            <img src={faqItem.img} alt="image"/>
                        </div>
                        :
                        null
                    }

                    {
                        faqItem.li
                        ?
                        <ul className="accordion_ul">
                            {faqItem.li.map(el => <li key={el}><LuDot /> <p>{el}</p></li>)}
                        </ul>
                        :
                        null
                    }

                    </div>
            </div>
        </li>
    )
};


export default AccordionItem;