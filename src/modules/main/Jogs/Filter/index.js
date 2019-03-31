import React from 'react';

import * as S from './styled';

const Filter = () => (
  <S.Wrapper>
    <S.Item>
      <div>Date from</div>
      <S.DatePicker />
    </S.Item>
    <S.Item>
      <div>Date to</div>
      <S.DatePicker />
    </S.Item>
  </S.Wrapper>
);

Filter.propTypes = {};

export default Filter;
