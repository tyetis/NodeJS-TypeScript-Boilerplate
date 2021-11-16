import { IBaseRepository } from './IBase.repository'
import { sqliteDb } from '../models/SqliteDatabase'
import * as sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export class BaseSqliteRepository<T> implements IBaseRepository<T> {
    constructor() {

    }
    async GetById(id: any): Promise<T> {
        return await sqliteDb.get<T>('SELECT * FROM Users WHERE Id = ?', id)
    }
    async GetAll(filter: any): Promise<T[]> {
        return await sqliteDb.all('SELECT * FROM Users', filter)
    }

    async AddOrUpdate(data: T): Promise<T> {
        let obj = Object.keys(data).map((i) => { return { ["@" + i]: data[i] } }).reduce((a, b) => { return { ...a, ...b } });
        await sqliteDb.run("REPLACE INTO Users (Id, Name, Email, Password) VALUES(@Id,@Name,@Email,@Password)", obj)
        return null
    }

    async DeleteById(id: any): Promise<void> {
        await sqliteDb.run("DELETE FROM Users WHERE Id = ?", id)
    }
}