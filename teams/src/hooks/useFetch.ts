import React, { useEffect, useState } from 'react'
import { GetDataFunc } from '../functions/get';
import { ZodError, z } from 'zod';

interface routeProps {
    route: string
    refresh ?: boolean
}

const useFetch = ({route, refresh} : routeProps) => {
  const [data, setData] = useState<any[] | unknown>();
  const [error, setError] = useState<string | any[]>();
  const [isLoading, setisLoading] = useState<boolean>(false);
  const flexibleSchema = z.unknown();

  

  const fetchData = async () =>{
    try {
        setisLoading(true)
        const res = await GetDataFunc(route)
        
        const zdata = await res.data.json() 
        // validating the data against the zod schema
        const parsedData = flexibleSchema.parse(zdata);
        setData(parsedData)
        console.log(JSON.stringify(parsedData));

    }catch(error:any){
        if(error instanceof ZodError){
            setError(error.errors)
        }else{
            setError(error)
        }
       
    }finally{
        setisLoading(false)
    }
  }

  useEffect(() => {
    !route ? 
    setData([])
    :
    fetchData();
  
  }, [route, refresh])

  return [data, error, isLoading]
  

}

export default useFetch