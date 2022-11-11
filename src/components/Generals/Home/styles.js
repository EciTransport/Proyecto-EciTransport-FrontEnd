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

.sectionComment {
    margin-top:5px;

    .createComment {
        display:flex;
        justify-content: center;
        align-items: center;
        >.columns{
            display:flex;
            flex-direction: column;
            margin-left: 60px;
            margin-top: -10px;
            width: 100%;
            padding-right: 16px;
            >input{
                margin-left: 20px;
                margin-top: 9px;
                width: 90%;
                border: none;
                outline 0;
                font-size: 18px;
                line-height: 25px;
                color: #0f1419;
            }
        }
        >Button {
            background-color: var(--Icon-App-Color) !important;
            border: none !important;
            color: white !important;
            font-weight: 900 !important;
            width: 100px !important;
            height: 40px !important;
            border-radius: 30px !important;
            text-transform: inherit !important;
        }
    }
}
`

export const ReportsBoxComment = styled.div`
padding: 1px 15px;
margin-left: 30px;
`

export const CommentReport = styled.div`
display: flex;
width: 100%;
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
    display:grid;
    padding: 0;
    margin-left: 15px;
}
.header{
    display:flex;
    align-items: center;
}
`

export const LoadComment = styled.div`
width: 100%;
max-height: 200px;
border-bottom: 1px solid #ddd;
overflow-y: scroll;
box-sizing: border-box;
padding: 0 30px 10px 20px;
&::-webkit-scrollbar{
    display:none;
}
-ms-overflow-style: none;
scrollbar-width: none;
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
    display:grid;
    padding: 0;
    margin-left: 15px;
}
.header{
    display:flex;
    align-items: center;
}
`

export const DivComment = styled.div`
display: flex;
width: 100%;
font-size: 12px;
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
    display:grid;
    padding: 0;
    margin-left: 15px;
}
.header{
    display:flex;
    align-items: center;
}
`

export const PostDescriptionComment = styled.div`
margin-left: 82px;
>p{
    margin: 0;
    padding: 0;
    color: #0f1419;
    font-size: 16px;
    line-height: 16.6975px;
    margin-bottom: 5px;
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
border-bottom: 1px solid #ddd;
`

export const User = styled.img`
border-radius: 50px;
width: 50px;
height: 50px;
object-fit: fill;
margin-top: 5px;
`

export const UserComment = styled.img`
border-radius: 50px;
width: 40px;
height: 40px;
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
max-height: 600px;
`

export const PostFooter = styled.div`
display: flex;
justify-content: space-around;
margin-top: 10px;

.reactions {
    display:flex;
    align-items: center;
    color: #5b7083;
    text-transform: capitalize;
    font-size: 15px;
}

.reactionscomment:hover {
    background: white;
    cursor: pointer;
    color:  #e02456;
    .iconReaction{
        fill: #e02456;
    }
}
.reactionslike:hover {
    cursor: pointer;
    background: white;
    color: #1da1f2;
    .iconReaction{
        fill: #1da1f2;
    }
}
.iconReaction{
    padding-right: 20px;
}
`
