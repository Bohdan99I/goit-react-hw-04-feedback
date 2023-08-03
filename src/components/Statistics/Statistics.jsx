import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage = 0 }) => {
  return (
    <ul className={css.listStatistics}>
      <li className={css.listStatisticsItem}>Good: {good}</li>
      <li className={css.listStatisticsItem}>Neutral: {neutral}</li>
      <li className={css.listStatisticsItem}>Bad: {bad}</li>
      <li className={css.listStatisticsItem}>Total: {total}</li>
      <li className={css.listStatisticsItem}>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number,
};