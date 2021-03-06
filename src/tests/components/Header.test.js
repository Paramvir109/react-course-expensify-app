import React from 'react';
import { Header } from '../../components/Header';
import { shallow  } from 'enzyme';
// import toJSON from 'enzyme-to-json';//To get the required snapshot(but being automatically used due snapshotserializers in config)
// import ReactShallowRenderer from 'react-test-renderer/shallow' as we are using enzyme

let startLogout, wrapper;
beforeEach(() => {
    startLogout = jest.fn()
     
    wrapper =  shallow(<Header startLogout={startLogout}/>);
})

test('Should render Header correctly', () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot()//Snapshot is generated
            //If sth is changed in component, test will fail Therefore use 'u' to update the changes
    const wrapper = shallow(<Header startLogout={() => {}}/>);
    // expect(wrapper.find('h1').text()).toBe('Expensify');
    expect(wrapper).toMatchSnapshot();
})
test('should call logout fn', () => {
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
})