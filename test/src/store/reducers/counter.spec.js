import Lab from 'lab';
import { expect } from 'code';

import { increment, decrement } from '../../../../src/store/actions/counter';
import reducer from '../../../../src/store/reducers/counter';

const lab = Lab.script();
const { experiment, test } = lab;

exports.lab = lab;

experiment('Counter Reducer:', () => {
  let state = reducer(undefined, {});

  test('Is 0 by default', () => {
    expect(state).to.be.a.number();
    expect(state).to.equal(0);
  });

  test('Increment', () => {
    const action = increment();
    state = reducer(state, action);

    expect(state).to.be.a.number();
    expect(state).to.equal(1);
  });

  test('Decrement', () => {
    const action = decrement();
    state = reducer(state, action);

    expect(state).to.be.a.number();
    expect(state).to.equal(0);

    state = reducer(state, action);
    expect(state).to.equal(-1);
  });
});
