import { IBaseRepository } from './IBase.repository'
import { EnforceDocument, FilterQuery, Model } from 'mongoose';
import { model, Types } from 'mongoose';

export class BaseMongoRepository<T> implements IBaseRepository<T> {
    private model: Model<T>

    constructor(_model: Model<T>) {
        this.model = _model
    }
    async GetById(id: any): Promise<T> {
        return await this.model.findOne({ _id: id });
    }

    async GetAll(filter: any): Promise<T[]> {
        return await this.model.find(filter);
    }

    async AddOrUpdate(data: T): Promise<T> {
        return await this.model.findOneAndUpdate({ _id: data["Id"] ?? new Types.ObjectId() }, data, {
            new: true,
            upsert: true
        });
    }

    async DeleteById(id: any): Promise<void> {
        await this.model.deleteOne({ _id: id });
    }
}