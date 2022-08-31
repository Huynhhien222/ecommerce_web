const apiSuccess = (res, message = 'success', data = [], status = 200) => {
    let response = {
        status: 'success',
        message,
        data,
    }

    return res.status(status).json(response)
}

const apiError = (res, message = 'success', data = [], status = 400) => {
    let response = {
        status: 'error',
        message,
        data,
    }

    return res.status(status).json(response)
}

export { apiSuccess, apiError }
