import axios from 'axios'

export const Post = async (endpoint = '', data) => {
    try {
        const res = await axios.post(endpoint, data);
        return res;
    } catch (error) {
        console.log(error);
    }
}