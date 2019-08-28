import { Nav } from "../../components/Nav"
import { NextPageContext } from "next"
import Auth from '../../libs/auth'

function DashBoard() {
    return (<>
        <Nav
            isDisplaySideMenu={true}
            navMenuItems={navMenuItems}
            sideMenuItems={sideMenuItems}
        >
        </Nav>
    </>)
}

DashBoard.getInitialProps = ({ req, res }: NextPageContext): void => {
    if (!req || !Auth.auth(req)) {
        if (res) {
            res.writeHead(302, { Location: '/account/signin' })
            res.end()
        }
    }
}

export default DashBoard

const navMenuItems: NavItem[] = [
    { name: "Auto Operator", link: "/account/dashboard" },
    { name: 'Logout', link: '/account/logout' }
]

const sideMenuItems = [
    "Logout",
    "mock",
    "mock",
    "mock",
    "mock",
    "mock",
    "mock",
    "mock",
    "mock",
]