import {Model} from '@orion-js/app'

export default new Model({
  name: 'Warrior',
  schema: () => require('./schema'),
  resolvers: () => require('./resolvers')
})
