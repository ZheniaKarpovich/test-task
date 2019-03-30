import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from 'components/Button';
import Header from 'components/Header';
import { actions as authActions } from 'redux/auth';
import Logo from './images/bear-face.svg';
import * as S from './styled';

class Login extends Component {
  componentDidUpdate(prevProps) {
    const { history, isAuthenticated } = this.props;

    if (!prevProps.isAuthenticated && isAuthenticated) {
      history.replace('/');
    }
  }

  handleClick = () => {
    const { actions } = this.props;

    actions.authenticateRequest();
  }

  render() {
    return (
      <Fragment>
        <Header />
        <S.Wrapper>
          <S.Content>
            <img src={Logo} alt="logo" />
            <Button onClick={this.handleClick}>Let me in</Button>
          </S.Content>
        </S.Wrapper>
      </Fragment>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({}).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  actions: PropTypes.shape({
    authenticateRequest: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...authActions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
