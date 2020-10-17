export type news = {
  source: {
    url: string,
    name: string
  },
  title: string,
  description: string,
  url: string,
  image: string,
  publishedAt: string,
  content: boolean
};
export type newsArray = news[];
export interface NewsResponse {
  totalArticles: number;
  articles: news[];
}
