import type {
  OperationContext,
  OperationOptions,
} from '@vercel/commerce/api/operations'
import type {
  GetAllProductsOperation,
  Product,
} from '@vercel/commerce/types/product'
import { KedemMarketConfig, Provider } from '..'
import apiUris from '../apiUris'
import { normalizeProduct } from '../../lib/normalize'

export type GetAllProductsResult<
  T extends Record<keyof GetAllProductsResult, any[]> = {
    products: Product[]
  }
> = T

function buildProductFilters(
  relevance?: GetAllProductsOperation['variables']['relevance']
): string[] {
  const res = []
  if (relevance == 'featured') {
    res.push('featured')
  }
  if (relevance == 'best_selling') {
    res.push('best-seller')
  }

  if (relevance == 'newest') {
    res.push('new')
  }
  return res
}

export default function getAllProductsOperation({
  commerce,
}: OperationContext<Provider>) {
  async function getAllProducts<T extends GetAllProductsOperation>(opts?: {
    variables?: T['variables']
    config?: Partial<KedemMarketConfig>
    preview?: boolean
  }): Promise<T['data']>

  async function getAllProducts<T extends GetAllProductsOperation>(
    opts: {
      variables?: T['variables']
      config?: Partial<KedemMarketConfig>
      preview?: boolean
    } & OperationOptions
  ): Promise<T['data']>

  async function getAllProducts<T extends GetAllProductsOperation>({
    variables: vars = {},
    config: cfg,
  }: {
    variables?: T['variables']
    config?: Partial<KedemMarketConfig>
  } = {}): Promise<T['data']> {
    return Promise.resolve({ products: [] })

    // const config = commerce.getConfig(cfg)
    // const usp = new URLSearchParams()
    // if (vars.first && vars.first != 0) {
    //   usp.append('offset', vars.first.toString())
    // }
    // if (vars.ids && vars.ids.length > 0) {
    //   usp.append('productIds', vars.ids.join())
    // }
    // const filter = buildProductFilters(vars.relevance)
    // if (filter && filter.length > 0) {
    //   filter.forEach((pt: string) => usp.append('filter', pt))
    // }
    // const q = usp.size > 0 ? undefined : '?' + usp
    // const products = await config.storeApiFetch<any[]>(apiUris.product + q)
    // return {
    //   products: products.map(normalizeProduct),
    // }
  }

  return getAllProducts
}
