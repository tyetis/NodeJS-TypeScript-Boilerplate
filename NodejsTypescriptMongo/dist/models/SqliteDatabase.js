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
exports.sqliteDb = void 0;
const sqlite3 = require("sqlite3");
const sqlite_1 = require("sqlite");
let sqliteDb;
exports.sqliteDb = sqliteDb;
function InitSqlite() {
    return __awaiter(this, void 0, void 0, function* () {
        exports.sqliteDb = sqliteDb = yield (0, sqlite_1.open)({
            filename: './data/node.db',
            driver: sqlite3.Database
        });
        sqlite3.verbose();
    });
}
exports.default = InitSqlite;
//# sourceMappingURL=SqliteDatabase.js.map