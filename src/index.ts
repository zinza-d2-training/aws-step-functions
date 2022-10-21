import { exec } from './modules/crons/feed'
import { Builder } from 'xml2js'

export const handler = async () => {
  const sites = await exec()
  const builder = new Builder()
  for (const site of sites) {
    const xml = builder.buildObject(site)
  }
}

handler().catch(console.log)
