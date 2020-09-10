module.exports = function(config) {
  return function(req, res, next) {
    const { versions,  apiVersionParamName } = config;
    const apiVersion = req.params[apiVersionParamName];

    if(!apiVersion) throw new Error('No api version specified');
    const keysConfig = Object.keys(versions);
    const versionRouter = versions[apiVersion];

    if (!versionRouter) return next();

    if (findRoute(versionRouter.router, req.url).length) {
      return versionRouter.router(req, res, next);
    }

    for (let version of keysConfig.slice(0, keysConfig.indexOf(versionRouter))) {
      if (findRoute(versions[version].router, req.url).length) {
        return versions[version].router(req, res, next);
      }
      return next();
    }
  };
};

function trimPrefix(path, prefix) {
  // This assumes prefix is already at the start of path.
  return path.substr(prefix.length);
}

//Thanks to https://github.com/brennancheung/express-remove-route
function _findRoute(path, stack) {
  let routes = [];
  stack.forEach(function(layer) {
    if (!layer) return;
    if (layer && !layer.match(path)) return;
    if (['query', 'expressInit'].indexOf(layer.name) !== -1) return;
    if (layer.name === 'router') {
      routes = routes.concat(
          _findRoute(trimPrefix(path, layer.path), layer.handle.stack));
    } else {
      if (layer.name === 'bound dispatch') {
        routes.push({route: layer || null, stack: stack});
      }
    }
  });
  return routes;
}

function findRoute(router, path) {
  let stack;
  stack = router.stack;
  return (_findRoute(path, stack));
}