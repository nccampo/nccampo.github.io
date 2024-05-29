import express from 'express';
import { router } from './router.js';

const app = express();

//use Express JSON and URL-encoded body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//include the router for your endpoints
app.use(router);

//start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});