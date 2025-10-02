import  axios from '@/services/axios.config.ts'
import type {ISponsorPaging} from "@/types.ts";

export const  getDashboard = async  () =>{
    try {
        return  axios.get('/dashboard/')
    } catch (error){
        console.log(error)
    }
}

export  const  getSponsor = async  (payload:ISponsorPaging) =>{
    try {
        return await axios.get(`/sponsor-list/`,{
            params:payload,
        })
    } catch (error){
        console.log(error)
    }
}