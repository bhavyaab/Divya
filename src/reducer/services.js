'use strict'

let initialState = [ 
  {
    name: 'HAIR SERVICES',
    img: '../images/hairServices.jpeg',
  },
  {
    name: 'SKIN CARE',
    img: '../images/skinCare.jpg',
  },
  {
    name: 'WAXING',
    img: '../images/womanLegs.jpg',
  },
  {
    name: 'THREADING',
    img: '../images/threading-2.jpeg',
  },
  {
    name: 'MASSAGE',
    img: '../images/massage.jpeg',
  },
  {
    name: 'NAIL CARE',
    img: '../images/nailServices.jpeg',
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