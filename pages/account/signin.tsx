import { Container } from "../../components/Container"
import styled, { css } from "styled-components"
import React, { RefObject } from "react"

export default () => (<>
    <Container>
        <Form>
        </Form>
    </Container>
</>)

type IProps = {}

class Form extends React.Component<IProps> {
    inputRef: RefObject<any> = React.createRef()

    render() {
        return (
            <FormContainer>
                <FormTitle>
                    Sign in
                </FormTitle>
                <FormStyle>
                    {/* <input
                        ref={this.inputRef}
                        placeholder="Hover to focus!"
                        onMouseEnter={() => {
                            this.inputRef.current.focus()
                        }}
                    /> */}
                    <UsernameLabel>
                        <p>Username or Email</p>
                    </UsernameLabel>
                    <UsernameInput />
                    <PasswordLabel>
                        <p>Password</p>
                    </PasswordLabel>
                    <PasswordInput />
                    <SubmitButton />
                </FormStyle>
            </FormContainer >
        )
    }
}

const FormTitle = styled.div`
    font-size: 42px;
    text-align: center;
    opacity: 0.4;
`

const LabelBaseStyle = css`
    margin: 0;
    opacity: 0.4;
`

const UsernameLabel = styled.div`
    ${LabelBaseStyle}
`

const PasswordLabel = styled.div`
    ${LabelBaseStyle}
`

const FormContainer = styled.div`
    padding: 40px  0 20px;
    margin: 0 auto;
`

const InputBaseStyle = css`
    width: 200px;
    margin-bottom: 10px;
    border-radius: 7px;
    border: 1px solid #dee7ec;
    padding: 8px;
`

const FormStyle = styled.form`
    justify-content: space-around;
`

const UsernameInput = styled.input.attrs(() => ({
    type: "text",
    name: "FormStyle",
}))`
    ${InputBaseStyle}
`

const PasswordInput = styled.input`
    ${InputBaseStyle}
`

const SubmitButton = styled.button`
    display: block;
`