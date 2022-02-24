import axios from 'axios'
import { parse } from 'node-html-parser'

import { IParser } from 'src/types';

export class Parser {
  url: string;
  root: HTMLElement;

  constructor(p: IParser) {
    this.url = p.url;
  }

  async fetchDocument() {
    try {
      const response = await axios.get(this.url)
      this.setRoot(parse(response.data))
    } catch (error) {
      console.error(error)
    }
  }

  setRoot(root) {
    this.root = root
  }

}
