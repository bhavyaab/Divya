var initialState = {
  about: 'We are a full-service beauty salon. Our licensed cosmetologist are dedicated to consistently providing high customer satisfaction by rendering excellent service, quality products, and furnishing an enjoyable atmosphere at an acceptable price/value relationship. We also maintain a friendly, fair, and creative work environment, which respects diversity, ideas, and hard work.',
  contact: {
    address: '8 Black Thorn ST Little Rock, AR 72223-4536 United States',
    mobile: '+1 (919)-455-8210',
    email: 'sondarya@gmail.com',
    googleMap: 'https://goo.gl/maps/oU3JsqFNeVT2'
  }
}

export default (state=initialState, action) => {
  let {type, payload} = action
  switch (type) {
  default:
    return state
  }
}
