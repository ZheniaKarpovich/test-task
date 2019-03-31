import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as jogsActions } from 'redux/jogs';
import Icon from './images/sad-rounded-square-emoticon.svg';
import * as S from './styled';

const Empty = ({ actions }) => (
  <S.Wrapper>
    <img src={Icon} alt="icon" />
    <S.Title>Nothing is there</S.Title>
    <S.AddButton
      onClick={() => actions.toggleModal()}
    >
      { 'Create your jog first' }
    </S.AddButton>
  </S.Wrapper>
);

Empty.propTypes = {
  actions: PropTypes.shape({
    toggleModal: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...jogsActions }, dispatch),
});

export default connect(() => ({}), mapDispatchToProps)(Empty);
