import { useEffect, useState } from "react";

export function useTranslateYTransition(show, from, to){

    const [translateY, setTranslateY] = useState(from);

    useEffect(() => {

        if(show){
            setTranslateY(to);
        }
        else{
            setTranslateY(from);
        }
    
        return () => setTranslateY(from);

    }, [show])
    
    return translateY;

}