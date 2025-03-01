import { useLoadingContext } from "@/context/loading";
import { useEffect, useState } from "react";

export function useFetchData(url, initialData){

    const setIsPending = useLoadingContext();
    const [data, setData] = useState(initialData);

    useEffect(()=> {
        async function getData() {
            setIsPending(true);
            const response = await fetch(`http://localhost:3000/api/${url}`, {credentials:"include"});
            const fetched_data = await response.json();
            setData(fetched_data);
            setIsPending(false);
          }
          getData();
    }, [url]);

    return data;
}