import axios from "axios"
import { useState } from "react"


const useFetch = (url) => {

    const [infoApi, setinfoApi] = useState()
    const [haserror, setHaserror] = useState(false)

    const getApi= ()=>{

        axios.get(url)
            .then(res=>{
                setinfoApi(res.data)
                setHaserror(false)
            })
            .catch(err=>{
                setHaserror(true)
            })

    }
        return [infoApi, getApi, haserror, setinfoApi]
}

export default useFetch