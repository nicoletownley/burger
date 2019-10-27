 **__Eat Da Burger!__**

# **__What Problem Does The Application Solve?__**  
It solves the problem of tracking burgers and when they have beed devoured through the routing and restful manipulation of the MyQSL database. The application uses
 our local computers as servers. 

# **__What Is The App Doing And Why?__** 
The app is routing information from the front-end through to the backend (full stack) using handlebars to create the UI, node as the server, and Epress and as middleware. The language used is Javascript.

# **__How Is The App Used/Organized?__** 
 The app is organized to receive commands in terminal/bash via node.js. When the server.js file is called upon, Javascript code instructs listening on the port. The user/client is then able to go the the port (front-end), and input data. That data is routed (via Express)to the server where it requires the input information to update as a response the data in the MySQL.

# **__How Do You Run The App?__** 
You run the app by doing the following:

1. Ensure you have the following installed:

Node.js:
* package.jason 
* bodyparser
* method override
* MySQL
* Handlebars

2. Enter into the command base/terminal command line:
 node server.js
3. Input into the local host the port you are listening on (3000):
    * "Da" burger you would like to eat
4. After you have made your selection, you may decide if you would like to eat it by pressing the devour it button. Enjoy!



        
# **__Links:__** 
1. Here is the link where the app is deployed on Heroku:

https://git.heroku.com/nicole-burger-hw.git

 

# **__Technology Used:__**
* Node.js
* Express
* MySQL
* Javascript
* ORM
* Handlebars
* Heroku

# **__My Role In The App Development__**
 My role was to develop the MySQL database, javascript, ORM and Handlebars code necessary meet the requirements of the homework assignment. I also collaborated with other students about approach and functionality.
