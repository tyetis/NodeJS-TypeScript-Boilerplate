import { Request, Response } from 'express'
import IControllerBase from '../infrastructure/controller/IControllerBase'
import { Controller, Get, Post } from '../infrastructure/decorators/decorators'

@Controller("/")
class LoginController implements IControllerBase {

    constructor() {
    }

    @Get("/login")
    index = async (req: Request, res: Response) => {
        res.render('login')
    }
    @Post("/login")
    login = async (req: Request, res: Response) => {
        req.session.user = {
            id: 123,
            email: req.body.email
        };
        res.redirect('/')
    }
    @Get("/logout")
    logout = async (req: Request, res: Response) => {
        req.session.user = null;
        res.redirect('/')
    }
}

export default LoginController