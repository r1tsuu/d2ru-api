import express from 'express';
import dotenv from 'dotenv';

import { router } from './router';
import { NewsParser } from './parser/news/news';
import { IParser } from './parser/parser';

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(router);

app.get('/', async (req, res) => {
  const p: IParser = { url: 'https://dota2.ru/news/' };
  const newsParser = new NewsParser(p);
  await newsParser.fetchDocument();
  newsParser.parseNews();
});

app.listen(port, () =>
  console.log(`D2RU API unoff server is running on port ${port}`)
);
