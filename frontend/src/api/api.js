import axios from 'axios'
export const local = 'http://localhost:5000'
export const production = '/'
export const api = axios.create({
    baseURL: production,
    withCredentials: true,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    }
})