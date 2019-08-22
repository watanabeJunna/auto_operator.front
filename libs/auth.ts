import { IncomingMessage } from 'http'

interface AuthenticationMessage extends IncomingMessage {
    session: {
        authenticated: boolean
    }
}

/**
 * login user authentication class.
 */
namespace Auth {
    export function auth(request: IncomingMessage): boolean {
        const authRequest: AuthenticationMessage = request as AuthenticationMessage

        return (authRequest && authRequest.session.authenticated)
    }
}

export default Auth
