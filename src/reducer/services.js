'use strict'

let initialState = [ 
  {
    name: 'HAIR SERVICES',
    img: '../images/hairServices-2.jpeg',
  },
  {
    name: 'SKIN CARE',
    img: '../images/skinCare-2.jpg',
  },
  {
    name: 'WAXING',
    img: '../images/womanLegs-2.jpg',
  },
  {
    name: 'THREADING',
    img: '../images/threading-2.jpeg',
  },
  {
    name: 'MASSAGE',
    img: '../images/massage-2.jpeg',
  },
  {
    name: 'NAIL CARE',
    img: '../images/nailServices-2.jpeg',
  }
]
export default (state=initialState, action) => {
  let {type, payload} = action
  switch (type) {
  default:
    return state
  }
}
export const servicesStart = (service) => ({
  type: 'START_SERVICES',
  payload: service
})