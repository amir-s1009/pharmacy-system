'use client'

import { createContext, useState, useContext } from "react";

const SidebarContext = createContext();

export function SidebarContextProvider({children}){

    const [state, setState] = useState("-100%");

    const open = () => {
        setState("0%");
    }

    const close = () => {
        setState("-100%");
    }

    const toggle = ()=>{
        state === "0%"?close():open();
    }

    return(
        <SidebarContext.Provider value={{state, toggle}}>
            {children}
        </SidebarContext.Provider>
    )
}

export function useSidebarContext(){
    const {state, toggle} = useContext(SidebarContext);

    return [state, toggle];
}