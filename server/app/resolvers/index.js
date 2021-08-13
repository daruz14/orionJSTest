import {resolversSchemas} from '@orion-js/graphql'
import Auth from './Auth'
import Users from './Users'
import Components from './../components/resolvers'

export default {
  ...resolversSchemas,
  ...Auth,
  ...Users,
  ...Components
}
