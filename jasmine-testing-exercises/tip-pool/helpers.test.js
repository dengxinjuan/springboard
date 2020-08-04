describe('test helpers.js functions', function(){

    it('should test payment total', function(){
        billAmtInput.value = 200;
    tipAmtInput.value = 40;

    submitPaymentInfo();

    expect(sumPaymentTotal('tipAmt')).toEqual(60);
    });


it('should calcaulte tip percent', function(){

billAmt = 100;
tipAmt = 20;
expect(calculateTipPercent(billAmt,tipAmt)).toEqual(20);
});

it('should append tr value', function(){

    let trElement = document.createElement('tr');

    appendTd(trElement, 'thank you');

    expect(trElement.children.length).toEqual(1);
    expect(trElement.firstChild.innerHTML).toEqual('thank you');

});

afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    allPayments = {};
    paymentId = 0;
  });


}
)

