import { ThePracticalDev } from './classes/ThePracticalDev'
import { ThePracticalDevClient } from './repositories/ThePracticalDevClient'

export function Client (APIKey: string): ThePracticalDev {
  const client = new ThePracticalDevClient(APIKey)
  const instance = new ThePracticalDev(client)
  return instance
}
