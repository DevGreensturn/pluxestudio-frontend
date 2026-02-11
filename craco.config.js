module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      if (webpackConfig.devServer) {
        const oldOnAfter = webpackConfig.devServer.onAfterSetupMiddleware;
        const oldOnBefore = webpackConfig.devServer.onBeforeSetupMiddleware;
        
        delete webpackConfig.devServer.onAfterSetupMiddleware;
        delete webpackConfig.devServer.onBeforeSetupMiddleware;
        
        if (oldOnAfter || oldOnBefore) {
          const existingSetupMiddlewares = webpackConfig.devServer.setupMiddlewares;
          
          webpackConfig.devServer.setupMiddlewares = (middlewares, devServer) => {
            if (oldOnBefore && typeof oldOnBefore === 'function') {
              oldOnBefore(devServer);
            }
            
            let result = middlewares;
            if (existingSetupMiddlewares && typeof existingSetupMiddlewares === 'function') {
              result = existingSetupMiddlewares(middlewares, devServer);
            }
            
            if (oldOnAfter && typeof oldOnAfter === 'function') {
              oldOnAfter(devServer);
            }
            
            return result;
          };
        } else if (!webpackConfig.devServer.setupMiddlewares) {
          webpackConfig.devServer.setupMiddlewares = (middlewares) => middlewares;
        }
      }
      return webpackConfig;
    },
  },
  devServer: (devServerConfig) => {
    if (devServerConfig.onAfterSetupMiddleware) {
      const oldOnAfter = devServerConfig.onAfterSetupMiddleware;
      delete devServerConfig.onAfterSetupMiddleware;
      
      if (!devServerConfig.setupMiddlewares) {
        devServerConfig.setupMiddlewares = (middlewares, devServer) => {
          if (oldOnAfter && typeof oldOnAfter === 'function') {
            oldOnAfter(devServer);
          }
          return middlewares;
        };
      }
    }
    
    if (devServerConfig.onBeforeSetupMiddleware) {
      const oldOnBefore = devServerConfig.onBeforeSetupMiddleware;
      delete devServerConfig.onBeforeSetupMiddleware;
      
      if (!devServerConfig.setupMiddlewares) {
        devServerConfig.setupMiddlewares = (middlewares, devServer) => {
          if (oldOnBefore && typeof oldOnBefore === 'function') {
            oldOnBefore(devServer);
          }
          return middlewares;
        };
      } else {
        const existing = devServerConfig.setupMiddlewares;
        devServerConfig.setupMiddlewares = (middlewares, devServer) => {
          if (oldOnBefore && typeof oldOnBefore === 'function') {
            oldOnBefore(devServer);
          }
          return existing(middlewares, devServer);
        };
      }
    }
    
    return devServerConfig;
  },
};
