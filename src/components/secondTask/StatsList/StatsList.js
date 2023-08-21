import { StatsItem } from "../StatsItem/StatsItem";
import { StatsListStyled } from "./StatsList.styled";

export const StatsList = ({stats}) => {
    return <StatsListStyled>
        {stats.map(statsElem => <StatsItem statistic={statsElem} key={statsElem.id}></StatsItem>   
        )}
    </StatsListStyled>
}