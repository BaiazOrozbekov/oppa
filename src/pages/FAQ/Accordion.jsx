import './accordion.css'
import { useState } from "react";
import AccordionItem from "./AccordionItem.jsx";
import pay from '../../img/pay.png'

const Accordion = () => {

    const [openId, setId] = useState(null)

    const faq = [
        {
            q: 'Какими платежными системами можно оплатить ?',
            text: 'У нас простые и удобные варианты оплаты: принимаем к оплате карты Visa, Mastercard, а также систему Элкарт',
            img: pay
        },
        {
            q: 'Как стать партнером ?',
            text: 'Зайдите на страницу «создать» и укажите Имя >>  номер телефона >> придумайте пароль и затем ознакомьтесь с политикой конфиденциальности и обработки данных . Нажмите “Далее” и вам на указанный телефон будет отправлен код подтверждения, который необходимо будет ввести в появившемся поле.',
            text2: ' Номер телефона в дальнейшем будет использоваться как ваш логин входа в личный кабинет.'
        },
        {
            q: 'Как получить баннер в приложении ?',
            text: 'Зайдите на страницу «создать» и укажите Имя >>  номер телефона >> придумайте пароль и затем ознакомьтесь с политикой конфиденциальности и обработки данных . Нажмите “Далее” и вам на указанный телефон будет отправлен код подтверждения, который необходимо будет ввести в появившемся поле.',
            text2: 'Номер телефона в дальнейшем будет использоваться как ваш логин входа в личный кабинет.'
        },
        {
            q: 'Как зарегистрироваться ?',
            text: 'Зайдите на страницу «создать» и укажите Имя >>  номер телефона >> придумайте пароль и затем ознакомьтесь с политикой конфиденциальности и обработки данных . Нажмите “Далее” и вам на указанный телефон будет отправлен код подтверждения, который необходимо будет ввести в появившемся поле.',
            text2: 'Номер телефона в дальнейшем будет использоваться как ваш логин входа в личный кабинет.'
        },
        {
            q: 'Что делать если забыл пароль ?',
            li: [
                'Пароль можно восстановить следующим способом:',
                'На странице авторизации после ввода номера телефона нажмите ссылку «Забыли пароль?»',
                'Введите номер телефона и нажмите «Далее» • В появившемся окне введите код, отправленный на номер телефона',
                'Установите новый пароль'
            ]
        },
        {
            q: 'Какие преимущества использования личного кабинета ?',
            li: [
                'Хранение данных вашего авто в «Мой гараж»',
                'Быстрый поиск автозапчастей по всему КР',
                'Низкие цены на запчасти',
                'Более 1200 магазинов автозапчастей в онлайн режиме',
                'Большой ассортимент автозапчастей',
                'Чат с магазинами',
                'Скидки до 50% от партнеров для пользователей приложения «oppa»',
                'Поиск сервисов в вашем городе'
            ]
        },
        {
            q: 'Как найти запчасть быстрее ?',
            li: [
                'Укажите правильно все данные вашего авто',
                'Добавьте фото вашего авто и образец запчасти чтобы было больше ответов на вашу заявку',
                'Добавьте описание запчасти в комментариях',
            ]
        },
        {
            q: 'Какие преимущества для бизнеса ?',
            li: [
                'Создайте свой онлайн магазин автозапчастей',
                'Создайте свой сервис',
                'Фильтрация заявок по маркам автомобилей',
                '100+ заявок в день увеличит продажи',
                'Статистика продаж вашего магазина'
            ]
        },
        {
            q: 'Есть ли оплата и доставка через “oppa” ?',
            li: [
                'Оплата товара и доставка через «орра»  НЕ СУЩЕСТВУЕТ !!!',
                'Остерегайтесь мошенников будьте бдительны не передавайте данные неизвестным',
                'Не переводите деньги заранее , убедитесь в том что данный магазин действительно существует',
                'Производите покупку товара только после осмотра',
            ]
        },
        {
            q: 'Не можете найти название запчасти в списке поиска ?',
            li: [
                'В Категориях запчастей можете выбрать «другое» и добавьте образец фото запчасти и опишите в комментариях',
            ]
        },
        {
            q: 'Как можно пополнить баланс ?',
            li: [
                'В Категориях запчастей можете выбрать «другое» и добавьте образец фото запчасти и опишите в комментариях'
            ]
        },
        {
            q: 'Какими картами можно пополнить ?',
            li: [
                'В Категориях запчастей можете выбрать «другое» и добавьте образец фото запчасти и опишите в комментариях'
            ]
        }
    ]

    return (
        <ul className='accardion'>
            <h2>Вопросы и ответы</h2>
            {faq.map((faqItem, id) => {
                return(
                    <AccordionItem
                        onClick={() => id===openId ? setId(null) : setId(id)}
                        faqItem={faqItem}
                        isOpen={id === openId}
                        key={id}/>
                )
            })}
        </ul>
    );
};


export default Accordion;