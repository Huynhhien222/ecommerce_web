const userComponents = {
    users: {
        properties: {
            status: {
                type: 'string',
                example: 'success',
            },
            message: {
                type: 'string',
                example: 'success',
            },
            data: {
                type: 'array',
                example: [
                    {
                        _id: '630c30c10db13f2294295c07',
                        name: 'user1',
                        email: 'user1@example.com',
                        isAdmin: false,
                        createdAt: '2022-08-31T03:19:55.494Z',
                        updatedAt: '2022-08-31T03:19:55.494Z',
                    },
                    {
                        _id: '630c30c10db13f2294295c08',
                        name: 'user2',
                        email: 'user2@example.com',
                        isAdmin: false,
                        createdAt: '2022-08-31T03:19:55.494Z',
                        updatedAt: '2022-08-31T03:19:55.494Z',
                    },
                ],
            },
        },
    },
    user: {
        properties: {
            status: {
                type: 'string',
                example: 'success',
            },
            message: {
                type: 'string',
                example: 'success',
            },
            data: {
                type: 'object',
                example: {
                    _id: '630c30c10db13f2294295c07',
                    name: 'user1',
                    email: 'user1@example.com',
                    isAdmin: false,
                    createdAt: '2022-08-31T03:19:55.494Z',
                    updatedAt: '2022-08-31T03:19:55.494Z',
                },
            },
        },
    },
}

const userPaths = {
    '/api/admin/users': {
        get: {
            tags: ['Users'],
            summary: 'Get all users in system',
            responses: {
                200: {
                    description: 'Success',
                    schema: {
                        $ref: '#/components/userComponents/user',
                    },
                },
                400: {
                    description: 'Error',
                    schema: {
                        $ref: '#/components/errors/occurredError',
                    },
                },
            },
        },
    },
    '/api/admin/users/{id}': {
        get: {
            tags: ['Users'],
            summary: 'Get user by ID',
            responses: {
                200: {
                    description: 'Success',
                    schema: {
                        $ref: '#/components/userComponents/user',
                    },
                },
                400: {
                    description: 'Error',
                    schema: {
                        $ref: '#/components/errors/occurredError',
                    },
                },
                404: {
                    description: 'Error',
                    schema: {
                        properties: {
                            status: {
                                type: 'string',
                                example: 'error',
                            },
                            message: {
                                type: 'string',
                                example: 'User not found',
                            },
                            data: {
                                type: 'array',
                                example: [],
                            },
                        },
                    },
                },
            },
        },
    },
}

export { userPaths, userComponents }
