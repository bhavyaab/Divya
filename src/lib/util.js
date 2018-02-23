export const renderIf = (test, component) => test? component : undefined

export const classToggler = (option) => Object.keys(option).filter(key => !!option[key].join(' '))

// x == this
export const toggleState = (key, x) => {
  const currentState = x.state[key]
  x.setState({key : !currentState})
}

export const log = (act, msg) => {
  __DEBUG__ ? act == '__ERROR__'? console.error(act, msg):console.debug(act, msg) : ''
}


export const formateTel = (data) => {
  var len = data.length
  var number = data.split('+1').join('').split('(').join('').split(')').join('').split('-').join('');
  if(isNaN(Number(number))) {
    alert('Please enter a valid number!')
    return '';
  }
  if(len < 15){
    len == 1 ? data = '(' + data : len == 4? data = data + ')-' : len == 9 ? data = data + '-': data
  }
  return data
}
