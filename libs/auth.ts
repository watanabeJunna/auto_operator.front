import { IncomingMessage } from 'http'

type AuthenticationMessage = IncomingMessage & {
    session: {
        authenticated: boolean
    }
}

class Auth {
    public static auth(request: IncomingMessage): boolean {
        const authRequest: AuthenticationMessage = request as AuthenticationMessage

        return (authRequest && authRequest.session.authenticated)
    }
}

export default Auth
