const resourceMessageError = (errors = []) => {
    let messages = {}
    if (!errors.isEmpty()) {
        errors.array().forEach((error) => {
            let param = error.param
            if (messages[param]) {
                messages[param].push(error.msg)
            } else {
                messages[param] = [error.msg]
            }
        })
    }
    return messages
}

export { resourceMessageError }
