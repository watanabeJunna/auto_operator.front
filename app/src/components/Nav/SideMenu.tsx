import { FC, ReactText } from "../../pages/node_modules/react"
import styled, { css, StyledComponentBase } from "../../pages/node_modules/styled-components"
import { Item } from "./Item"

type Props = {
    isDisplaySideMenu: boolean
    active: boolean
    items?: string[]
}

export const SideMenu: FC<Props> = props => (
    props.isDisplaySideMenu && typeof props.items !== 'undefined' ?
        <SideMenuWrapper active={props.active}>
            {
                props.items.map((item: string, c: ReactText) => (
                    <MenuItem key={c}>
                        {item}
                    </MenuItem>
                ))
            }
        </SideMenuWrapper> :
        <></>
)

const WRAPPER_WIDTH: number = 250

const SideMenuWrapper = styled.div<Props>`
    width: ${WRAPPER_WIDTH}px;
    height: 100%;
    position: fixed;
    top: 72px;
    right: 0;
    z-index: 1;
    background-color: #fff;
    ${props => props.active ? css`
    transform: translateX(0px);` : css`
    transform: translateX(${WRAPPER_WIDTH}px);`}
    transition: transform .5s, width .5s;
` as StyledComponentBase<any, any>

const MenuItem = styled.div`
    ${Item}
    font-size: 1.4em; /* Override */
    padding-bottom: 36px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
`