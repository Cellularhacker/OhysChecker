import * as Parser from "rss-parser";
import { Log } from "../../ext/util";
import RssParserModel from "../../model/RssParser/common";
import { Parse } from "../../model/RssParser/Parse";
import { OhysRssItem, OhysRssResult } from "../../types/Ohys";

export class SearchRSS {
  private parser: Parser;
  private readonly baseURL: string =
    "https://torrents.ohys.net/t/rss.php?dir=disk&q=";
  constructor(parser: Parser) {
    this.parser = parser;
  }
  public searchName(keyword: string): Promise<OhysRssResult> {
    return new Promise<OhysRssResult>((resolve, reject) => {
      this.parser
        .parseURL(this.baseURL + keyword)
        .then(res => {
          return resolve(<OhysRssResult>res);
        })
        .catch(err => {
          return reject(err);
        });
    });
  }
  public searchNameAndGetLatest(keyword: string): Promise<OhysRssItem> {
    return new Promise<OhysRssItem>((resolve, reject) => {
      this.parser
        .parseURL(this.baseURL + keyword)
        .then(res => {
          return resolve(<OhysRssItem>res[0]);
        })
        .catch(err => {
          return reject(err);
        });
    });
  }
}
