import {resolver} from '@orion-js/app'
import Warrior from 'app/components/Warriors/models/Warrior'
import Warriors from 'app/components/Warriors/collections/Warriors'

export default resolver({
  params: {
    name: { type: String },
  },
  returns: Warrior,
  async resolve(params, viewer) {
    return await Warriors.findOne(params)
  }
})
