import { exec } from './modules/crons/feed'

export const handler = async () => {
  const result = await exec()
  console.log(result)
}

handler()
