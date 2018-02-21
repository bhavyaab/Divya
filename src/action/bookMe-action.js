'use strict'


export const bookNow = (form) => ({
  type: 'BOOK_NOW',
  payload: form
})

export function change(form) {
  return dispatch => dispatch({
    type: FORM_UPDATE_VALUE,
    payload: form
  });
}
export function submit(form) {
  return dispatch => dispatch({
    type: FORM_SUBMIT_VALUE,
    payload: form
  });
}
export function reset() {
  return dispatch => dispatch({
    type: FORM_RESET
  });
}