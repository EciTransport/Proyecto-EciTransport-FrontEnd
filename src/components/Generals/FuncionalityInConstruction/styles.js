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
    border-bottom: 1px solid #ddd;
    margin-top: 5px;
}
h1 {
    display: flex;
    color: var(--Icon-App-Color);
    justify-content: space-around;
    font-family: sans-serif;
    align-items: center;
    margin-top: 100px;
}
`
