export type createCardTypes = {
    isLoading: "idle" | "loading",
    isSuccess: boolean,
    isError: boolean,
    error: string | null
}