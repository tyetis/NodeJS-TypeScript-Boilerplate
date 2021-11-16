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
exports.BaseMongoRepository = void 0;
const mongoose_1 = require("mongoose");
class BaseMongoRepository {
    constructor(_model) {
        this.model = _model;
    }
    GetById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findOne({ _id: id });
        });
    }
    GetAll(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.find(filter);
        });
    }
    AddOrUpdate(data) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findOneAndUpdate({ _id: (_a = data["Id"]) !== null && _a !== void 0 ? _a : new mongoose_1.Types.ObjectId() }, data, {
                new: true,
                upsert: true
            });
        });
    }
    DeleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.deleteOne({ _id: id });
        });
    }
}
exports.BaseMongoRepository = BaseMongoRepository;
//# sourceMappingURL=base.mongoRepository.js.map