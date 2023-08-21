import { StyledDivForUserDescription } from "../Profile/Profile.styled"

export const UserProfile = ({username, tag, location, avatar, stats}) => {   
return <div>
    <img src={avatar}
      alt="User avatar"/>
      <StyledDivForUserDescription>
      <p>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
      </StyledDivForUserDescription>
</div>
}