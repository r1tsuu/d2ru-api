import { INews } from 'src/types';
import { Parser } from '../parser';

export class NewsParser extends Parser {
  newsList: Array<INews>;

  public parseNews() {
    if (!this.root) {
      console.log('err, no doc');
      return;
    }

    const newsItemsList = this.root.querySelectorAll('.index__news-item');

    let newsList: Array<INews> = [];
    newsItemsList.forEach((newsItem) => {
      console.log(this.getLink(newsItem.querySelector('a.index__news-link')));
    });
  }

  private getLink(newsItemLink: Element) {
    return newsItemLink.getAttribute('href');
  }
}
