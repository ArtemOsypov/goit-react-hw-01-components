import PropTypes from 'prop-types';
import { Container, Title, StatList, StatItem, Label, Percentage } from './Statistic.styled';


export const Statistic = ({ title, stats }) => {
  return (
    
        <Container>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ label, percentage, id }) => {
          return (
            <StatItem key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </StatItem>
          );
        })}
      </StatList>
    </Container>
    );
    
};

Statistic.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
};