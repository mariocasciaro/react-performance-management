import React from 'react';
import Lab from 'lab';
import { expect } from 'code';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../../../../src/components/elements/Button';

Enzyme.configure({ adapter: new Adapter() });

const lab = Lab.script();
const { experiment, test } = lab;

exports.lab = lab;

const wrapper = shallow(<Button />);

experiment('<Button />', () => {
  test('Renders as a <button> element', () => {
    expect(wrapper.type()).to.equal('button');
  });
});
