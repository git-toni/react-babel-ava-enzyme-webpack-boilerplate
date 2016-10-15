import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import {Select} from '../src/index'
import {isObject,finder} from '../src/utils'



test('renders a select tag with no options', t => {
  const wrapper = shallow(<div />);
  t.is(wrapper.find('dv').length, 1);
});
