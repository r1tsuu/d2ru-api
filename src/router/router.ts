import express from 'express';

import { api } from './api';

export const router = express.Router().use('/api', api);
