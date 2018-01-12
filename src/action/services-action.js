'use strict'


export const servicesStart = (service) => ({
  type: 'START_SERVICES',
  payload: service
})