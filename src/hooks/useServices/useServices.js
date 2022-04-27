import { useEffect, useState } from "react"

const useServices = () => {
    const [services, setServices] =useState([])
    useEffect( () => {
        const url=`https://guarded-springs-93140.herokuapp.com/service`
        fetch(url)
        .then(res => res.json())
        .then(data=> setServices(data))
   
      },[])
      return [services, setServices]
}

export default useServices;