'use strict'

let initialState = {
  hair: {
    name: 'Hair',
    types: {
      'COLOR': [{'FULL FOIL': '123'}, {'PARTIAL FOIL': '90'},{'FULL COLOR': '80'}, {'COLOR RETOUCH': '70'},{'TONER':'90'}, {'BALAYAGE': '143'}, {'PARTIAL BALAYAGE': '123'},
    {'MEN\'S CAMO COLOR': '30'}, {'EYEBROW TINT': '21'}],
      'BRAZILIAN BLOWOUT': [{ 'BRAZILIAN BLOWOUT 1OZ': '230' }, {'SPLIT END REPAIR': '45'}],
      'COMBO APPOINTMENTS' : [{'PARTIAL FOIL & HAIRCUT': '135'}, {'PERM & HAIRCUT': '125'}, {'BLEACH & TONE': '102'}, {'COLOR RETOUCH & HAIRCUT': '103'}],
      'CONDITIONING TREATMENTS' : [{'MOROCCAN OIL DRY SCALP TREATMENT': '27'}, {'MOROCCAN OIL OILY SCALP TREATMENT': '27'}, {'OLAPLEX': '32'},{'POWERDOSE': '27'}, {'KEVIN MURPHY ANTI AGING': '27'},{'KEVIN MURPHY THICKENING': '27'},{'KEVIN MURPHY MOISTURE': '27'},{'KEVIN MURPHY STRENGTH': '27'}],
      'HAIRCUTS': [{'WOMEN\'S HAIRCUT': '46-70'},{ 'MEN\'S HAIRCUT': '39-51'}, {'CHILD\'S HAIRCUT(0-12)': '25-50'},{'HEAD SHAVE':'25-40'}],
      'PERMS': [{'FULL PERM': '81'}, {'PARTIAL PERM': '71'},{'SPIRAL PERM': '123'}],
      'STYLE': [{'FLAT IRON/CURL': '32'},{'SPECIAL OCCASION STYLE': '71'},{'SHAMPOO BLOWDRY': '39-51'}]
    }
  },
  facial: {
    name: 'Facial',
    types: {
      '': [{'Rejuvenating Facial (45 minutes)': '70.00'},{'Oxygenating Trio Facial (45 minutes)' : '70.00'}]
    }
  },
  threading: {
    name: 'Threading',
    types: {
      '': [{'Eyebrow threading': '3.99'}]
    }
  },
  waxing: {
    name: 'Waxing',
    types: {
      '': [ {'Billion Dollar Brow (includes shaping)': '20.00'},
                  {'Lip': '10.00'},{'Chin': '15.00'},{'Jawline': '15.00'},{'Sideburns': '15.00'},{'Underarm': '20.00'}]
    }
  }
}
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