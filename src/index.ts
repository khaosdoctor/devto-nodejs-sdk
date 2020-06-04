import { ThePracticalDevClient } from './repositories/ThePracticalDevClient'

export function Client (APIKey: string): ThePracticalDevClient {
  const client = new ThePracticalDevClient(APIKey)
  return client
}
