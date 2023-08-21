import styled from "styled-components";
export const FriendListItemSpan = styled.span`
background-color: ${props => (props.isOnline ? 'green' : 'red')};
display: block;
width: 10px;
height: 10px;
border-radius: 25px;
`
export const FriendListItemLi = styled.li`
background-color: yellowgreen;
border-radius: 10px;
box-shadow: 3px 4px black;
display: flex;
padding-top: 25px;
padding-bottom: 25px;
padding-left: 25px;
padding-right: 25px;
text-align: center;
`
export const FriendListItemUser = styled.p`
margin: 0 auto;
`