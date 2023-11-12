import axios from 'axios';

const apiEndPoint = "http://localhost:8000/api/v1/task/"

export const postTask = async obj => {
    try {
        const {data} = await axios.post(apiEndPoint, obj)
        return data
    } catch (error) {
        console.log(error)
        return {
            status: 'error',
            message: error.message,
        }
    }
}

export const getTasks = async () => {
    try {
        const {data} = await axios.get(apiEndPoint)
        return data
    } catch (error) {
        console.log(error)
        return {
            status: 'error',
            message: error.message,
        }
    }
}

export const switchTask = async (obj) => {
    try {
        const {data} = await axios.patch(apiEndPoint, obj)
        return data
    } catch (error) {
        console.log(error)
        return {
            status: 'error',
            message: error.message,
        }
    }
}

export const deleteTasks = async (ids) => {
    try {
        const {data} = await axios.delete(apiEndPoint, {data: ids})
        return data
    } catch (error) {
        console.log(error)
        return {
            status: 'error',
            message: error.message,
        }
    }
}
