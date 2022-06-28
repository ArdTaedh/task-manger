export type CreateListTypes = {
    isLoading: 'idle' | 'loading'
    isSuccess: boolean,
    isError: boolean,
    error: string | null
}