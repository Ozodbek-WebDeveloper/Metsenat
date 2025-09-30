import  axios from '@/services/axios.config.ts'

export const  getDashboard = async  () =>{
    try {
        return  axios.get('/dashboard/')
    } catch (error){
        console.log(error)
    }
}