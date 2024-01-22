import React, {FC, useState} from 'react';
import Modal from "../modal";
import {IConfirmTemplateProps, IModalProps} from "../../common/types";

const ConfirmTemplate: FC<IConfirmTemplateProps> = ({title, text, startTimer}) => {
    const [open, setOpen] = useState(false)
    const [isConfirm, setIsConfirm] = useState(false)
    const [disableCount, setDisableCount] = useState(startTimer);
    const [intervalId, setIntervalId] = useState<number | null>(null);

    const openModal = () => {
        if (!isConfirm) {
            const intervalId = setInterval(() => {
                setDisableCount((prev) => {
                    const newCount = prev - 1;

                    if (newCount === 0) {
                        clearInterval(intervalId);
                        setIntervalId(null);
                    }

                    return newCount;
                });
            }, startTimer * 1000);

            setIntervalId(intervalId);
            setOpen(true);
        } else {
            alert('Действие выполнено!')
        }
    }

    const closeModal = () => {
        if (intervalId) clearInterval(intervalId);
        setOpen(false);
        setDisableCount(startTimer);
    }

    const confirm = () => {
        setOpen(false)
        alert('Действие выполнено')
        setIsConfirm(true)
    }

    const modalProps: IModalProps = {
        open: open,
        title: title,
        text: text,
        confirm,
        closeModal,
        buttonText: disableCount === 0 ? "Подтвердить" : `Подтвердить (${disableCount})`,
        disabled: disableCount > 0
    };

    return (
        <>
            <button onClick={openModal}>Выполнить действие</button>
            <Modal {...modalProps}/>
        </>
    );
};

export default ConfirmTemplate;