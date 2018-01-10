
let initialState =  [
  {img: 'http://via.placeholder.com/1250x950', 
  content: 'So there comes the case where the height of the element could be 100px or 100000px.  In that case, were at a bit of a loss because the element isnt fixed-height.  In that case, you have two options.  The first is admitting defeat and using a CSS framework', 
  header: 'Header', 
  subHeader: 'sub header'},
  
  {img: 'http://via.placeholder.com/1250x950', 
  content: 'So there comes the case where the height of the element could be 100px or 100000px.  In that case, were at a bit of a loss because the element isnt fixed-height.  In that case, you have two options.  The first is admitting defeat and using a CSS framework', 
  header: 'Header', 
  subHeader: 'sub header',
  indent: 'right'},
  
  {img: 'http://via.placeholder.com/1250x950', 
  content: 'So there comes the case where the height of the element could be 100px or 100000px.  In that case, were at a bit of a loss because the element isnt fixed-height.  In that case, you have two options.  The first is admitting defeat and using a CSS framework', 
  header: 'Header', 
  subHeader: 'sub header'}
]

export default (state=initialState, action) => {
  let {type, payload} = action
  switch (type) {
  default:
    return state
  }
}
