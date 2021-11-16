import { Request, Response } from 'express'
import IControllerBase from '../infrastructure/controller/IControllerBase'
import { UserService } from '../services/user.service'
import { IUser } from '../models/User'
import { Controller, Get, Post } from '../infrastructure/decorators/decorators'

@Controller("/users", true)
class UsersController implements IControllerBase {
    private userService = new UserService()

    constructor() {
    }

    @Get("/")
    index = async (req: Request, res: Response) => {
        const users = await this.userService.GetUsers();
        res.render('users', { users })
    }

    @Get("/add")
    addUserPage = async (req: Request, res: Response) => {
        res.render('editUser', { user: {} })
    }

    @Get("/edit/:id")
    editUserPage = async (req: Request, res: Response) => {
        const user = await this.userService.GetUser(req.params.id);
        res.render('editUser', { user })
    }

    @Post("/add")
    @Post("/edit/:id")
    saveUser = async (req: Request, res: Response) => {
        const newUser: IUser = {
            Id: req.params.id,
            Name: req.body.Name,
            Email: req.body.Email,
            Password: req.body.Password,
        };
        await this.userService.AddUser(newUser);
        res.redirect('/users')
    }

    @Get("/delete")
    deleteUser = async (req: Request, res: Response) => {
        await this.userService.DeleteUser(req.params.id);
        res.redirect('/users')
    }
}

export default UsersController