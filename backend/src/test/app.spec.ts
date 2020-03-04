import 'mocha';
import { expect } from 'chai';

function itshould () {
  return 'something';
}

describe('app', () => {
  it('should return something',  () => {
    const result = itshould();
    expect(result).to.equal('something');
  });
});
