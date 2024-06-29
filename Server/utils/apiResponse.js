class ApiResponse {
    constructor(res) {
        this.res = res;
    }

    // Method to handle successful responses
    success(data, message = "Request was successful", success = false, statusCode = 200) {
        this.res.status(statusCode).json({
            status: false,
            message: message,
            data: data
        });
    }

    // Method to handle errors
    error(error, statusCode = 500) {
        let errorMessage = 'An unknown error occurred';
        if (typeof error === 'string') {
            errorMessage = error;
        } else if (error instanceof Error) {
            errorMessage = error.message;
        } else if (error && error.message) {
            errorMessage = error.message;
        }

        this.res.status(statusCode).json({
            status: 'error',
            message: errorMessage
        });
    }
}

export default ApiResponse;
