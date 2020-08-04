

describe('monthly payment', function(){
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount:800000,years:30,rate:4.5})).toEqual(4053.48);
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount:800000,years:30,rate:4.5})).toEqual(4053.48);
});
}); 



