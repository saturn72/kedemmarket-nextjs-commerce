import type {
  OperationContext,
  OperationOptions,
} from '@vercel/commerce/api/operations'
// import type { GetAllProductPathsQuery } from '../../../schema'
import type { GetAllProductPathsOperation } from '@vercel/commerce/types/product'
import type { RecursivePartial, RecursiveRequired } from '../utils/types'
import filterEdges from '../utils/filter-edges'
import { KedemMarketConfig, Provider } from '..'

export type ProductSlug = {
  data: string
}

export default function getAllProductPathsOperation({
  commerce,
}: OperationContext<Provider>) {
  async function getAllProductPaths<
    T extends GetAllProductPathsOperation
  >(opts?: {
    variables?: T['variables']
    config?: KedemMarketConfig
  }): Promise<T['data']>

  async function getAllProductPaths<T extends GetAllProductPathsOperation>(
    opts: {
      variables?: T['variables']
      config?: KedemMarketConfig
    } & OperationOptions
  ): Promise<T['data']>

  async function getAllProductPaths<T extends GetAllProductPathsOperation>({
    query = '',
    variables,
    config,
  }: {
    query?: string
    variables?: T['variables']
    config?: KedemMarketConfig
  } = {}): Promise<T['data']> {
    throw new Error('not implemented')
    config = commerce.getConfig(config)
    // // RecursivePartial forces the method to check for every prop in the data, which is
    // // required in case there's a custom `query`
    // const { data } = await config.fetch<ProductSlug>(query, { variables })
    // const products = data.site?.products?.edges

    // return {
    //   products: filterEdges(products as RecursiveRequired<typeof products>).map(
    //     ({ node }) => node
    //   ),
    // }
  }
  return getAllProductPaths
}
