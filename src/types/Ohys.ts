export interface OhysRssResult {
  items: OhysRssItem[];
  title: string;
  link: string;
}

export interface OhysRssItem {
  title: string;
  link: string;
  pubDate: string;
}
