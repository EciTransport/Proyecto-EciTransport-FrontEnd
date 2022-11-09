import styled from 'styled-components'

export const Container = styled.div`
flex: 0.7;
border-right: 1px solid #ddd;
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
    justify-content: space-around;
    align-items: center;
    background-color: var(--Icon-App-Color);
    height: 40px;
}
`
export const Map = styled.header`
width: 100%;
height: 94.5%;
background-color: black;

.imageMap {
    height: 100%;
}
`