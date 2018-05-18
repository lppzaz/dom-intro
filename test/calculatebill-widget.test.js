describe('Checks calculateBill value of functions', function(){
  it('total phone bill with one call should return 2.75', function(){
    assert.equal(calcBill('call'), 2.75);
  });
  it('total phone bill with one sms should return 0.75', function(){
    assert.equal(calcBill('sms'), 0.75);
  });
  it('total phone bill with one sms and one call should return 3.50', function(){
    assert.equal(calcBill('sms,call'), 3.50);
  });
});
