import { gql } from '@apollo/client'
import { polkadotOnly } from '../../whitelist'
import { postQuery, spaceData } from '../utils'
import { graphqlQuery } from '../query'

export const polkadotPageQuery = async () => {
   return await graphqlQuery({
      query: gql`
      ${postQuery(polkadotOnly)}
      `,
   })
}