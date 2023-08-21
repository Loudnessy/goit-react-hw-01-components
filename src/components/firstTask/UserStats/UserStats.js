import { StyledLi, StyledUl } from "./UserStats.styled"

export const UserStats = ({stats}) => {
   const {followers, views, likes} = stats
    return <StyledUl>
        <StyledLi>
        <span>Followers:</span>
        <span>{followers}</span>
        </StyledLi>
        <StyledLi>
            <span>Views:</span>
            <span>{views}</span>
        </StyledLi>
        <StyledLi>
            <span>Likes:</span>
            <span>{likes}</span>
        </StyledLi>
        </StyledUl>
}
