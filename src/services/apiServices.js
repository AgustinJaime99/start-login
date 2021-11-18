import axios from 'axios'

export const Post = async (endpoint = '', data) => {
    try {
        const res = await axios.post(endpoint, data);
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const URL_API = "https://api-flordeemprendedora.start-7.com/api/auth/login/"