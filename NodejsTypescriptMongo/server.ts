import App from './app'
import * as bodyParser from 'body-parser'
import loggerMiddleware from './middleware/logger'

import HomeController from './controllers/home.controller'
import UsersController from './controllers/users.controller'
import LoginController from './controllers/login.controller'

const app = new App({
    port: 5000,
    controllers: [
        new HomeController(),
        new UsersController(),
        new LoginController()
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware
    ]
})

app.listen()