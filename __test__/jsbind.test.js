import '../src/jsbind';

describe('test currying', () => {
  it('test case 1', () => {
    var name = 'global';

    const func = function(name) {
      return this.name;
    };

    const obj = { name: 'obj' }

    const result = func.jsBind(obj);

    expect(result()).toBe('obj');
  })

  it('test case 2', () => {
    function sum(a, b, c) {
      return a + b + c;
    }
    
    const sum10 = sum.jsBind(null, 10);
    const result = sum10(20, 30);
    expect(result).toBe(60);
  })

  it('test case 3', () => {
    function Animal(name) {
      this.name = name;
    }

    Animal.prototype.say = function() {
      return `I am a ${this.name}`;
    }
    
    const Cat = Animal.jsBind({}, 'cat');

    const cat = new Cat();

    expect(cat.say()).toBe('I am a cat');
  })
});