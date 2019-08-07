import styled, { css } from "styled-components"
import { FC, MouseEvent, useRef, MutableRefObject } from "react"
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

    type IIsValid = string | undefined | void

    const isUsernameInvalid = (username: string): IIsValid => {
        if (!username) {
            return ""
        }

        return
    }

    const isPasswordInvalid = (password: string): IIsValid => {
        if (!password) {
            return ""
        }

        return
    }


    const onClick = (_e: MouseEvent) => {
        if (!usernameRef.current || !passwordRef.current) {
            return
        }

        usernameRef.current.focus()
        passwordRef.current.focus()

        const usernameInputVal = usernameRef.current.value
        const passwordInputVal = passwordRef.current.value

        let result: IIsValid

        result = isUsernameInvalid(usernameInputVal)

        if (result) {

        }

        result = isPasswordInvalid(passwordInputVal)

        if (result) {

        }
    }

    return (
        <FormContainer>
            <FormTitle>
                <p>Sign in</p>
            </FormTitle>
            <UsernameLabel>
                <p>Username or Email</p>
            </UsernameLabel>
            <UsernameInput ref={usernameRef} />
            <PasswordLabel>
                <p>Password</p>
            </PasswordLabel>
            <PasswordInput ref={passwordRef} />
            <SubmitButton onClick={e => onClick(e)}>
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
const InputBaseStyle = css`
    width: 200px;
    margin-bottom: 10px;
    border-radius: 3px;
    border: 1px solid #dee7ec;
    padding: 8px;
`

const UsernameInput = styled.input.attrs(() => ({
    type: "text",
    name: "username",
}))`
    ${InputBaseStyle}
`

const PasswordInput = styled.input.attrs(() => ({
    type: "text",
    name: "password",
}))`
    ${InputBaseStyle}
`

const SubmitButton = styled.button.attrs(() => ({
    type: "submit"
}))`
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