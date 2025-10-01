// stores/account.ts
import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
import axios from 'axios'
import { ref } from 'vue'
import router from '../router'

interface User {
    id: number
    name: string
    email: string
}

const API_URL = import.meta.env.VITE_API_URL

export const useAccountStore = defineStore('account', () => {
    const user = ref<User | null>(null)
    const token = ref<string | null>(Cookies.get('token') || null)

    const login = async (username: string, password: string) => {
        try {
            const res  = await axios.post(`${API_URL}/auth/login/`, {
                username,
                password
            })
            token.value = res.data.access
            Cookies.set('token', res.data.access)
            return res
        } catch (err) {
            console.error(err)
            throw err
        }
    }

    const logout =() => {
        router.push({ name: 'login' })
        token.value = null
        user.value = null
        Cookies.remove('token')
    }

    return {
        user,
        token,
        login,
        logout
    }
})
