import axios from 'axios';

export const key = 'a4e943fadcddf08b3af10ab93d0036a3fed951d9';

const api = axios.create({
    baseURL: "https://api-ssl.bitly.com/v4", headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api


//codigo de api acabou em 18/07 poderar usar 18/08 = 92d3c00770d5e5ed839fb991cb6efa0695202f1e
