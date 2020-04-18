import {useState, useEffect} from 'react'

const useFetch = (url, initialState, options) =>{
    const [data,setData] = useState (initialState)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getData = () => {
       setLoading(true)
       fetch(url)
       .then(response => response.json())
       .then(response => {
           setData(response)
           setLoading(false)
       })
       .catch (error => {
           setLoading(false)
           setError(error)
       })
    }
    useEffect(() => {
        getData()
    }, [])
    return {
        data,
        loading,
        error
    }
}

export default useFetch