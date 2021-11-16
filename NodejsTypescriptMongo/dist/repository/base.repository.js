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
exports.BaseRepository = void 0;
class BaseRepository {
    constructor(_model) {
        this.model = _model;
    }
    Get(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findOne(filter);
        });
    }
    GetAll(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.find(filter);
        });
    }
    AddOrUpdate(filter, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findOneAndUpdate(filter, data, {
                new: true,
                upsert: true
            });
        });
    }
    Delete(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.deleteOne(filter);
        });
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repository.js.map