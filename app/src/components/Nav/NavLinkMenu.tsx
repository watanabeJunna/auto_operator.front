import { FC, ReactText } from "../../pages/node_modules/react"
import Link from "next/link"
import styled from "../../pages/node_modules/styled-components"
import { Item } from "./Item"

type Props = {
    items: NavItem[]
}

export const NavLinkMenu: FC<Props> = props => (
    <NavLinkMenuWrapper>
        {
            props.items.map((item: NavItem, c: ReactText) => {
                const navItem = <NavItem key={c}>{item.name}</NavItem>

                return (
                    typeof item.link !== 'undefined'
                        ? <Link href={item.link} key={c}>{navItem}</Link>
                        : navItem
                )
            })
        }
    </NavLinkMenuWrapper>
)

const NavLinkMenuWrapper = styled.div`
    display: flex;
`

const NavItem = styled.div`
    ${Item}
    padding: 18px 32px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
`