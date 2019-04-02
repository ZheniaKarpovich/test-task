import React from 'react';
import PropTypes from 'prop-types';

import Logo from './images/icon.svg';
import * as S from './styled';

const Item = ({ data }) => {
  const { date, distance, time } = data;
  const formatDate = (new Date(date * 1000)).toLocaleDateString();
  const speed = Math.round((60 * distance) / time);

  return (
    <S.Wrapper>
      <img src={Logo} alt="logo" />
      <S.Info>
        <S.Item>{ formatDate }</S.Item>
        <S.Item>
          <b>Speed:</b>
          { ` ${speed} km/h` }
        </S.Item>
        <S.Item>
          <b>Distance:</b>
          { ` ${distance} km` }
        </S.Item>
        <S.Item>
          <b>Time:</b>
          { ` ${time} min` }
        </S.Item>
      </S.Info>
    </S.Wrapper>
  );
};


Item.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
    distance: PropTypes.number.isRequired,
  }).isRequired,
};

export default Item;
