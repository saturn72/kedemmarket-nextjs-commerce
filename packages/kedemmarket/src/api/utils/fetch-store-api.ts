import type { KedemMarketConfig } from '../index'
import { KedemmarketApiError, KedemmarketNetworkError } from './errors'

const fetchStoreApi =
  <T>(getConfig: () => KedemMarketConfig) =>
  async (
    uri?: string,
    options?: {
      method?: string
      body?: any
      headers?: HeadersInit
    }
  ): Promise<T> => {
    return Promise.resolve({} as T)
    throw new Error('not implemented')
    console.log('wwwwwwwww')

    const config = getConfig()
    console.log('ssssssssssssss', config.apiUrl)

    let res: Response

    try {
      res = await fetch(config.apiUrl + uri, {
        ...options,
        headers: {
          ...options?.headers,
          'Content-Type': 'application/json',
        },
      })
    } catch (error: any) {
      throw new KedemmarketNetworkError(
        `Fetch to Kedemmarket failed: ${error.message}`
      )
    }

    const contentType = res.headers.get('Content-Type')
    const isJSON = contentType?.includes('application/json')

    if (!res.ok) {
      const data = isJSON ? await res.json() : await getTextOrNull(res)
      const headers = getRawHeaders(res)
      const msg = `Kedemmarket api error (${
        res.status
      }) \nHeaders: ${JSON.stringify(headers, null, 2)}\n${
        typeof data === 'string' ? data : JSON.stringify(data, null, 2)
      }`

      throw new KedemmarketApiError(msg, res, data)
    }

    if (res.status !== 204 && !isJSON) {
      throw new KedemmarketApiError(
        `Fetch to Kedemmarket API failed, expected JSON content but found: ${contentType}`,
        res
      )
    }

    // If something was removed, the response will be empty
    return res.status === 204 ? null : await res.json()
  }
export default fetchStoreApi

function getRawHeaders(res: Response) {
  const headers: { [key: string]: string } = {}

  res.headers.forEach((value, key) => {
    headers[key] = value
  })

  return headers
}

function getTextOrNull(res: Response) {
  try {
    return res.text()
  } catch (err) {
    return null
  }
}
