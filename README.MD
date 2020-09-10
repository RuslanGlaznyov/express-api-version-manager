# **express-api-version-manager**

express-version-api-manager is a node.js module to help you manage api versions with express routes

-----------

## Installation 

    npm install express-api-version-manager

----------

## Usage 

        app.use('/api/:apiVersion', apiVersionManager({
          apiVersionParamName: 'apiVersion',
          versions: {
            v1: {
              router: routerApiV1
            },
            v2: {
              router: routerApiV2
            },
            v3: {
              router: routerApiV3
            }
          }
        }));




## Example 
~~~~
const express = require('express');
const apiVersionManager = require('./../index');
const app = express();

const routerApiV1 = express.Router();

const routerApiV2 = express.Router();

const routerApiV3 = express.Router();



app.use('/api/:apiVersion', apiVersionManager({
  apiVersionParamName: 'apiVersion',
  versions: {
    v1: {
      router: routerApiV1
    },
    v2: {
      router: routerApiV2
    },
    v3: {
      router: routerApiV3
    }
  }
}));
//call api/v1/user response -> user1
routerApiV1.get('/user', (req, res) => res.send('user1'));
//call api/v2/user response -> user2
routerApiV2.get('/user', (req, res) => res.send('user2'));
//call api/v3/user response -> user3
routerApiV3.get('/user', (req, res) => res.send('user3'));



//call api/v1/admin response -> admin
//call api/v2/admin response -> admin
//call api/v3/admin response -> admin
//because v2 and v3 inherit from v1
routerApiV1.get('/admin', (req, res) => res.send('admin'));

~~~~
-------
## Contact

[GitHub](https://github.com/RuslanGlaznyov/express-api-version-manager). 
