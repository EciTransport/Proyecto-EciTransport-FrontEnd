import styled from 'styled-components';

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

.header{
    align-items: center;
    padding: 15px;
    color: black;
    width: 100%;
    border: none;
    background-color: var(--Icon-App-Color);
    font-size: 12px;
}
.contacts-count {
    font-size: 14px;
    margin-top: 2px;
    color: #888;
}

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
    width: 100%;
}
`

export const Header = styled.div`
background-color: white;
height: 50px;
position: sticky;
padding-top: 30px;
width: 60%;
margin-left: 50%;
transform: translateX(-50%);
`
export const Contacts = styled.div`
margin-top: 30px;
display: grid;
grid-template-columns: 200px 200px 200px;
gap: 20px;
align-items: center;
justify-content: space-evenly;
justify-items: center;
`
