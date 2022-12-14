import styled from 'styled-components'

export const ContainerPrueba = styled.div`
padding: 0;
`
export const ContainerWidget = styled.div`
flex: 0.3;
overflow-y: scroll;
box-sizing: border-box;
padding: 0 30px 10px 20px;
&::-webkit-scrollbar{
    display:none;
}
-ms-overflow-style: none;
scrollbar-width: none;
`

export const Header = styled.div`
background-color: white;
height: 50px;
position: sticky;
padding-top: 10px;
top: 0;
`

export const DivIcon = styled.div`
display: flex;
align-items: center;
background-color: #eee;
padding: 10px;
border-radius: 20px;
>searchIcon{
    color: #5b7083;
}
>input{
    border: none;
    outline: 0;
    padding-left: 10px;
    background-color: #eee;
    font-size: 16px;
}
`

export const SearchIcon = styled.div``

export const DivContent = styled.div``


//Home
export const ContainerHome = styled.div`
flex: 0.5;
border-right: 1px solid #ddd;
overflow-y: scroll;
box-size: border-box;

&::-webkit-scrollbar{
    display:none;
}

-ms-overflow-style: none;

scrollbar-width: none;
`

export const HeaderHome = styled.header`
h2 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #ddd;
    background-color: var(--Icon-App-Color);
    height: 40px;
}

`