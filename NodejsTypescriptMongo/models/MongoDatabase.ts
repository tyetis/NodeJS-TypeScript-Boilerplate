import { Schema, model, connect } from 'mongoose';

export default async function InitMongo(): Promise<void> {
    await connect('mongodb+srv://tayyip:hFy4Ora9MJ0mvjca@cluster0.jqaz0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
}