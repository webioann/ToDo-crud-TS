import { useState,useEffect } from 'react'
import { useAppSelector,useAppDispatch } from '../Redux/store'
import { get_data } from '../Redux/data_reducer';

export const useJsonServer = () => {  //= this function gets data from local json-server(result in axios-start/server/data.json) =
    
    const [errors, setErrors] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true)
    const dispatch = useAppDispatch()
    const url = useAppSelector(state => state.redux.url)

    useEffect(() => {
        try{
            fetch(url)
                .then((response) => response.json())
                .then((results) => {
                    dispatch(get_data(results))
                    setErrors(false)
                    setLoading(false)
            })
        }
        catch(error){
            setErrors(true)
            console.error('ERROR -->',error) 
        }
        finally{
            setLoading(false)
        }
    },[])

    return { errors,loading }
};
