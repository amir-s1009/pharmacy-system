'use client'

import styles from './modal.module.css';
import { useTranslateYTransition } from '@/transitions/translateYTransition';

function Modal({children, isOpen, handleClose}) {

    const translateY = useTranslateYTransition(isOpen, "-100%", "0%");

    return(
        <div style={{transform:`translateY(${translateY})`}} onClick={handleClose} className={styles.modalC}>{isOpen && children}</div>
    )
}

export default Modal