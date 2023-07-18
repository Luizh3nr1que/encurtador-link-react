import axios from 'axios';

export const key = '92d3c00770d5e5ed839fb991cb6efa0695202f1e';

const api = axios.create({
    baseURL: "https://api-ssl.bitly.com/v4", headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api