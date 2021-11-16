import { EnforceDocument, FilterQuery, Model } from 'mongoose';

export interface IBaseRepository<T> {
    GetById(id: any): Promise<T>
    GetAll(filter: any): Promise<T[]>
    AddOrUpdate(data: T): Promise<T>
    DeleteById(id: any): Promise<void>
}