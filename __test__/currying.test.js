import currying from '../src/currying';

describe('test currying', () => {
  it('test case 1', () => {
    const genPath = currying(function(protocol, domain, path = '') {
      return `${protocol}://${domain}/${path}`;
    }, 'http', 'jackie.gan')

    expect(genPath('aaa')).toBe('http://jackie.gan/aaa');
    expect(genPath('bbb')).toBe('http://jackie.gan/bbb');
  })

  it('test case 2', () => {
    function addNum(a, b, c) {
      return a + b + c;
    }

    const add = currying(addNum);

    const res = add(1)(2)(3);

    expect(res).toBe(6);
  })
});