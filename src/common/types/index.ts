import {PropsWithChildren} from "react";

export interface IConfirmTemplateProps extends PropsWithChildren {
    title: string,
    text: string,
    startTimer: number
}

export interface IModalProps extends PropsWithChildren {
    open: boolean;
    disabled?: boolean;
    confirm: () => void;
    closeModal: () => void;
    title: string;
    text: string;
    buttonText: string
}