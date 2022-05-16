export type LoginTypes = {
    isSuccess: boolean,
    loading: 'idle' | 'loading',
    isError: boolean,
    error: string | null
}