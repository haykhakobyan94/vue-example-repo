module.exports = {
  apps : [{
    name: 'aromo',
    script: 'npm',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    cwd: '.current',
    env: {
      NODE_ENV: 'stage',
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && npm run build && pm2 startOrRestart ecosystem.config.js --env production && pm2 save'
    }
  }
};
