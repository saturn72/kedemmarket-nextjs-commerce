import {
  CommerceAPI,
  CommerceAPIConfig,
  getCommerceApi as commerceApi,
} from '@vercel/commerce/api'
import createFetchGraphqlApi from './utils/fetch-graphql-api'
import createFetchStoreApi from './utils/fetch-store-api'

import type { CartAPI } from './endpoints/cart'
import type { CustomerAPI } from './endpoints/customer'
import type { LoginAPI } from './endpoints/login'
import type { LogoutAPI } from './endpoints/logout'
import type { SignupAPI } from './endpoints/signup'
import type { ProductsAPI } from './endpoints/catalog/products'
import type { WishlistAPI } from './endpoints/wishlist'

import login from './operations/login'
import getAllPages from './operations/get-all-pages'
import getPage from './operations/get-page'
import getSiteInfo from './operations/get-site-info'
import getCustomerWishlist from './operations/get-customer-wishlist'
import getAllProductPaths from './operations/get-all-product-paths'
import getAllProducts from './operations/get-all-products'
import getProduct from './operations/get-product'

export interface KedemMarketConfig extends CommerceAPIConfig {
  // Indicates if the returned metadata with translations should be applied to the
  // data or returned as it is
  applyLocale?: boolean
  apiUrl: string
  clientId?: string
  clientSecret?: string

  //to deleted
  storeChannelId?: string
  storeUrl?: string
  storeHash?: string
  storeApiFetch<T>(
    endpoint: string,
    options?: {
      method?: string
      body?: any
      headers?: HeadersInit
    }
  ): Promise<T>
}

let apiUrl = process.env.KEDEMMARKET_API_URL + '/'
while (apiUrl.endsWith('//')) {
  apiUrl = apiUrl.substring(0, apiUrl.length - 1)
}

const clientId = process.env.KEDEMMARKET_CLIENT_ID
const clientSecret = process.env.KEDEMMARKET_CLIENT_SECRET

if (!apiUrl) {
  throw new Error(
    `The environment variable KEDEMMARKET_API_URL is missing and it's required to access your store`
  )
}

const ONE_DAY = 60 * 60 * 24

const config: KedemMarketConfig = {
  commerceUrl: apiUrl,
  apiToken: apiUrl,
  customerCookie: 'SHOP_TOKEN',
  cartCookie: process.env.KEDEMMARKET_CART_COOKIE ?? 'bc_cartId',
  cartCookieMaxAge: ONE_DAY * 30,
  fetch: createFetchGraphqlApi(() => getCommerceApi().getConfig()),
  applyLocale: true,
  // REST API only
  apiUrl: apiUrl,
  clientId: clientId,
  clientSecret: clientSecret,
  storeApiFetch: createFetchStoreApi(() => getCommerceApi().getConfig()),
}

const operations = {
  login,
  getAllPages,
  getPage,
  getSiteInfo,
  getCustomerWishlist,
  getAllProductPaths,
  getAllProducts,
  getProduct,
}

export const provider = { config, operations }

export type Provider = typeof provider

export type APIs =
  | CartAPI
  | CustomerAPI
  | LoginAPI
  | LogoutAPI
  | SignupAPI
  | ProductsAPI
  | WishlistAPI

export type KedemmarketAPI<P extends Provider = Provider> = CommerceAPI<P>

export function getCommerceApi<P extends Provider>(
  customProvider: P = provider as any
): KedemmarketAPI<P> {
  return commerceApi(customProvider)
}
