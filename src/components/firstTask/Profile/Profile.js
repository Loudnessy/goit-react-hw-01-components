import { UserProfile } from "../UserProfile/UserProfile"
import { UserStats } from "../UserStats/UserStats"
import { ProfileDiv } from "./Profile.styled"
export const Profile = ({username, tag, location, avatar, stats}) => {
return <ProfileDiv>
    <UserProfile 
username={username}
tag={tag}
location={location}
avatar={avatar}
/>
<UserStats stats={stats}/>
</ProfileDiv>
}