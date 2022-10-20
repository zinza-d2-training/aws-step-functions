export interface FeedProvider {
  url: string;
  fetch: () => object
}
