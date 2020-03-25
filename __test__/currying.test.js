import currying from '../src/currying';

describe('test currying', () => {
  it('test case 1', () => {
    const genPath = currying(function(protocol, domain, path = '') {
      return `${protocol}://${domain}/${path}`;
    }, 'http', 'jackie.gan')

    expect(genPath('aaa')).toBe('http://jackie.gan/aaa');
    expect(genPath('bbb')).toBe('http://jackie.gan/bbb');
  })
});