import { FC, ReactText } from "react"
import styled, { css, StyledComponentBase } from "styled-components"
import { Item } from "./Item"

type IProps = {
    isDisplaySideMenu: boolean
    active: boolean
    items: string[]
}

export const SideMenu: FC<IProps> = props => (
    props.isDisplaySideMenu ?
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

const SideMenuWrapper = styled.div<IProps>`
    width: ${WRAPPER_WIDTH}px;
    height: 100%;
    position: fixed;
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
    padding-bottom: 36px;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    font-size: 18px;
`