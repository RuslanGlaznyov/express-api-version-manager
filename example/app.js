const express = require('express');
const apiVersionManger = require('../index');
const routerApiV1 = require('./v1');
const routerApiV2 = require('./v2');

const app = express();
console.log(routerApiV1.stack[0]);
app.use('/api/:apiVersion', apiVersionManger({
  apiVersionParamName: 'apiVersion',
  versions: {
    v1: {
      router: routerApiV1
    },
    v2: {
      router: routerApiV2
    },
  }
}));

const PORT = 5555;

app.listen(PORT, () => console.log('servers started on PORT:', PORT));

