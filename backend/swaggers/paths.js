import { userPaths } from './users.js'
import { authPaths } from './auth.js'

const paths = {
    ...userPaths,
    ...authPaths,
}

export default paths
