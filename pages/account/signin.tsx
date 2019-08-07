import styled, { css } from "styled-components"
import { FC, useRef, useState, MutableRefObject } from "react"
import { Container } from "../../components/Container"

export default () => (
    <Container>
        <Form>
        </Form>
    </Container>
)

const Form: FC = () => {
    const usernameRef: MutableRefObject<HTMLInputElement | null> = useRef(null)
    const passwordRef: MutableRefObject<HTMLInputElement | null> = useRef(null)

    interface IInputError {
        error: boolean
        message?: string
    }

    const [usernameError, setUsernameError] = useState<IInputError>({
        error: false,
        message: ""
    })

    const [passwordError, setPasswordError] = useState<IInputError>({
        error: false,
        message: ""
    })

    type IErrorMessage = string | void

    const checkUsername = (username: string): IErrorMessage => {
        if (!username) {
            return "username is required."
        }
    }

    const checkPassword = (password: string): IErrorMessage => {
        if (!password) {
            return "password is required."
        }
    }

    const onClick = () => {
        if (!usernameRef.current || !passwordRef.current) {
            return
        }

        usernameRef.current.focus()
        passwordRef.current.focus()

        const usernameInputVal = usernameRef.current.value
        const passwordInputVal = passwordRef.current.value

        // check input value
        let message: IErrorMessage

        message = checkUsername(usernameInputVal)

        if (typeof message === 'string' && message.length !== 0) {
            setUsernameError({
                error: true,
                message: message
            })
        } else {
            setUsernameError({ error: false })
        }

        message = checkPassword(passwordInputVal)

        if (typeof message === 'string' && message.length !== 0) {
            setPasswordError({
                error: true,
                message: message
            })
        } else {
            setPasswordError({ error: false })
        }

        // submit value data
    }

    return (
        <FormContainer>
            <FormTitle>
                <p>Sign in</p>
            </FormTitle>
            <UsernameLabel>
                <p>Username or Email</p>
            </UsernameLabel>
            <UsernameInput
                ref={usernameRef}
                error={usernameError.error} />
            <UsernameWarn>
                {usernameError.message}
            </UsernameWarn>
            <PasswordLabel>
                <p>Password</p>
            </PasswordLabel>
            <PasswordInput
                ref={passwordRef}
                error={passwordError.error} />
            <PasswordWarn>
                {passwordError.message}
            </PasswordWarn>
            <SubmitButton onClick={() => onClick()}>
                <span>Sign in</span>
            </SubmitButton>
        </FormContainer>
    )
}

/// Form
const FormContainer = styled.div`
    font-family: 'Raleway', sans-serif;
    padding: 50px 90px 90px;
    border-radius: 15px;
    margin: 0 auto;
    justify-content: space-around;
    box-shadow: 1px 1px 5px #9aa3ab;
`

const FormTitle = styled.div`
    font-size: 42px;
    text-align: center;
    color: #446456;
`

/// Label
const LabelBaseStyle = css`
    margin: 0;
    opacity: 0.7;
    font-size: 19px;
    font-weight: 500;
`

const UsernameLabel = styled.div`
    ${LabelBaseStyle}
`

const PasswordLabel = styled.div`
    ${LabelBaseStyle}
`

/// Input
type IInputProps = {
    error: boolean
}

const InputBaseStyle = css<IInputProps>`
    width: 200px;
    margin-bottom: 10px;
    border-radius: 3px;
    border: ${props => props.error && '1px solid red' || '1px solid #dee7ec'};
    padding: 8px;
`

const UsernameInput = styled.input`
    ${InputBaseStyle}
`

const PasswordInput = styled.input.attrs(() => ({
    type: "password",
}))`
    ${InputBaseStyle}
`

const SubmitButton = styled.button`
    display: block;
    background-color: white;
    font-family: 'Raleway', sans-serif;
    font-size: 1em;
    margin-top: 1em;
    padding: 0.5em 1em;
    border: 1px solid #9aa3ab;
    border-radius: 3px;
    opacity: 0.5;
    transition: .5s;
    &:hover {
        opacity: 1;
    }
`

// Warn
const UsernameWarn = styled.div`
    color: red;
`

const PasswordWarn = styled.div`
    color: red;
`