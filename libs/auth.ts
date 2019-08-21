import { IncomingMessage } from 'http'

interface AuthenticationMessage extends IncomingMessage {
    session: {
        authenticated: boolean
    }
}

/**
 * login user authentication class.
 */
class Auth {
    public static auth(request: IncomingMessage): boolean {
        const authRequest: AuthenticationMessage = request as AuthenticationMessage

        return (authRequest && authRequest.session.authenticated)
    }
}

export default Auth
