import { FeedProvider } from '../interfaces'
import axios from 'axios'
import { parseString } from 'xml2js'

export const TheNewYorkTimes: FeedProvider = {
  url: 'https://feeds.simplecast.com/54nAGcIl',
  async fetch() {
    const response = await axios.get(this.url)
    return parseString(response.data)
  },
}
