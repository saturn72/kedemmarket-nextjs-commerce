import type { KedemMarketConfig } from '../'

async function getCustomerId({
  customerToken,
  config,
}: {
  customerToken: string
  config: KedemMarketConfig
}): Promise<string | undefined> {
  const customer = await config.storeApiFetch<Customer>('customer', {
    headers: {
      cookie: `${config.customerCookie}=${customerToken}`,
    },
  })

  return String(customer?.entityId)
}

export default getCustomerId
