
let initialState =  {}

export default (state=initialState, action) => {
  let {type, payload} = action
  switch (type) {
  case 'START_GAME':
    return state
  default:
    return state
  }
}
