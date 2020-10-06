
# PIN BackEnd
Built using NodeJs + Express framework

___
## Dependencies
* express 
* express-rate-limit & express-mongo-sanitize & xss-clean & hpp → **Security handler, limit request, prevent SQL injection, XSS, parameter pollution**
* mongoose → **MongoDB ORMS**
* helmet
* jsonwebtoken
* bcryptjs → **to hash password**
* cors
* dotenv

___
## File Structure
```javascript
.
|__server.js
|__app.js
|__.env
|__config.js
|__src
|  |__constants
|  |  |__general.constant.js   //constant shared to all files
|  |  |__user              
|  |     |__user.constant.js   
|  |__controllers
|  |  |__auth.controller.js    //login, activate, protected route logic
|  |  |__base.controllerjs     //base logic to get, create, update, delete field in database
|  |  |__error.controllerjs    //error schema
|  |  |__user
|  |     |__user.controller.js
|  |__routes
|  |  |__index.js
|  |  |__user
|  |     |__user.routes.js
|  |__models
|     |__user
|        |__userAccount.model.js
```
* **server.js** : Responsible for connecting the MongoDB and starting the server.
* **app.js** : Configure everything that has to do with Express application and routing
* **.env**: for storing Enviroment Varaiables
* **constants**: store success message, error message, or anything that is constant throughout the app, mostly something that is repetitive
* **routes**: The goal of the route is to guide the request to the correct handler function which will be in one of the controllers
* **controllers**: Handle the application request, interact with models and send back the response to the client
* **models (Business logic)**: related to business rules, how the business works and business needs ( Creating new user in the database, checking if the user password is correct, validating user input data)

___
## Initialize App
1. run ```npm install```
2. you can start the app by running the scripts below

___
## Scripts
* To start the app:
 ```javascript
npm run start
```
* To debug the app:
 ```javascript
npm run debug
```
* To run unit test:
```javascript
npm run test
```
* To run the eslint:
 ```javascript
npm run lint
```
* To run the eslint and fix the style of the code using prettier:
```javascript
npm run lint:fix
```

___
## Deployment

##### in development
1. run ```heroku login``` , to login to heroku account
2. ```heroku create``` git create repository at heroku (**only for first time**)
3. ```git add and git commit ```
4. run ```git push heroku master``` to push to heroku git repository
5. you can see the URL where the app is hosted
6. you can see the logs of the app by run ```heroku logs --tail```

___
## Routes 


___
## Developers
* [Andreas Sujono](https://github.com/Andreas-Sujono/)
