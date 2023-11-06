import axios from 'axios';

const apiEndPoint = "http://localhost:8000/api/v1/task/"

export const postTask = async obj => {
    try {
        const {data} = await axios.post(apiEndPoint, obj)
        return data
    } catch (error) {
        console.log(error)
    }
}