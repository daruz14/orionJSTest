import {resolver} from '@orion-js/app'
import Warrior from 'app/components/Warriors/models/Warrior'
import Warriors from 'app/components/Warriors/collections/Warriors'
import randomNumber from '../../../../utils'

export default resolver({
  params: Warrior.clone({
    pickFields: ['name']
  }),
  returns: Warrior,
  mutation: true,
  async resolve(params, viewer) {
    const warrior = await Warriors.insertOne(params)
    await warrior.update(
      {
        $set: {
          attack: randomNumber(),
          defense: randomNumber()
        }
      }
    )
    return warrior
  }
})
