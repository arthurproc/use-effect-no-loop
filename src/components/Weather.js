import React from 'react';
import PropTypes from 'prop-types';

function Weather({ currentConditions, nextDays }) {
  return (
    <>
      <div>
        <h3>Condições atuais em BH</h3>
        {currentConditions.temp && (
          <>
            <h4>
              Hoje
              <img
                src={ currentConditions.iconURL }
                alt={ currentConditions.comment }
              />
            </h4>
            <p>
              Temperatura atual:
              {' '}
              {currentConditions.temp.c}
              °C
            </p>
            <p>
              Humidade:
              {' '}
              {currentConditions.humidity}
            </p>
            <p>
              Ventos:
              {' '}
              {currentConditions.wind.km}
              Km/h
            </p>
          </>
        )}
      </div>
      <div>
        {nextDays.length > 0 && (
          <>
            <h3>Próximos dias</h3>
            {nextDays.map((day) => (
              <>
                <h4>
                  {day.day}
                  <img
                    src={ day.iconURL }
                    alt={ day.comment }
                  />
                </h4>
                <img
                  src={ day.iconURL }
                  alt={ day.comment }
                />
                <p>
                  Temperatura máxima:
                  {' '}
                  {day.max_temp.c}
                  °C
                </p>
                <p>
                  Temperatura mínima:
                  {' '}
                  {day.min_temp.c}
                  °C
                </p>
              </>
            ))}
          </>
        )}
      </div>
    </>
  );
}

Weather.propTypes = {
  currentConditions: PropTypes.shape({
    temp: PropTypes.shape({
      c: PropTypes.number.isRequired,
    }),
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.shape({
      km: PropTypes.number.isRequired,
    }),
    iconURL: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
  }).isRequired,
  nextDays: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string.isRequired,
    iconURL: PropTypes.string.isRequired,
    max_temp: PropTypes.shape({
      c: PropTypes.number.isRequired,
    }),
    min_temp: PropTypes.shape({
      c: PropTypes.number.isRequired,
    }),
  })).isRequired,
};

export default Weather;
