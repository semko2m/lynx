# lynx-api

a [Sails v1](https://sailsjs.com) application

### Api routes : 

GET /users --- will get all users
GET /users/:id -- get user width specific id example : http://localhost:1337/users/1
GET /users/search -- qeury DB . Need to specify startData and endDate http://localhost:1337/users/search?startDate=2/4/2014&endDate=12/12/2020
POST /users -- create user. You need to send post request width fields
PUT /users/:id -- update
DELETE /users/:id -- delete


Please create mysql DB. 

Edit settings in local.js to the your DB settings.

You need to run mysqlscripts.sql to your local DB. it will create DB and table

Run "sails lift" in console to run this backend

My node version is 10
