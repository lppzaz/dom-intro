describe('' function(){
  it('', function(){
    var textbill = TextBill();
    textbill.billItem('call');
    textbill.billItem('call');
    assert.equal(textbill.callsTotal(), 2.75)
  })
})
