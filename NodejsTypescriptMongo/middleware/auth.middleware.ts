import { Request, Response } from 'express'

const authMiddleware = (req: Request, res: Response, next) => {
    if (!req.session.user)
        return res.redirect("/login");
    next();
}

export default authMiddleware