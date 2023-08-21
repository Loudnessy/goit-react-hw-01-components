import { StatsItemStyled } from "./StatsItem.styled";

export const StatsItem = ({statistic}) => {
    const {label, percentage} = statistic
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        
        return color;
      }
    return <li style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: `${getRandomColor()}`,
        width: 100
        }}>
        <StatsItemStyled>{label}</StatsItemStyled>
        <StatsItemStyled>{percentage}%</StatsItemStyled>
    </li>
}