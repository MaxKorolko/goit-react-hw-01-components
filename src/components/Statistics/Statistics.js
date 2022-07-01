import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import getRandomHexColor from '../../random-hex-color/randomColorHex';

export default function Statistics(props) {
  const { title, stats } = props;
  return (
    <section className={s.statistics}>
      {title.length > 0 && <h2 className={s.title}>{title}</h2>}

      <ul className={s.list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              key={id}
              className={s.item}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
