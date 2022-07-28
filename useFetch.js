import { useEffect, useState } from "react";

export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoadind: true,
        hasError: null,
    })

    const getFech = async () => {

        setState({
            ...state,
            isLoadind: true,
        })

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoadind: false,
            hasError: null,
        })
    }
    
    
    
    useEffect(() => {
        getFech();
    }, [url])
    



    return {
        data:      state.data,
        isLoadind: state.isLoadind,
        hasError:  state.hasError,
    };

}
