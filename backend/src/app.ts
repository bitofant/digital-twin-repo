import path from 'path';
import express from 'express';
import { readdir } from 'fs';
const app = express();

app.use (express.static('../frontend/dist/'));

app.listen(8080, () => {
  console.log('app listening on port :8080');
});
