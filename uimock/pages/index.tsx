import { Nav } from "../components/Nav"

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