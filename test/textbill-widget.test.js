describe('Checks textbill values functions', function() {
  it('returns phone bill with one call should equal 2.75', function() {
    var textTest = TextBill()
    textTest.billItem('call')
    assert.equal(textTest.callsTotal('call'), 2.75);
  });
  it('returns phone bill with one sms should equal 0.75', function() {
    var textTest = TextBill()
    textTest.billItem('sms')
    assert.equal(textTest.smsTotal(), 0.75);
  });
  it('returns phone bill with one sms and two calls should equal 6.25', function() {
    var textTest = TextBill()
    textTest.billItem('sms')
    textTest.billItem('call')
    textTest.billItem('call')
    assert.equal(textTest.totalBill(), 6.25);
  });
  it('Checks total > 50 triggers alert function returns the (danger)', function(){
    var textTest = TextBill();
      // checks index value, if it is less than danger level keeps adding until it reaches danger level.
    for (var i = 0; i < 50; i++) {
      textTest.billItem('call');
      textTest.billItem('sms');
    }

    assert.equal(textTest.color(), 'danger');
  });
});
