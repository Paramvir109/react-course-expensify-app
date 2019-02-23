import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/Error'

test('Should render error component', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
})