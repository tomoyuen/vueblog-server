module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'vueblog-server',
      script    : 'server.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'root',
      host : '103.79.78.141',
      ref  : 'origin/master',
      repo : 'git@github.com:tomoyuen/vueblog-server.git',
      path : '/root/www/vueblog-server',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    dev: {
      user: 'root',
      host : '103.79.78.141',
      ref  : 'origin/master',
      repo : 'git@github.com:tomoyuen/vueblog-server.git',
      path : '/root/www/vueblog-server',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env dev',
      env: {
        NODE_ENV: 'dev'
      }
    }
  }
};
