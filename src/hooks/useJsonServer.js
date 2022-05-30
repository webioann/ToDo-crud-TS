import { useState,useEffect } from 'react'
import axios from 'axios'
import { useAppSelector,useAppDispatch } from '../Redux/store'
import { get_data } from '../Redux/data_reducer';

export const useJsonServer = () => {  //= this function gets data from local json-server(result in axios-start/server/data.json) =
    
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const dispatch = useAppDispatch()
    const url = useAppSelector(state => state.redux.url)

    useEffect(() => {
        try{
            fetch(url)
                .then((response) => response.json())
                .then((results) => {
                    dispatch(get_data(results))
                    setError(null)
                    setLoading(false)
            })
        }
        catch(error){
            setError(true)
            console.error('ERROR',error.message) 
        }
        finally{
            setLoading(false)
        }
    },[])

    return { error,loading }
};
