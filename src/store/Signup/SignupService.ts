import axios from "axios";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

// export const signup = async (data: object) => {
//     const router = useRouter()
//     const response = await axios.post('/api/signup', data)

//     const result = await response.data
//     console.log(result)

//     if (result.message === 'Created User!') {
//         // window.location.href = `${window.location.origin}/home`;
//         router.push('/login')
//     }
// }
