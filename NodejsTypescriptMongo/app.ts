import * as express from 'express'
import { Application, Request, Response } from 'express'
import * as ExpressSession from 'express-session';
import InitMongo from './models/MongoDatabase'
import InitSqlite from './models/SqliteDatabase'
import authMiddleware from './middleware/auth.middleware'
import RouteDefinition from './infrastructure/decorators/decorator.RouteDefinition'
import * as path from 'path';

class App {
    public app: Application
    public port: number

    constructor(appInit: { port: number; middleWares: any; controllers: any; }) {
        this.app = express()
        this.port = appInit.port

        this.assets()
        this.middlewares(appInit.middleWares)
        this.routes(appInit.controllers)
        this.template()
        InitMongo().catch(err => console.log(err));
        //InitSqlite()
    }

    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare)
        })
    }

    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
        const emptyNext = (req: Request, res: Response, next) => { next() }
        controllers.forEach(controller => {
            const prefix = controller.constructor.prefix;
            const isAuth = controller.constructor.isAuth ? authMiddleware : emptyNext
            controller.constructor.routes.forEach((route: RouteDefinition) => {
                const routepath = path.posix.join(prefix, route.path);
                this.app[route.requestMethod](routepath, isAuth, (req: Request, res: Response) => {
                    controller[route.methodName](req, res)
                })
            })
        })
    }

    private assets() {
        this.app.use(express.static('public'))
        this.app.use(express.static('views'))
        this.app.use(ExpressSession({
            secret: 'hey',
            resave: false,
            saveUninitialized: true
        }))
        this.app.use((req: Request, res: Response, next: any) => {
            //res.locals.user = req.session.user || false;
            res.locals.path = req.path;
            next();
        });
    }

    private template() {
        this.app.set('view engine', 'pug')
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`)
        })
    }
}

export default App