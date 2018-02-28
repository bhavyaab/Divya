'use strict'
export const bookNow = (form) => ({
  type: 'BOOK_NOW',
  payload: form
})

export function changeForm(form) {
  return dispatch => dispatch({
    type: 'FORM_UPDATE_VALUE',
    payload: form
  });
}
let request = {
    value1: 'Name not shared!',
    value2: 'Contact not shared!',
    value3: 'Hello from portfolio!'
}
export function submitForm(form) {
  if (form.mobile.length < 14 ) return dispatch => dispatch({ type: 'FORM_UPDATE_VALUE', payload: form })
  else {
    request =  {
      value1: form.name || 'Name not shared!',
      value2: form.mobile || 'Contact not shared!',
      value3: form.message || 'Hello from portfolio!'
    }
    return (dispatch) => {
      dispatch({type: 'FORM_SUBMIT_VALUE', payload: request})
      dispatch({ type: 'FORM_RESET'})
    };
  }
}
export function resetForm() {
  return dispatch => dispatch({
    type: 'FORM_RESET'
  });
}
