import type {
  OperationContext,
  OperationOptions,
} from '@vercel/commerce/api/operations'
import type { GetProductOperation } from '@vercel/commerce/types/product'
import setProductLocaleMeta from '../utils/set-product-locale-meta'
import { productInfoFragment } from '../fragments/product'
import { KedemMarketConfig, Provider } from '..'
import { normalizeProduct } from '../../lib/normalize'

// TODO: See if this type is useful for defining the Product type
// export type ProductNode = Extract<
//   GetProductQuery['site']['route']['node'],
//   { __typename: 'Product' }
// >

export default function getAllProductPathsOperation({
  commerce,
}: OperationContext<Provider>) {
  async function getProduct<T extends GetProductOperation>(opts: {
    variables: T['variables']
    config?: Partial<KedemMarketConfig>
    preview?: boolean
  }): Promise<T['data']>

  async function getProduct<T extends GetProductOperation>(
    opts: {
      variables: T['variables']
      config?: Partial<KedemMarketConfig>
      preview?: boolean
    } & OperationOptions
  ): Promise<T['data']>

  async function getProduct<T extends GetProductOperation>({
    query = '',
    variables: { slug, ...vars },
    config: cfg,
  }: {
    query?: string
    variables: T['variables']
    config?: Partial<KedemMarketConfig>
    preview?: boolean
  }): Promise<T['data']> {
    const config = commerce.getConfig(cfg)
    const { locale } = config
    // const variables: GetProductQueryVariables = {
    //   locale,
    //   hasLocale: !!locale,
    //   path: slug ? `/${slug}` : vars.path!,
    // }
    const { data } = await config.fetch<any>(query, {
      // variables,
    })
    const product = data.site?.route?.node

    if (product?.__typename === 'Product') {
      if (locale && config.applyLocale) {
        setProductLocaleMeta(product)
      }

      return { product: normalizeProduct(product as any) }
    }

    return {}
  }
  return getProduct
}
