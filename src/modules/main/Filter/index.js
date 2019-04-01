import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as jogsActions } from 'redux/jogs';
import * as S from './styled';

const Filter = ({ toDate, fromDate, actions }) => (
  <S.Wrapper>
    <S.Item>
      <div>Date from</div>
      <S.DatePicker
        selected={fromDate}
        onChange={actions.setFromDate}
        maxDate={toDate}
      />
    </S.Item>
    <S.Item>
      <div>Date to</div>
      <S.DatePicker
        selected={toDate}
        onChange={actions.setToDate}
        minDate={fromDate}
      />
    </S.Item>
  </S.Wrapper>
);

Filter.defaultProps = {
  toDate: null,
  fromDate: null,
};

Filter.propTypes = {
  toDate: PropTypes.instanceOf(Date),
  fromDate: PropTypes.instanceOf(Date),
  actions: PropTypes.shape({
    setToDate: PropTypes.func.isRequired,
    setFromDate: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ jogs }) => ({
  toDate: jogs.toDate,
  fromDate: jogs.fromDate,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...jogsActions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
