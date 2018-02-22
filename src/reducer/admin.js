var initialState = {
  contact: {
    address: '8 Black Thorn ST Little Rock, AR 72223-4536 US',
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
