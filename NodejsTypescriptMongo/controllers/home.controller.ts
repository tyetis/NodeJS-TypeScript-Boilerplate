import { Request, Response } from 'express'
import IControllerBase from '../infrastructure/controller/IControllerBase'
import { Controller, Get, Post } from '../infrastructure/decorators/decorators'

@Controller("/", true)
class HomeController implements IControllerBase {

    constructor() {
    }

    @Get("/")
    index = async (req: Request, res: Response) => {
        res.render('home')
    }
}

export default HomeController