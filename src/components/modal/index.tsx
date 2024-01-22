import React, {FC} from 'react';
import {IModalProps} from "../../common/types";
import './style.css';

const Modal: FC<IModalProps> = ({
                                    title,
                                    text,
                                    open,
                                    confirm,
                                    closeModal,
                                    disabled,
                                    buttonText
                                }) => {
    return (
        <>
            {open && (
                <>
                    <div className="fade" onClick={closeModal}></div>
                    <div className="modal">
                        <div className="modal__content">
                            <div className="modal__title">{title}</div>
                            <div className="modal__closer" onClick={closeModal}></div>
                            <div className="modal__text">{text}</div>
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
                                    {buttonText}
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Modal;