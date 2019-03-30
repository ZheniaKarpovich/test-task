import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as jogsActions } from 'redux/jogs';
import Form from './Form';
import Item from './Item';
import * as S from './styled';

class Jogs extends Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.getJogsRequest();
  }

  render() {
    const { jogs, isOpen } = this.props;

    if (isOpen) {
      return (
        <Form />
      );
    }

    return (
      <S.Wrapper>
        {
          jogs.map(elem => (
            <Item key={elem.id} data={elem} />
          ))
        }
      </S.Wrapper>
    );
  }
}

Jogs.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  jogs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  actions: PropTypes.shape({
    getJogsRequest: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ jogs }) => ({
  jogs: jogs.list,
  isOpen: jogs.isOpen,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...jogsActions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Jogs);
