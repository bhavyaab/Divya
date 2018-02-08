var initialState = {
  contact: {
    address: '5504 NE 8th  Place Renton WA 98059',
    mobile: '+1 (425)-233-2388',
    email: 'sondarya@gmail.com',
    googleMap: 'https://goo.gl/maps/v7YVipcUe4A2'
  }
}

export default (state=initialState, action) => {
  let {type, payload} = action
  switch (type) {
  default:
    return state
  }
}