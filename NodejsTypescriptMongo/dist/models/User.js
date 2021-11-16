"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    Name: { type: String },
    Email: { type: String },
    Password: { type: String }
});
schema.virtual('Id').get(function () {
    return this._id;
});
const UserModel = (0, mongoose_1.model)('User', schema);
exports.UserModel = UserModel;
//# sourceMappingURL=User.js.map