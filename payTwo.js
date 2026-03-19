function check(amount) {

  if (!amount) {
    return {
      success: false,
      message: "Invalid amount"
    };
  }

  if (amount > 100) {
    return {
      success: true,
      message: "Payment accepted"
    };
  }

  return {
    success: false,
    message: "Payment rejected"
  };
}

module.exports = check;


