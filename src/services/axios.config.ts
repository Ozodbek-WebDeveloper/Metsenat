import  axios,{AxiosInstance} from 'axios'
import cookies from 'js-cookie'

const  instance:AxiosInstance = axios.create({

    baseURL:import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

instance.interceptors.request.use((config) =>{
    const myToken = cookies.get('token')
    if (myToken){
        config.headers.Authorization = `Bearer ${myToken}`
    }
    return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default instance;
