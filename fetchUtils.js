export async function handleHttpErrors(res) {
    if (!res.ok) {
        const errorResponse = await res.json();
        const error = new Error(errorResponse.message)
        error.status = res.status
        error.statusText = res.statusText
        error.apiError = errorResponse
        throw error
    }
    return res.json()
}