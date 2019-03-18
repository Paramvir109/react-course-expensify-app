import React from 'react';
import { shallow } from 'enzyme';
import {LoginPage} from '../../components/LoginPage';

let startLogin, wrapper;
beforeEach(() => {
    startLogin = jest.fn()
     
    wrapper =  shallow(<LoginPage startLogin={startLogin}/>);
})

test('should match snapshot of login page', () => {
    expect(wrapper).toMatchSnapshot();
})
test('should call logout fn', () => {
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
})
