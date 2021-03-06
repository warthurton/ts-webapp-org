console.log(require('dotenv').config());

import * as express from 'express';
import axios from 'axios';

const app = express();
const port = process.env.PORT || 8080;
const instance = process.env.LOCAL_INSTANCE || 'localhost';
const targetInstance = process.env.TARGET_INSTANCE || 'localhost';

app.get('/hello', (req, res) => res.send(`Hello World - ${instance}`));

app.get('/target', async (req, res) => {
    const response = await axios.get(`http://${targetInstance}:${port}/hello`);

    res.send(response.data);
});

app.listen(port, () => console.log(`${instance} Listening on port ${port}!`));