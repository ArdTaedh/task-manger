import axios from "axios"
import { useMutation } from "react-query"


const loginAction = async (id: string, projectName: string) => {

    const response = await axios.post('/api/projects/create', {
        id: id,
        projectName: projectName
    })
    const result = await response.data

    return result
}

export const useCreateProject = () => {
    const { mutate, isLoading, error } = useMutation(loginAction, {

        onSuccess: (result: any) => {
            // if (result.message === 'success') {
            //     router.push(`/home/${result.id}`)
            // }
            return result.message
        },
        onError: (err: any) => {
            const error = err.response.data.message
            return error
        },
    })

    return { mutate, isLoading, error }

}