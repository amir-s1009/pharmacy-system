'use client'

import Loading from "@/components/loading/loading";
import { createContext, useState , useContext} from "react"

const LoadingContext = createContext();

export function LoadingContextProvider({children}){

    const [isLoading, setIsLoading] = useState(false);


    return(
        <LoadingContext.Provider value={setIsLoading}>
            {isLoading && <Loading />}
            {children}
        </LoadingContext.Provider>
    )
}

export function useLoadingContext(){
    const setIsLoading = useContext(LoadingContext);
    return setIsLoading;
}