import { Schema, model, connect, ObjectId } from 'mongoose';

interface IUser {
    Id?: string,
    Name?: string;
    Email?: string;
    Password?: string;
}

const schema = new Schema<IUser>({
    Name: { type: String },
    Email: { type: String },
    Password: { type: String}
});
schema.virtual('Id').get(function () {
    return this._id;
});

const UserModel = model<IUser>('User', schema);

export { IUser, UserModel }