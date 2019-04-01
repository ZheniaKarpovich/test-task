import * as AuthHTTP from 'http/auth';
import { recordSaga } from 'tests/helpers';
import initialState from './handlers';
import reducer, { actions } from './index';
import { onAuthenticate, onGetUserRequest } from './sagas';

let fakeState = initialState;

describe('auth reducer', () => {
  test('authenticateRequest actions', () => {
    const expectedState = {
      ...fakeState,
      isLoading: true,
    };
    fakeState = reducer(fakeState, actions.authenticateRequest());

    expect(fakeState).toEqual(expectedState);
  });

  test('authenticateSuccess actions', () => {
    const expectedState = {
      ...fakeState,
      isLoading: false,
      isAuthenticated: true,
    };
    fakeState = reducer(fakeState, actions.authenticateSuccess());

    expect(fakeState).toEqual(expectedState);
  });

  test('authenticateFailure actions', () => {
    const payload = 'error';
    const expectedState = {
      ...fakeState,
      isLoading: false,
      error: payload,
    };
    fakeState = reducer(fakeState, actions.authenticateFailure(payload));

    expect(fakeState).toEqual(expectedState);
  });

  test('getUserRequest actions', () => {
    const expectedState = {
      ...fakeState,
      isLoading: true,
    };
    fakeState = reducer(fakeState, actions.getUserRequest());

    expect(fakeState).toEqual(expectedState);
  });

  test('getUserSuccess actions', () => {
    const payload = 'paylaod';
    const expectedState = {
      ...fakeState,
      isLoading: false,
      user: payload,
    };
    fakeState = reducer(fakeState, actions.getUserSuccess(payload));

    expect(fakeState).toEqual(expectedState);
  });

  test('getUserFailure actions', () => {
    const payload = 'error';
    const expectedState = {
      ...fakeState,
      isLoading: false,
      error: payload,
    };
    fakeState = reducer(fakeState, actions.getUserFailure(payload));

    expect(fakeState).toEqual(expectedState);
  });

  test('isAuthenticated actions', () => {
    localStorage.setItem('access_token', 'token');
    const expectedState = {
      ...fakeState,
      isLoading: false,
      isAuthenticated: true,
    };
    fakeState = reducer(fakeState, actions.isAuthenticated());

    expect(fakeState).toEqual(expectedState);
    localStorage.removeItem('access_token');
  });

  test('isAuthenticated actions', () => {
    const expectedState = {
      ...fakeState,
      isLoading: false,
      isAuthenticated: false,
    };
    fakeState = reducer(fakeState, actions.isAuthenticated());

    expect(fakeState).toEqual(expectedState);
  });
});

describe('auth sagas', () => {
  test('authentificate', async () => {
    const response = {
      access_token: 'access_token',
    };
    AuthHTTP.authentificate = jest.fn(() => Promise.resolve({ response }));
    const dispatched = await recordSaga(onAuthenticate);

    expect(dispatched[0]).toEqual(actions.authenticateSuccess({}));
    expect(dispatched[1]).toEqual(actions.getUserRequest());

    AuthHTTP.authentificate.mockClear();
  });

  test('authentificate with error', async () => {
    const error = 'error';
    AuthHTTP.authentificate = jest.fn(() => Promise.reject(error));
    const dispatched = await recordSaga(onAuthenticate);

    expect(dispatched[0]).toEqual(actions.authenticateFailure(error));

    AuthHTTP.authentificate.mockClear();
  });

  test('onGetUserRequest', async () => {
    const response = {
      user: 'user',
    };
    AuthHTTP.getUser = jest.fn(() => Promise.resolve(response));
    const dispatched = await recordSaga(onGetUserRequest);

    expect(dispatched[0]).toEqual(actions.getUserSuccess(response));

    AuthHTTP.getUser.mockClear();
  });

  test('onGetUserRequest with error', async () => {
    const error = 'error';
    AuthHTTP.getUser = jest.fn(() => Promise.reject(error));
    const dispatched = await recordSaga(onGetUserRequest);

    expect(dispatched[0]).toEqual(actions.getUserFailure(error));

    AuthHTTP.getUser.mockClear();
  });
});
