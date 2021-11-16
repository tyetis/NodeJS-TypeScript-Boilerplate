"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = exports.Get = exports.Controller = void 0;
function Controller(prefix, isAuth = false) {
    return function (target, propertyKey, descriptor) {
        target.prefix = prefix;
        target.isAuth = isAuth;
    };
}
exports.Controller = Controller;
function Get(url, authorization = false) {
    return function (target, propertyKey, descriptor) {
        var _a;
        var route = { requestMethod: "get", path: url, methodName: propertyKey };
        target.constructor.routes = [...((_a = target.constructor.routes) !== null && _a !== void 0 ? _a : []), route];
    };
}
exports.Get = Get;
function Post(url, authorization = false) {
    return function (target, propertyKey, descriptor) {
        var _a;
        var route = { requestMethod: "post", path: url, methodName: propertyKey };
        target.constructor.routes = [...((_a = target.constructor.routes) !== null && _a !== void 0 ? _a : []), route];
    };
}
exports.Post = Post;
//# sourceMappingURL=decorators.js.map