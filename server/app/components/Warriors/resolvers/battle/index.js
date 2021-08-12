import {resolver} from '@orion-js/app'
import Warriors from 'app/components/Warriors/collections/Warriors'

export default resolver({
  params: {
    nameFirstWarrior: String,
    nameSecondWarrior: String
  },
  returns: String,
  async resolve({ nameFirstWarrior, nameSecondWarrior }, viewer) {
    if (!nameFirstWarrior || !nameSecondWarrior) return 'Falta un guerrero'

    const firstWarrior = await Warriors.findOne({ name: nameFirstWarrior })
    const secondWarrior = await Warriors.findOne({ name: nameSecondWarrior })

    let result = 'La pelea termino en empate'

    if (firstWarrior.attack > secondWarrior.defense) {
      result = `Victoria para ${firstWarrior.name}`
    } else if (secondWarrior.attack > firstWarrior.defense) {
      result = `Victoria para ${secondWarrior.name}`
    }
    return result
  }
})
