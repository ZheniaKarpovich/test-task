import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from 'components/Header';
import { actions as authActions } from 'redux/auth';
import Logo from './images/bear-face.svg';
import MobileLogo from './images/bearFace.png';
import * as S from './styled';

class Login extends Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.isAuthenticated();
  }

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
    const { isMobile } = this.props;

    return (
      <Fragment>
        <Header />
        <S.Wrapper>
          <S.Content>
            <img src={isMobile ? MobileLogo : Logo} alt="logo" />
            <S.Button onClick={this.handleClick}>Let me in</S.Button>
          </S.Content>
        </S.Wrapper>
      </Fragment>
    );
  }
}

Login.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  history: PropTypes.shape({}).isRequired,
  actions: PropTypes.shape({
    isAuthenticated: PropTypes.func.isRequired,
    authenticateRequest: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ auth, app }) => ({
  isMobile: app.isMobile,
  isAuthenticated: auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...authActions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
