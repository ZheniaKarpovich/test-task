import React from 'react';
import PropTypes from 'prop-types';

import Logo from './images/icon.svg';
import * as S from './styled';

const Item = ({ data }) => {
  const { date, distance, time } = data;
  const formatDate = (new Date(date)).toLocaleDateString();
  const speed = Math.round((60 * distance) / time);

  return (
    <S.Wrapper>
      <img src={Logo} alt="logo" />
      <S.Info>
        <div>{ formatDate }</div>
        <div>{ `Speed: ${speed} km/h` }</div>
        <div>{ `Distance: ${distance} km` }</div>
        <div>{ `Time: ${time} min` }</div>
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
