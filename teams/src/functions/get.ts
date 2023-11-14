import axios, { AxiosRequestConfig } from "axios"
import { api_url } from "../components/accesserios/componentInfo"

export const GetDataFunc = async(url: string)=>{
    if(!url) return {data:[]}

    const fetchConfig : AxiosRequestConfig = {
        headers: {
            'Content-Type': ['application/json', 'text/plain', 'charset=utf-8'],
            // 'Authorization': `Bearer ${token}`
        }
      }

    const response = await axios.get(`${api_url}/${url}`)

    return response
}