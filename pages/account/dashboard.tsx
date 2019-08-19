import { Nav } from "../../components/Nav"

export default () => {
    return (<>
        <Nav
            isDisplaySideMenu={true}
            navMenuItems={navMenuItems}
            sideMenuItems={sideMenuItems}
        >
        </Nav>
    </>)
}

// NavMenuItemsが指定されないと、画面崩れるから、TOPの初期値指定する様に
const navMenuItems: NavItem[] = [
    { name: "DashBoard", link: "/account/dashboard" },
]

const sideMenuItems = [
    "mock",
    "mock",
    "mock",
    "mock",
    "mock",
    "mock",
    "mock",
    "mock",
    "mock",
]