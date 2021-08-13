import {resolver} from '@orion-js/app'
import Warrior from 'app/components/Warriors/models/Warrior'
import Warriors from 'app/components/Warriors/collections/Warriors'
import utils from '../../../../utils'

export default resolver({
  params: Warrior.clone({
    pickFields: ['name']
  }),
  returns: Warrior,
  mutation: true,
  async resolve(params, viewer) {
    const insertData = {
      name: params.name,
      attack: utils.randomNumber(),
      defense: utils.randomNumber()
    }
    const warriorId = await Warriors.insertOne(insertData)
    const warrior = await Warriors.findOne(warriorId)
    return warrior
  }
})
