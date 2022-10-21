import axios from 'axios'
import { Parser } from 'xml2js'

export class FeedProvider {
  url: string

  async fetch() {
    const response = await axios.get(this.url)
    const parser = new Parser()
    return await parser.parseStringPromise(response.data)
  }
}
