import React from 'react';
import {shallow} from 'enzyme';
import App from '../client/src/components/App.jsx'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('App component', () => {
    test('should render component without an error', () => {
        expect(shallow(<App />).exists()).toBe(true);
    });

    test('has a description title', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('h1')).toHaveLength(1);
    });

    test('has city description', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.city-name')).toHaveLength(1);
    });
});