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
export function submitForm(form) {
  return dispatch =>
  {
  dispatch({ type: 'FORM_SUBMIT_VALUE', payload: form })
  dispatch({ type: 'FORM_RESET'})
 }
}
export function resetForm() {
  return dispatch => dispatch({
    type: 'FORM_RESET'
  });
}
