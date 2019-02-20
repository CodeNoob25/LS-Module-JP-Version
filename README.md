# LS-Module - JP version

In this project, I used a legacy code base for an AirBnB component which I modified to improve database efficiency.
I restructured the database to decrease unnecessary complexity, and modified the React code to use the next database schemas.
I also tested my new version's upload time against a version with Postgres and found that Mongo was faster.

I also have a version of this code that uses docker-compose.


Justin's notes for deployment setup:

For configuring the deployed mongo database on a regular EC2:
1. sudo apt-get update / curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - / sudo apt-get install -y nodejs /  sudo apt-get install git
2. sudo apt install -y mongodb / sudo npm install mongoose / sudo npm install csv-writer
3. (get the repo)
4. node ./newVersion/newSeedingScript.js
5. npm run upload-csv
6. sudo mkdir -p /data/db
7. sudo ps aux | grep -i mongod (to find process id of the intial mongod process)
8. sudo mongod --bind_ip_all --fork --logpath /var/log/mongod.log (to run in the background)
9. (allow proper access with launch wizard)

For configuring the deployed server on a regular EC2:
1. sudo apt-get update / curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - / sudo apt-get install -y nodejs /  sudo apt-get install git
2. sudo npm install
3. (get the repo)
4. npm run startboth-p