export class KedemmarketApiError extends Error {
  status: number
  res: Response
  data: any

  constructor(msg: string, res: Response, data?: any) {
    super(msg)
    this.name = 'KedemmarketApiError'
    this.status = res.status
    this.res = res
    this.data = data
  }
}

export class KedemmarketNetworkError extends Error {
  constructor(msg: string) {
    super(msg)
    this.name = 'KedemmarketNetworkError'
  }
}
