import { shallow } from 'enzyme';
import React from 'react';
import LoadingPage from './../../components/LoadingPage';

test('It should render LoadingPage component', () => {
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();

})