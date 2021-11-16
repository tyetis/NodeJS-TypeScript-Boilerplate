"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const ExpressSession = require("express-session");
const MongoDatabase_1 = require("./models/MongoDatabase");
const auth_middleware_1 = require("./middleware/auth.middleware");
const path = require("path");
class App {
    constructor(appInit) {
        this.app = express();
        this.port = appInit.port;
        this.assets();
        this.middlewares(appInit.middleWares);
        this.routes(appInit.controllers);
        this.template();
        (0, MongoDatabase_1.default)().catch(err => console.log(err));
        //InitSqlite()
    }
    middlewares(middleWares) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare);
        });
    }
    routes(controllers) {
        const emptyNext = (req, res, next) => { next(); };
        controllers.forEach(controller => {
            const prefix = controller.constructor.prefix;
            const isAuth = controller.constructor.isAuth ? auth_middleware_1.default : emptyNext;
            controller.constructor.routes.forEach((route) => {
                const routepath = path.posix.join(prefix, route.path);
                this.app[route.requestMethod](routepath, isAuth, (req, res) => {
                    controller[route.methodName](req, res);
                });
            });
        });
    }
    assets() {
        this.app.use(express.static('public'));
        this.app.use(express.static('views'));
        this.app.use(ExpressSession({
            secret: 'hey',
            resave: false,
            saveUninitialized: true
        }));
        this.app.use((req, res, next) => {
            //res.locals.user = req.session.user || false;
            res.locals.path = req.path;
            next();
        });
    }
    template() {
        this.app.set('view engine', 'pug');
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map