import { Nav } from '../components/Nav'
import styled from 'styled-components'
import { Container } from '../components/Container'

export default () => (
    <>
        <Nav
            isDisplaySideMenu={true}
            navMenuItems={navMenuItems}
            sideMenuItems={sideMenuItems}
        >
        </Nav>
        <Container>
            <Background>
                <Header>
                    ハッシュタグを追加
                </Header>
                <Input />
            </Background>
        </Container>
    </>
)

const navMenuItems: NavItem[] = [
    { name: 'Auto Operator', link: '/account/dashboard' },
]

const sideMenuItems = [
    'Action Log',
    'Logout',
]

const Background = styled.div`
    display: flex;
    margin: 50px auto;
    padding: 30px 42px;
    box-shadow: 1px 3px 12px #a1a1a1;
    border-radius: 15px;
`

const Header = styled.div`
    font-family: 'Raleway', sans-serif;
    font-size: 2em;
    color: #777;
    font-weight: 400;
    margin-right: 52px;
`

const Input = styled.input`
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    border: 1px solid #aaa;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    display: inline;
    border-radius: 10px;
    font-size: 1.2em;
    font-family: 'Raleway', sans-serif;
    padding: 0 7px;
`