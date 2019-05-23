import * as Parser from "rss-parser";
import { Log } from "../../ext/util";

export default class Common {
  private readonly parser: Parser;

  constructor() {
    this.parser = new Parser();
    Log.success(`SuccessFully RssParser Generated`);
  }

  public getParser(): Parser {
    return this.parser;
  }
}