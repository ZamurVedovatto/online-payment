const paystack = (request) => {
  const MySecretKey = 'Bearer sk_test_33b918df778f55a6f87c308c37e9bbd93ae7efa9';

  const initializePayment = (form, mycallback) => {
    const options = {
      url : 'https://api.paystack.co/transaction/initialize',
      headers : {
          authorization: MySecretKey,
          'content-type': 'application/json',
          'cache-control': 'no-cache'
      },
      form
    }
    const callback = (error, response, body) => {
      return mycallback(error, body);
    }
    request.post(options,callback);
  }

  const verifyPayment = (ref, mycallback) => {
    const options = {
      url : 'https://api.paystack.co/transaction/verify/' + encodeURIComponent(ref),
      headers : {
        authorization: MySecretKey,
        'content-type': 'application/json',
        'cache-control': 'no-cache'
      }
    }
    const callback = (error, response, body) => {
      return mycallback(error, body);
    }
    request(options,callback);
  }

  return {initializePayment, verifyPayment};
}