import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import './bussines.css'

function Bussines() {
    return (
        <div className="wrapper">
            <div className="bs_parent section__padding">
                <div className="bs_title" id="3">
                    <h2>Цены для Бизнес аккаунта</h2>
                    <p>Оппа помогает бизнесу с продажей и реализацией услуг</p>
                </div>

                <div className="bs_cards">
                    
                    <div className="bs_card">
                        <h3>Standart</h3>
                        <p>Описание тарифа</p>
                        <h2>0 c</h2>
                        <a href="#">Скачать приложение</a>
                        <div className="bs_line"></div>
                        <ul>
                            <li><IoIosCheckmarkCircleOutline /> <p>Магазин (марки машин, строй оборудование, шины, диски и аксессуары).</p></li>
                            <li><IoIosCheckmarkCircleOutline /> <p>Не ограниченное количество сервисов</p></li>
                        </ul>
                    </div>

                    <div className="bs_card">
                        <h3>Premium</h3>
                        <p>Описание тарифа</p>
                        <h2>2 000 сом</h2>
                        <a href="#">Скачать приложение</a>
                        <div className="bs_line"></div>
                        <ul>
                            <li><IoIosCheckmarkCircleOutline /> <p>Не ограниченное количество магазинов.</p></li>
                            <li><IoIosCheckmarkCircleOutline /> <p>Не ограниченное количество сервисов.</p></li>
                            <li><IoIosCheckmarkCircleOutline /> <p>Ваш аккаунт выходит первым для клиентов.</p></li>
                        </ul>
                    </div>

                    <div className="bs_card bs_card_dark">
                        <h3>VIP</h3>
                        <p>Описание тарифа</p>
                        <h2>1 000 сом</h2>
                        <a href="#">Скачать приложение</a>
                        <div className="bs_line"></div>
                        <ul>
                            <li><IoIosCheckmarkCircleOutline /> <p>3 магазина</p></li>
                            <li><IoIosCheckmarkCircleOutline /> <p>Не ограниченное количество сервисов</p></li>
                            <li><IoIosCheckmarkCircleOutline /> <p>Ваш аккаунт выходит сразу после премиум.</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bussines