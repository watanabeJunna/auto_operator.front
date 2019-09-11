import { useState, FC } from "react"
import styled from "styled-components"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { NavLinkMenu } from "./NavLinkMenu"
import { NavIconMenu, Bars } from "./NavIconMenu"
import { SideMenu } from "./SideMenu"

type Props = {
    navMenuItems: any
    sideMenuItems?: string[]
    isDisplaySideMenu: boolean
}

export const Nav: FC<Props> = props => {
    const [active, setActive] = useState(false)

    return <>
        <NavWrapper>
            <NavLinkMenu
                items={props.navMenuItems}
            />
            <NavIconMenu onClick={() => setActive(!active)}>
                {props.isDisplaySideMenu ?
                    <Bars icon={faBars} /> : <></>}
            </NavIconMenu>
        </NavWrapper>
        <SideMenu
            isDisplaySideMenu={props.isDisplaySideMenu}
            active={active}
            items={props.sideMenuItems}
        />
    </>
}

const NavWrapper = styled.nav`
    z-index: 0;
    background-color: white;
    padding: 0;
    margin: 0;
`