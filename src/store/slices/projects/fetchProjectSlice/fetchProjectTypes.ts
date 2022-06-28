export type fetchProjectTypes = {
    loading: 'idle' | 'loading',
    projects: [] | null,
    isError: boolean,
    error: string | null
}