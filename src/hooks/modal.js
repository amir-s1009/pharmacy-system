import { useState } from "react"


export function useModal(initial) {
    const [isOpen, setIsOpen] = useState(initial);

    const  handleOpen = () => {
        if(!isOpen)
            setIsOpen(true);
    }

    const handleClose = () => {
        if(isOpen){
            setIsOpen(false);
        }
    }

    return [isOpen, handleOpen, handleClose];
}
