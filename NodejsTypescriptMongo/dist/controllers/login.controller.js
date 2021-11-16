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
const decorators_1 = require("../infrastructure/decorators/decorators");
let LoginController = class LoginController {
    constructor() {
        this.index = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.render('login');
        });
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            req.session.user = {
                id: 123,
                email: req.body.email
            };
            res.redirect('/');
        });
        this.logout = (req, res) => __awaiter(this, void 0, void 0, function* () {
            req.session.user = null;
            res.redirect('/');
        });
    }
};
__decorate([
    (0, decorators_1.Get)("/login"),
    __metadata("design:type", Object)
], LoginController.prototype, "index", void 0);
__decorate([
    (0, decorators_1.Post)("/login"),
    __metadata("design:type", Object)
], LoginController.prototype, "login", void 0);
__decorate([
    (0, decorators_1.Get)("/logout"),
    __metadata("design:type", Object)
], LoginController.prototype, "logout", void 0);
LoginController = __decorate([
    (0, decorators_1.Controller)("/"),
    __metadata("design:paramtypes", [])
], LoginController);
exports.default = LoginController;
//# sourceMappingURL=login.controller.js.map