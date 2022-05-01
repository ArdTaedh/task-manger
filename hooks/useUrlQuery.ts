import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useUrlQuery = () => {
    const [url, setUrl] = useState("")

    const router = useRouter()
    const { id } = router.query
    
    useEffect(() => {
        router.isReady ? setUrl(id as string) : ''
    
    }, [router.isReady, id, setUrl]);

    return {url}
}

export default useUrlQuery