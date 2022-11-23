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

export const Notifications = styled.div`
display: grid;
gap: 5px;
`
