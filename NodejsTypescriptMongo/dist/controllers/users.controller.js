"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("../services/user.service");
const decorators_1 = require("../infrastructure/decorators/decorators");
let UsersController = class UsersController {
    constructor() {
        this.userService = new user_service_1.UserService();
        this.index = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userService.GetUsers();
            res.render('users', { users });
        });
        this.addUserPage = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.render('editUser', { user: {} });
        });
        this.editUserPage = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.GetUser(req.params.id);
            res.render('editUser', { user });
        });
        this.saveUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const newUser = {
                Id: req.params.id,
                Name: req.body.Name,
                Email: req.body.Email,
                Password: req.body.Password,
            };
            yield this.userService.AddUser(newUser);
            res.redirect('/users');
        });
        this.deleteUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield this.userService.DeleteUser(req.params.id);
            res.redirect('/users');
        });
    }
};
__decorate([
    (0, decorators_1.Get)("/"),
    __metadata("design:type", Object)
], UsersController.prototype, "index", void 0);
__decorate([
    (0, decorators_1.Get)("/add"),
    __metadata("design:type", Object)
], UsersController.prototype, "addUserPage", void 0);
__decorate([
    (0, decorators_1.Get)("/edit/:id"),
    __metadata("design:type", Object)
], UsersController.prototype, "editUserPage", void 0);
__decorate([
    (0, decorators_1.Post)("/add"),
    (0, decorators_1.Post)("/edit/:id"),
    __metadata("design:type", Object)
], UsersController.prototype, "saveUser", void 0);
__decorate([
    (0, decorators_1.Get)("/delete"),
    __metadata("design:type", Object)
], UsersController.prototype, "deleteUser", void 0);
UsersController = __decorate([
    (0, decorators_1.Controller)("/users", true),
    __metadata("design:paramtypes", [])
], UsersController);
exports.default = UsersController;
//# sourceMappingURL=users.controller.js.map