import styled, {css} from 'styled-components'

export const Titulo = styled.div`
display: flex;
align-items: center;
>.Icon-App {
    margin: 10px 0;
    width: 50px;
    height: 50px;
    fill: var(--Icon-App-Color) !important;
}
>h2 {
    font-size: 20px;
    margin: 0 15px 0 20px;
    font-weight: 700;
    color: var(--Icon-App-Color);
}
`

export const Contenedor = styled.div`
padding: 20px;
border-right: 1px solid #ddd;
flex: 0.2;
min-width: 255px;
>.Icon-App {
    margin: 10px 0;
    width: 50px;
    height: 50px;
    fill: var(--Icon-App-Color) !important;
}
>Button {
    background-color: var(--Icon-App-Color) !important;
    border: none !important;
    color: white !important;
    font-weight: 800 !important;
    text-transform: inherit !important;
    height: 46px !important;
    padding: 0 30px !important;
    border-radius: 9999px !important;
    margin-top: 10px;
}
`

export const SideBarIcon = styled.div`
display: flex;
align-items: center;
padding: 14px 10px;
>h2 {
    font-size: 19px !important;
    margin: 0 15px 0 20px !important;
    font-weight: 700 !important;
}
>.MuiSvgIcon-root {
    width: 50px;
    height: 50px;
}
&:hover {
    background-color: var(--Hover);
    color: var(--Icon-App-Color);
    transform: color 100ms ease-out;
}

${props => props.Active && css`
    color: var(--Icon-App-Color);
    background-color: var(--Hover);
`}
`