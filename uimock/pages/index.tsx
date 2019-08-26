import { NextPageContext } from 'next'
import { Nav } from '../components/Nav'
import { Request } from 'express'
import styled from 'styled-components'
import fetch from 'isomorphic-fetch'
import { Container } from '../components/Container'

type Props = {
    hashtags: [] | undefined
}

type Component = {
    (props: Props): JSX.Element
    getInitialProps({ req, res }: NextPageContext): object
}

const Dashboard: Component = (props: Props) => (
    <>
        <Nav
            isDisplaySideMenu={true}
            navMenuItems={navMenuItems}
            sideMenuItems={sideMenuItems}
        >
        </Nav>
        <HashTagContainer
            hashtags={props.hashtags}
        />
    </>
)

Dashboard.getInitialProps = ({ req }: NextPageContext): object => {
    return {
        hashtag: (req as Request).query
    }
}

export default Dashboard

const navMenuItems: NavItem[] = [
    { name: 'Auto Operator', link: '/account/dashboard' },
]

const sideMenuItems = [
    'Action',
    'Sign Out',
]

const HashTagContainer = (props: Props): JSX.Element => {
    const hashtags = props.hashtags ? props.hashtags : [];

    (async () => {
        console.log(await fetch('http://localhost:3000/api/item').then((res: Response) => res.json()))
    })()

    return (
        <Container>
            <ServiceContainer>
                <FormContainer>
                    <Label>ハッシュタグを追加</Label>
                    <Input />
                    <Button>送信</Button>
                </FormContainer>
                <DetailContainer>
                    {
                        hashtags.map((hashtag: object) => {
                            return (
                                <Hashtag>
                                    {hashtag}
                                </Hashtag>
                            )
                        })
                    }
                </DetailContainer>
            </ServiceContainer>
        </Container>
    )
}

const ServiceContainer = styled.div`
    margin: 50px auto;
    padding: 30px 42px;
    box-shadow: 1px 3px 12px #a1a1a1;
    border-radius: 15px;
`

const FormContainer = styled.div`
    display: flex;
`

const Label = styled.div`
    font-family: 'Raleway', sans-serif;
    font-size: 2em;
    color: #777;
    font-weight: 400;
    margin: auto 32px auto 0;
`

const Input = styled.input`
    display: inline;
    border: 1px solid #aaa;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    border-radius: 10px;
    font-size: 1.2em;
    font-family: 'Raleway', sans-serif;
    padding: 12px 7px;
    margin: auto 20px auto 0;
    :focus {
        outline: none;
    border-color: white;
    box-shadow: 0 0 5px #1abc9c;
}
`

const Button = styled.button`
    font-size: 1em;
    padding: 8px 18px;
    border: 1px solid black;
    border-radius: 10px;
`

const DetailContainer = styled.div`

`

const Hashtag = styled.div``