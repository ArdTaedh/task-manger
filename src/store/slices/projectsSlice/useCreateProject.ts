import axios from "axios"

const loginAction = async () => {

    const response = await axios.post('/api/projects/create', {
        userId: id,
        projectName: projectName
    })
    const result = await response.data

    return result
}