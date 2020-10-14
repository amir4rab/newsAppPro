export type news = {
  source: {
    id: string,
    name: string
    },
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: boolean
};
export type newsArray = news[];
export interface NewsResponse {
  status: string;
  totalResults: number;
  articles: newsArray;
}
