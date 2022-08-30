const userComponents = {
    user: {
        required: ['name', '_id', 'companies'],
        properties: {
            _id: {
                type: 'integer',
                uniqueItems: true,
            },
            isPublic: {
                type: 'boolean',
            },
            name: {
                type: 'string',
            },
            books: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string',
                        },
                        amount: {
                            type: 'number',
                        },
                    },
                },
            },
            companies: {
                type: 'array',
                items: {
                    type: 'string',
                },
            },
        },
    },
}

const userPaths = {
    '/users': {
        get: {
            tags: ['Users'],
            summary: 'Get all users in system',
            responses: {
                200: {
                    description: 'OK',
                    schema: {
                        $ref: '#/components/userComponents/user',
                    },
                },
            },
        },
    },
}

export { userPaths, userComponents }
