export type FetchListTypes = {
    isLoading: 'idle' | 'loading',
    lists: [] | null,
    isError: boolean,
    error: string | null
}