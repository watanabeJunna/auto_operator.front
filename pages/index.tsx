import { FC } from "react"
import styled, { css } from "styled-components"
import { Nav } from "../components/Nav"
import { Container } from "../components/Container"

export default () => (<>
  <Nav
    navMenuItems={navMenuItems}
    sideMenuItems={sideMenuItems}
    isDisplaySideMenu={false}
  />
  <Container>
    <Index />
  </Container>
</>)

const Index: FC = () => {
  return (
    <div>
      <Title>
        <p>Auto Operator</p>
      </Title>
      <Desciption>
        <p>securely build, share and run any application, anywhere</p>
      </Desciption>
    </div>
  )
}

const commonStyle = css`
    font-family: 'Raleway', sans-serif;
    color: #99a9ba;
`

const Title = styled.div`
    ${commonStyle}
    font-size: 48px;
    margin-bottom: 52px;
`

const Desciption = styled.div`
    ${commonStyle}
    max-width: 700px;
    font-size: 32px;
`

const navMenuItems: NavItem[] = [
  { name: "Signup", link: "/account/signup" },
  { name: "Signin", link: "/account/signin" }
]

const sideMenuItems: string[] = [
  "About",
  "Signin",
  "Signup"
]