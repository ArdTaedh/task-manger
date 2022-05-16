import axios from "axios";

const fetchUser = async (id: string) => {
    const request = await axios.get(`/api/user/${id}`)
    const response = await request.data

    return response
}
