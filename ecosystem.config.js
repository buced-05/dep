// Configuration PM2 pour VPS (optionnel - si vous utilisez PM2 pour servir l'application)
// Installation: npm install -g pm2
// Usage: pm2 start ecosystem.config.js

module.exports = {
  apps: [
    {
      name: 'campagne-youan',
      script: 'npm',
      args: 'run preview',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 4173,
      },
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      autorestart: true,
      max_memory_restart: '500M',
      watch: false,
    },
  ],
}

