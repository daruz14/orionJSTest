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

    const [firstWarrior, secondWarrior] = await Promise.all([
    Warriors.findOne({ name: nameFirstWarrior }), Warriors.findOne({ name: nameSecondWarrior })])

    if (firstWarrior.attack > secondWarrior.defense) {
      return `Victoria para ${firstWarrior.name}`
    } else if (secondWarrior.attack > firstWarrior.defense) {
      return `Victoria para ${secondWarrior.name}`
    }
    return 'La pelea termino en empate'
  }
})
