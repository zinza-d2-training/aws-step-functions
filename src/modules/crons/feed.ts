import { TheNewYorkTimes } from './providers/the-new-york-times'

export const exec = async () => {
  return await Promise.all([TheNewYorkTimes.fetch()])
}
