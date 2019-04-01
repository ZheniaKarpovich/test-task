import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as jogsActions } from 'redux/jogs';
import getJogs from './selectors';
import Empty from './Empty';
import Icon from './images/add.svg';
import Form from './Form';
import Item from './Item';
import * as S from './styled';

class Jogs extends Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.getJogsRequest();
  }

  handleClick = () => {
    const { actions } = this.props;

    actions.toggleModal();
  }

  render() {
    const { jogs, isOpen } = this.props;

    if (!jogs.length && !isOpen) {
      return (<Empty />);
    }

    if (isOpen) {
      return (
        <S.FormWrapper>
          <Form />
        </S.FormWrapper>
      );
    }

    return (
      <S.Wrapper>
        {
          jogs.map(elem => (
            <Item key={elem.id} data={elem} />
          ))
        }
        <S.Button
          icon={Icon}
          onClick={this.handleClick}
        />
      </S.Wrapper>
    );
  }
}

Jogs.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  jogs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  actions: PropTypes.shape({
    toggleModal: PropTypes.func.isRequired,
    getJogsRequest: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ jogs }) => ({
  jogs: getJogs(jogs),
  isOpen: jogs.isOpen,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...jogsActions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Jogs);
