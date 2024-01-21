import React, {useState} from 'react';
import './App.css';

function App() {
    const [open, setOpen] = useState(false)
    const openModal = () => {
        setOpen(true)
    }

    const closeModal = () => {
        setOpen(false)
    }

    const confirm = () => {
        setOpen(false)
    }

    return (
        <div className="App">
            <button onClick={openModal}>Выполнить действие</button>
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
                                    >
                                        Подтвердить
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
