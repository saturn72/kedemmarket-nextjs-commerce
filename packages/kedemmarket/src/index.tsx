import {
  getCommerceProvider,
  useCommerce as useCoreCommerce,
} from '@vercel/commerce'
import { kedemmarketProvider, KedemmarketProvider } from './provider'

export { kedemmarketProvider }
export type { KedemmarketProvider }

export const CommerceProvider = getCommerceProvider(kedemmarketProvider)

export const useCommerce = () => useCoreCommerce<KedemmarketProvider>()
