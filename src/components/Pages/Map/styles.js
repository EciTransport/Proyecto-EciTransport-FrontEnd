import styled from 'styled-components'

export const Container = styled.div`
display:flex;
flex-direction: column;
flex: 0.7;
width: 100%;
border: none;
overflow-y: scroll;
box-size: border-box;
&::-webkit-scrollbar{
    display:none;
}
-ms-overflow-style: none;
scrollbar-width: none;
`


export const Header = styled.header`
h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--Icon-App-Color);
    height: 40px;
}
`
export const Map = styled.header`
padding: 0;
width: 100%;
background-color: black;
height: 100%;
`