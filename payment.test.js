const checkPayment = require("./paymentFixing");


test("amount is 100", () => {
  expect(checkPayment(100)).toEqual({
    success: true,
    message: "Payment accepted"
  });
});


test("amount is more than 100", () => {
  expect(checkPayment(12100000000)).toEqual({
    success: true,
    message: "Payment accepted"
  });
});


test("amount is Large number", () => {
  expect(checkPayment(Number.MAX_SAFE_INTEGER)).toEqual({
    success: true,
    message: "Payment accepted"
  });
});


test('error test by null', () => {
    expect(checkPayment(null)).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by false', () => {
    expect(checkPayment(false)).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by true', () => {  //error
    expect(checkPayment(true)).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by undefined', () => {
    expect(checkPayment(undefined)).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by string', () => { 
    expect(checkPayment("Hiya")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by single character', () => {
    expect(checkPayment("*")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by different characters', () => {
    expect(checkPayment("@$%")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by same characters', () => {
    expect(checkPayment("###")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});




test('error test by different numbers and one character', () => {
    expect(checkPayment("789%")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by one number and same/multiple characters', () => {
    expect(checkPayment("7**()")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by different numbers and bracket', () => {
    expect(checkPayment("(923456)")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});




test('error test by NaN', () => {
    expect(checkPayment(NaN)).toEqual({
        success: false,
        message: "Invalid amount"
    });
});



test('error test by array with different numbers', () => {
    expect(checkPayment([5,6,7,9])).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by array with same numbers', () => {
    expect(checkPayment([5,5,5,5])).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by array with large single number', () => {
    expect(checkPayment([555555555])).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by empty array', () => {
    expect(checkPayment([])).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by array with different types', () => {
    expect(checkPayment([5,'4',true,"hiya"])).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by array with same numbers', () => {
    expect(checkPayment([5,5,5,5])).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by object', () => {
    expect(checkPayment({name:"Hiya", amount:12000})).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by select all sections', () => {
    expect(checkPayment("Select* ")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});

test('error test by select specific section', () => {
    expect(checkPayment("Select payment")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by smallest number', () => {
    expect(checkPayment(Number.MIN_SAFE_INTEGER)).toEqual({
        success: false,
        message: "Payment rejected"
    });
});



test('error test by 0', () => {
    expect(checkPayment(0)).toEqual({
        success: false,
        message: "Payment rejected"
    });
});


test('error test by -100', () => {
    expect(checkPayment(-100)).toEqual({
        success: false,
        message: "Payment rejected"
    });
});


test('error test by empty string', () => {
    expect(checkPayment(" ")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});

test('error test by Upper and same characters', () => {
    expect(checkPayment("HIYAAAAA")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by Upper and consecutive letters', () => {
    expect(checkPayment("ABCDEFHIJKLMNOPQRST")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by brackets and numbers', () => {
    expect(checkPayment("({[55555578576]})")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by stars and same digits', () => {
    expect(checkPayment("*****5555555******")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});

test('error test by all characters', () => {
    expect(checkPayment("{[<>?)(&^%$#@!)]}\\+_-* `!~,." )).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by mixing up with string and integer', () => {
    expect(checkPayment("`5`666666")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});



test('error test by mixing up with number and letters', () => {
    expect(checkPayment("1234567890ABCDabcd")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});