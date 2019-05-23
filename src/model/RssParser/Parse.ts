import * as Parser from "rss-parser";
import { Log } from "../../ext/util";

export class Parse {
  private parser: Parser;

  constructor(parser: Parser) {
    this.parser = parser;
  }

  public url(url: string): Promise<any> {
    Log.normal(`Parsing : ${url}`);
    return this.parser.parseURL(url);
  }
}
