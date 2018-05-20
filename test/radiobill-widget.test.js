describe('Checks radiobill values functions', function() {
  it('returns phone bill with one call should equal 2.75', function() {
    var text2Test = TextBill()
    text2Test.billItem('call')
    assert.equal(text2Test.callsTotal(), 2.75);
  });
  it('returns phone bill with one sms should equal 0.75', function() {
    var text2Test = TextBill()
    text2Test.billItem('sms')
    assert.equal(text2Test.smsTotal(), 0.75);
  });
  it('returns phone bill with one sms and two calls should equal 6.25', function() {
    var text2Test = TextBill()
    text2Test.billItem('sms')
    text2Test.billItem('call')
    text2Test.billItem('call')
    assert.equal(text2Test.totalBill(), 6.25);
  });
  it('Checks total > 30 triggers alert function returns the (warning)', function(){
    var text2Test = TextBill();
    // checks index value, if it is less than warning level keeps adding until it reaches warning level.
    for (var i = 0; i < 10; i++) {
      text2Test.billItem('call');
      text2Test.billItem('sms');
    }
    //return text2Test.color
    assert.equal(text2Test.color(), 'warning');
  });
});
