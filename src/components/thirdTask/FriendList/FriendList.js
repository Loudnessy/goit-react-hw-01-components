import { FriendListItem } from "../FriendListItem/FriendListItem";
import { FriendListStyled } from "./FriendList.styled";

export const FriendList = ({friends}) => {
    return <FriendListStyled>
        {friends.map(friend =>  <FriendListItem key={friend.id} friends={friend}></FriendListItem>)}
       
    </FriendListStyled>
}