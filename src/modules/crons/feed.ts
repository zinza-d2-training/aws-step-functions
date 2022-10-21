import { TheNewYorkTimes } from './providers/the-new-york-times'
import { ABCNews } from './providers/abc-news'
import { CbsNew } from './providers/cbs-new'
import { CNN } from './providers/cnn'
import { YahooNews } from './providers/yahoo'
import { FeedProvider } from './providers/FeedProvider'
import { delay } from '../../utils/delay'

const feedProviders: FeedProvider[] = [
  new ABCNews(),
  new CbsNew(),
  new CNN(),
  new TheNewYorkTimes(),
  new YahooNews(),
]

export const exec = async () => {
  const providers = []
  for (let i = 1; i <= 5; i++) {
    const result = await Promise.all(feedProviders.map((provider) => provider.fetch()))
    providers.push(result)
    console.log(result)
    console.log(Date.now())
    await delay(1000)
  }
  return providers
}
