import axios from "axios";
import { useQuery } from "react-query";

const fetchUser = async (id: string) => {
    const request = await axios.get(`/api/user/${id}`)
    const response = await request.data

    return response
}

export const useFetchUser = (id: string) => {
    const { data, error } = useQuery(
        ['fetchUser', id],
        () => fetchUser(id!), 
        {
            enabled: !!id
        }
    )

    return { data, error }
}