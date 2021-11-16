import RouteDefinition from "./decorator.RouteDefinition";

export function Controller(prefix: string, isAuth: boolean = false): any {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        target.prefix = prefix
        target.isAuth = isAuth
    };
}
export function Get(url: string, authorization: boolean = false): any {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        var route: RouteDefinition = { requestMethod: "get", path: url, methodName: propertyKey }
        target.constructor.routes = [...(target.constructor.routes ?? []), route]
    };
}
export function Post(url: string, authorization: boolean = false): any {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        var route: RouteDefinition = { requestMethod: "post", path: url, methodName: propertyKey }
        target.constructor.routes = [...(target.constructor.routes ?? []), route]
    };
}