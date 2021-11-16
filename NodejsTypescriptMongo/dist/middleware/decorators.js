"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = exports.Get = exports.Controller = void 0;
function Controller(prefix) {
    return function (target, propertyKey, descriptor) {
        target.prefix = prefix;
    };
}
exports.Controller = Controller;
function Get(url) {
    return function (target, propertyKey, descriptor) {
        if (target.constructor.routes)
            target.constructor.routes.push({ method: "get", path: url, action: propertyKey });
        else
            target.constructor.routes = [{ method: "get", path: url, action: propertyKey }];
    };
}
exports.Get = Get;
function Post(url) {
    return function (target, propertyKey, descriptor) {
        if (target.constructor.routes)
            target.constructor.routes.push({ method: "post", path: url, action: propertyKey });
        else
            target.constructor.routes = [{ method: "post", path: url, action: propertyKey }];
    };
}
exports.Post = Post;
//# sourceMappingURL=decorators.js.map