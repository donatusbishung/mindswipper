import { add, mul } from './mathFunction';

describe('Math function test', () => {
  it('check add function', () => {
    expect(add(1, 2)).toBe(3);
  });
  it('check multiply function', () => {
    expect(mul(2, 3)).toBe(6);
  });
});
