var initialState = {
  formData: {
    name: 'Your name',
    mobile: 'Your phone number',
    message: 'Your message.. ',
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
    console.log(type, '  ::: ', payload);
      return state;
    case 'FORM_SUBMIT_VALUE':
    console.log(type, '  ::: ', payload);
      return state;
    case 'FORM_RESET':
    console.log(type, '  ::: ', payload);
      return state;
  default:
    return state
  }
}