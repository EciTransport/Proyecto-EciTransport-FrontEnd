import { style } from '@mui/system'
import styled, {css} from 'styled-components'

export const Container = styled.div`
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

export const Header = styled.header`
h2 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #ddd;
    margin-top: 5px;
}
`

/* REPORT BOX */

export const ReportsBox = styled.div`
border-bottom: 1px solid #ddd;
padding: 5px 15px;
`

export const Div = styled.div`
display: flex;
width: 100%;
>.columns{
    display:flex;
    flex-direction: column;
    margin-left: 60px;
    margin-top: -10px;
    width: 100%;
    padding-right: 16px;
    >input{
        margin-left: 10px;
        margin-top: 9px;
        width: 100%;
        border: none;
        outline 0;
        font-size: 18px;
        line-height: 25px;
        color: #0f1419;
    }
}
>div span {
    font-weight: 600;
    font-size: 15px;
    color: #5b7083;
}
.post_icon{
    font-size: 14px !important;
    color: var(--Icon-App-Color) !important;
}
h3 {
    padding: 0;
    margin-left: 15px;
}
.header{
    display:flex;
    align-items: center;
}
`

export const DivFooter = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
>Button {
    background-color: var(--Icon-App-Color) !important;
    border: none !important;
    color: white !important;
    font-weight: 900 !important;
    width: 80px !important;
    height: 40px !important;
    margin-top: 20px !important;
    margin-left: 10px !important;
    border-radius: 30px !important;
    text-transform: inherit !important;
}
`

export const DivBox = styled.div`
display: flex;
margin-left: 60px;
justify-content: space-around;
align-items: center;
>.MuiSvgIcon-root {
    fill: var(--Icon-App-Color);
    margin-left: 1rem;
    border: 2px solid var(--Icon-App-Color);
    width: 20px;
    height: 20px;
    border-radius: 5px;
    cursor: pointer;
}
}
`
export const DivImages = styled.div`
display: flex;
width: 100%; 
align-items: center;
overflow: auto;
margin-top: 5px;
.image {
    display: flex;
    justify-content: center;
}
.botondelete {
    color: var(--Icon-App-Color) !important;
}
`

export const Form = styled.form`
display: flex;
flex-direction: column;
`

export const User = styled.img`
border-radius: 50px;
width: 50px;
height: 50px;
object-fit: fill;
margin-top: 5px;
`

export const File = styled.input`
max-width: 20px;
max-height: 20px;
z-index: 10;
opacity: 0;
${props => props.primary && css`
margin-left: -23px;`}
${props => props.secundary && css`
margin-left: -23px;`}
`

/* POST */
export const Posts = styled.div`
padding: 10px 15px;
border-top: 1px solid #ddd;
margin-top: 5px;
display:flex;
align-items: flex-start;
.post_user{
    margin-top: 5px;
}
`

export const PostBody = styled.div`
padding-left: 10px;
width: 100%;
overflow: hidden;
>div span {
    font-weight: 600;
    font-size: 15px;
    color: #5b7083;
}
.post_icon{
    font-size: 14px !important;
    color: var(--Icon-App-Color) !important;
}
h3 {
    padding: 0;
    margin: 0;
}
.header{
    display:flex;
    align-items: center;
}
`

export const menuList = styled.div`
padding-left: 10px;
width: 100%;
overflow: hidden;
.post_icond{
    font-size: 30px !important;
    color: var(--Icon-App-Color) !important;
    position: absolute;
    right: 0;
}
`

export const PostDescription = styled.div`
margin-botton: 10px;
>p{
    margin: 0;
    padding: 0;
    color: #0f1419;
    font-size: 16px;
    line-height: 16.6975px;
}
`

export const Images = styled.img`
border-radius: 20px;
min-width: 100%;
width: 100px;
min-height: 300px;
`

export const PostFooter = styled.div`
display: flex;
justify-content: space-around;
margin-top: 10px;
color: #5b7083;
transition: all 100ms ease-in;
>.MuiSvgIcon-root:hover:nth-child(1){
    fill: #e02456;
    cursor: pointer;
}
>.MuiSvgIcon-root:hover:nth-child(3){
    fill: #1da1f2;
    cursor: pointer;
}
.reactions {
    display:flex;
    align-items: center;
}
.iconReaction{
    padding-right: 20px;
}
`
