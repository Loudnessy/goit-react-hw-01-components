import { FriendListItemLi, FriendListItemSpan, FriendListItemUser } from "./FriendListItem.styled"

export const FriendListItem = ({friends}) => {
    const {avatar, name, isOnline} = friends
    return <FriendListItemLi>
<FriendListItemSpan isOnline={isOnline}></FriendListItemSpan>
  <img src={avatar} alt="User avatar" width="48" />
  <FriendListItemUser>{name}</FriendListItemUser>
    </FriendListItemLi>
}