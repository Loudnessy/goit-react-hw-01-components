import { StatisticsStyledHeader, StatisticsStyledSection } from "./Statistics.styled";
import { StatsList } from "../StatsList/StatsList";

export const Statistics = props => {
if (props.title.length === 0) {
    return <StatisticsStyledSection>
        <StatsList stats={props.stats}></StatsList>
    </StatisticsStyledSection>
} else {
  return <StatisticsStyledSection>
        <StatisticsStyledHeader>{props.title}</StatisticsStyledHeader>
        <StatsList stats={props.stats}></StatsList>
    </StatisticsStyledSection>  
}

}