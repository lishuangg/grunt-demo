const add = require('../calc.js'),
      expect = require('chai').expect;

describe('加法函数的单元测试',function(){ //测试套件的描述，回调函数
  it('0 + 0 = 0',function(){
    expect(add(0,0)).to.be.equal(0);
  });//一个it();就是一个单元测试用例

  it('1 + 0 = 1',function(){
    expect(add(1,0)).to.be.equal(1);
  });

  it('a + b = NaN',function(){
    expect(isNaN(add('a','b'))).to.be.ok;
  })
});
