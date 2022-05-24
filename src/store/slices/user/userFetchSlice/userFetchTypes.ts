type userFetchTypes = {
    loading: 'idle' | 'loading'
    isSuccess: boolean,
    userInfo: {} | null
    isError: boolean,
    error: null | string
}

export default userFetchTypes