import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Logo from './images/logo.svg';
import Header from './index';
import * as S from './styled';

const defaultProps = {
  logo: 'path',
  component: () => (<div id="smth">compoennt</div>),
};

describe('Header component', () => {
  test('render', () => {
    const wrapper = shallow(<Header {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('custom path', () => {
    const { logo } = defaultProps;
    const wrapper = shallow(<Header {...defaultProps} />);
    const img = wrapper.find(S.Img);

    expect(img.prop('src')).toEqual(logo);
  });

  test('default path', () => {
    const wrapper = shallow(<Header />);
    const img = wrapper.find(S.Img);

    expect(img.prop('src')).toEqual(Logo);
  });

  test('without children', () => {
    const wrapper = shallow(<Header />);
    const img = wrapper.children();

    expect(img).toHaveLength(1);
  });

  test('with children', () => {
    const wrapper = shallow(<Header {...defaultProps} />);
    const img = wrapper.children();

    expect(img).toHaveLength(2);
  });
});
