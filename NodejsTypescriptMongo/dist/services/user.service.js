"use strict";
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
exports.UserService = void 0;
const base_mongoRepository_1 = require("../repository/base.mongoRepository");
const User_1 = require("../models/User");
class UserService {
    constructor() {
        //userRepo = new BaseSqliteRepository<IUser>();
        this.userRepo = new base_mongoRepository_1.BaseMongoRepository(User_1.UserModel);
    }
    GetUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepo.GetById(id);
        });
    }
    GetUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepo.GetAll({});
        });
    }
    AddUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userRepo.AddOrUpdate(user);
        });
    }
    DeleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userRepo.DeleteById(id);
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map