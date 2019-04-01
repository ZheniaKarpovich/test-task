import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';

import InputAdapter from 'components/Adapters/Input';
import DatePickerAdapter from 'components/Adapters/DatePicker';
import { actions as jogsActions } from 'redux/jogs';
import Logo from './images/cancel.svg';
import validate from './validate';
import * as S from './styled';

class Dealer extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      toggleModal: PropTypes.func.isRequired,
      addJogRequest: PropTypes.func.isRequired,
    }).isRequired,
  }

  handleClick = () => {
    const { actions } = this.props;

    actions.toggleModal();
  }

  onSubmit = (value) => {
    const { actions } = this.props;

    actions.addJogRequest({
      ...value,
      date: value.date.getTime(),
    });
  }

  render() {
    return (
      <Form
        validate={validate}
        onSubmit={this.onSubmit}
        subscription={{ submitting: true }}
        render={({ handleSubmit }) => (
          <S.Form onSubmit={handleSubmit}>
            <S.CloseButton
              onClick={this.handleClick}
              icon={Logo}
            />
            <S.Item>
              { 'Distance' }
              <Field
                name="distance"
                component={InputAdapter}
              />
            </S.Item>
            <S.Item>
              { 'Time' }
              <Field
                name="time"
                component={InputAdapter}
              />
            </S.Item>
            <S.Item>
              { 'Date' }
              <Field
                name="date"
                component={DatePickerAdapter}
              />
            </S.Item>
            <S.SaveButton type="submit"> Save </S.SaveButton>
          </S.Form>
        )}
      />
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...jogsActions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dealer);
