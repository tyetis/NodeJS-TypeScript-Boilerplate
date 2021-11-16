"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authMiddleware = (req, res, next) => {
    if (!req.session.user)
        return res.redirect("/login");
    next();
};
exports.default = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map