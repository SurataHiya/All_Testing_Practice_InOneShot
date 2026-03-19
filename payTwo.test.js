const check = require("./payTwo");


test("amount is 100", () => {
  expect(check(100)).toEqual({
    success: true,
    message: "Payment accepted"
  });
});


test("amount is more than 100", () => {
  expect(check(12100000000)).toEqual({
    success: true,
    message: "Payment accepted"
  });
});


test("amount is Large number", () => {
  expect(check(Number.MAX_SAFE_INTEGER)).toEqual({
    success: true,
    message: "Payment accepted"
  });
});


test('error test by null', () => {
    expect(check(null)).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by false', () => {
    expect(check(false)).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by true', () => {  //error
    expect(check(true)).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by undefined', () => {
    expect(check(undefined)).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by string', () => { 
    expect(check("Hiya")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by single character', () => {
    expect(check("*")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by different characters', () => {
    expect(check("@$%")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by same characters', () => {
    expect(check("###")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});




test('error test by different numbers and one character', () => {
    expect(check("789%")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by one number and same/multiple characters', () => {
    expect(check("7**()")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by different numbers and bracket', () => {
    expect(check("(923456)")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});




test('error test by NaN', () => {
    expect(check(NaN)).toEqual({
        success: false,
        message: "Invalid amount"
    });
});



test('error test by array with different numbers', () => {
    expect(check([5,6,7,9])).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by array with same numbers', () => {
    expect(check([5,5,5,5])).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by array with large single number', () => {
    expect(check([555555555])).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by empty array', () => {
    expect(check([])).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by array with different types', () => {
    expect(check([5,'4',true,"hiya"])).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by array with same numbers', () => {
    expect(check([5,5,5,5])).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by object', () => {
    expect(check({name:"Hiya", amount:12000})).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by select all sections', () => {
    expect(check("Select* ")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});

test('error test by select specific section', () => {
    expect(check("Select payment")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by smallest number', () => {
    expect(check(Number.MIN_SAFE_INTEGER)).toEqual({
        success: false,
        message: "Payment rejected"
    });
});



test('error test by 0', () => {
    expect(check(0)).toEqual({
        success: false,
        message: "Payment rejected"
    });
});


test('error test by -100', () => {
    expect(check(-100)).toEqual({
        success: false,
        message: "Payment rejected"
    });
});


test('error test by empty string', () => {
    expect(check(" ")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});

test('error test by Upper and same characters', () => {
    expect(check("HIYAAAAA")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by Upper and consecutive letters', () => {
    expect(check("ABCDEFHIJKLMNOPQRST")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by brackets and numbers', () => {
    expect(check("({[55555578576]})")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by stars and same digits', () => {
    expect(check("*****5555555******")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});

test('error test by all characters', () => {
    expect(check("{[<>?)(&^%$#@!)]}\\+_-* `!~,." )).toEqual({
        success: false,
        message: "Invalid amount"
    });
});


test('error test by mixing up with string and integer', () => {
    expect(check("`5`666666")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});



test('error test by mixing up with number and letters', () => {
    expect(check("1234567890ABCDabcd")).toEqual({
        success: false,
        message: "Invalid amount"
    });
});