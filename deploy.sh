sudo pm2 stop <your_blog>
cd /path/to/your/blog
sudo git pull
sudo npm install
sudo npm run mount
sudo pm2 restart <your_blog>
sudo nginx -t
sudo systemctl restart nginx
cd ~
sudo pm2 list
