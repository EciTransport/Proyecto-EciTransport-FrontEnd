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
>.modal{
    position: absolute !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%);
    width: 500;
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

export const FOOTER = styled.footer`
position: fixed;
bottom: 1.5em !important;
font-family: "Roboto","Helvetica","Arial",sans-serif !important;

.account {
    background-color: var(--Icons-Colors) !important;
    border: none !important;
    color: white !important;
    text-transform: inherit !important;
    height: 46px !important;
    padding: 0 30px !important;
    border-radius: 9999px !important;
    border-right: 1px solid #ddd !important;
    flex: 0.2 !important;
    min-width: 255px !important;
    display: flex;
    justify-content: space-evenly !important;
}
.account:hover {
    background-color: var(--Icon-App-Color) !important;
    transform: color 100ms ease-out !important;
}


.photo {
    border-radius: 100%;
    height: 2.5em;
    width: 2.5em;
    background: #192734;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
    background: black;
}

.name {
    font-weight: 700;
}

`