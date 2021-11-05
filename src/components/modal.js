import React from "react";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import m from "./Body.module.css"
import { Image } from "react-bootstrap";



function Madal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className={m.butnsm} variant="secondary" onClick={handleShow}>
                подробнее
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ИС-7</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image style={{ width: "100%" }} src="https://avatars.mds.yandex.net/get-zen_doc/28845/pub_5e4e6120386b1c555647e3cd_5e4e634da37e4678c176a650/scale_1200" />
                    <h5>Описание:</h5>
                    <p>Советский тяжёлый танк десятого уровня, обладает великолепной лобовой бронёй и хорошей
                        подвижностью, однако не самым мощным орудием. Предназначен для решения самых разных
                        задач на поле боя.</p>
                    <h5>Характеристики:</h5>
                    <ul><b>Огневая мощь:</b>
                        <li> Орудие: 130 мм С-70 </li>
                        <li> Боекомплект: 30 шт. </li>
                        <li> Урон: 490 / 490 / 640 ед</li>
                        <li> Бронепробитие: 250 / 303 / 68 мм </li>
                        <li> Скорострельность: 4.38 мин-1 </li>
                        <li> Средний урон в минуту: 2146 ед/мин </li>
                        <li> Время сведения: 2.9 с </li>
                        <li> Разброс на 100 м: 0.4 м</li>
                        <li> Скорость ГН: 25 °/с </li>
                        <li> Скорость ВН: 26 °/с </li>
                        <li> Углы ГН: 360°</li>
                        <li> Углы ВН: -6…+18° </li>
                    </ul>
                    <ul><b>Живучесть:</b>
                        <li>Прочность: 2480 ед</li>
                    </ul>
                    <ul><b>Мобильность:</b>
                        <li>Масса/пред. масса: 29.34 / 70.95 т</li>
                        <li>Мощность двигателя: 1200 л.с.</li>
                        <li>Удельная мощность: 40.9 л.с./т</li>
                        <li>Макс. скорость: 59.6 / 15 км/ч</li>
                        <li>Скорость поворота шасси: 28 °/с</li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Madal;