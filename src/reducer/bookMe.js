var initialState = {
  formData: {
    name: '',
    mobile: '',
    message: '',
  },
  placeholder: {
    name: 'Your name',
    mobile: 'Your phone number',
    message: 'Your message.. '
  }
}


export default (state=initialState, action) => {
  let {type, payload} = action
  switch (type) {
    case 'FORM_UPDATE_VALUE':
    state.formData = payload
      return state;
    case 'FORM_SUBMIT_VALUE':
      return state;
    case 'FORM_RESET':
    state.formData = {
      name: '',
      mobile: '',
      message: '',
    }
      return state;
  default:
    return state
  }
}
