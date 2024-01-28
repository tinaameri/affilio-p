module.exports = {
  apps: [
    {
      name: 'affilio_front',
      script: 'npm',
      args: 'start',

      instances: '1',
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',

      log_type: 'json',
      log_date_format: 'DD-MM-YYYY',
      merge_logs: true,

      env: {
        NODE_ENV: 'production',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],

  deploy: {
    production: {
      user: 'root',
      host: '159.69.209.246',
      ref: 'origin/affilio-cms',
      repo: 'git@g.smartech.ir:adtech/adtech-affilio-website.git',
      path: '/var/www/affilio/',
      'pre-setup':
        "echo 'PRE_SETUP: commands or local script path to be run on the host before the setup process starts'",
      'post-setup':
        "echo 'POST_SETUP: commands or a script path to be run on the host after cloning the repo'",
      'pre-deploy-local': "echo 'PRE_DEPLOY_LOCAL'",
      'pre-deploy': "echo 'PRE_DEPLOY'",
      'post-deploy': './deploy',
    },
  },
};
