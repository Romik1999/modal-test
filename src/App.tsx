import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
    const [open, setOpen] = useState(false)
    const [seconds, setSeconds] = useState(5);
    const [timerActive, setTimerActive] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [isConfirm, setIsConfirm] = useState(false)
    const openModal = () => {
        if (!isConfirm) {
            setOpen(true)
            setTimerActive(true)
        } else {
            alert('Действие выполнено!')
        }
    }

    const closeModal = () => {
        setOpen(false)
        setSeconds(5)
        setTimerActive(false)
    }

    const confirm = () => {

        setOpen(false)
        alert('Действие выполнено')
        setIsConfirm(true)

    }

    useEffect(() => {
        if (seconds > 0 && timerActive) {
            setTimeout(setSeconds, 1000, seconds - 1);
            setDisabled(true)
        } else {
            setTimerActive(false);
            setDisabled(false)
        }
    }, [seconds, timerActive]);

    return (
        <div className="App">
            <button onClick={openModal}>Выполнить действие</button>
            <div>isConfirm: {isConfirm}</div>
            <div>seconds: {seconds}</div>
            {
                open && (
                    <>
                        <div className="fade"></div>
                        <div className="modal">
                            <div className="modal__content">
                                <div className="modal__title">Согласие с правилами</div>
                                <div className="modal__closer" onClick={closeModal}></div>
                                <div className="modal__text">
                                    Для данной функции применяются особые условия и правила пользования, их необходимо
                                    подтвердить, нажав на кнопку Подтвердить»
                                </div>
                                <div className="modal__buttons">
                                    <button
                                        className="modal__button btn btn--red"
                                        onClick={closeModal}
                                    >
                                        Отмена
                                    </button>
                                    <button
                                        className="modal__button btn btn--green"
                                        onClick={confirm}
                                        disabled={disabled}
                                    >
                                        Подтвердить {seconds > 0 ? `(${seconds})` : ''}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    );
}

export default App;
