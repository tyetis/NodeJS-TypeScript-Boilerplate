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
exports.BaseSqliteRepository = void 0;
const SqliteDatabase_1 = require("../models/SqliteDatabase");
class BaseSqliteRepository {
    constructor() {
    }
    GetById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield SqliteDatabase_1.sqliteDb.get('SELECT * FROM Users WHERE Id = ?', id);
        });
    }
    GetAll(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield SqliteDatabase_1.sqliteDb.all('SELECT * FROM Users', filter);
        });
    }
    AddOrUpdate(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let obj = Object.keys(data).map((i) => { return { ["@" + i]: data[i] }; }).reduce((a, b) => { return Object.assign(Object.assign({}, a), b); });
            yield SqliteDatabase_1.sqliteDb.run("REPLACE INTO Users (Id, Name, Email, Password) VALUES(@Id,@Name,@Email,@Password)", obj);
            return null;
        });
    }
    DeleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield SqliteDatabase_1.sqliteDb.run("DELETE FROM Users WHERE Id = ?", id);
        });
    }
}
exports.BaseSqliteRepository = BaseSqliteRepository;
//# sourceMappingURL=base.sqliteRepository.js.map