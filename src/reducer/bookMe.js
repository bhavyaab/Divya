import superagent from 'superagent'
// require('dotenv').load();
var apiKey = process.env.IFTTT_KEY || 'jnqBy_aKqPAhnb_9LY_WrFYpeVDQy3YMzjOWRWx5QNp';
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
// let request = {
//   event: 'site_contact',
//   values: {}
// }
export default (state=initialState, action) => {
  let {type, payload} = action
  switch (type) {
    case 'FORM_UPDATE_VALUE':
    state.formData = payload
      return state;
    case 'FORM_SUBMIT_VALUE':
      state.formData = payload
      ifttt(payload)
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

function ifttt(request){
  request = JSON.stringify(request);
  // console.log(' request == ', request )
  superagent.post(`https://maker.ifttt.com/trigger/site_contact/with/key/jnqBy_aKqPAhnb_9LY_WrFYpeVDQy3YMzjOWRWx5QNp`)
  .set('Content-Type', 'application/x-www-form-urlencoded')
  .set('Access-Control-Allow-Origin', '*')
  .send(request)
  .end(function(err, res){
     err? console.error(err) : console.log(res);
  });
}
