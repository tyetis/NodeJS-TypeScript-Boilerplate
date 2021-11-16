import { BaseMongoRepository } from '../repository/base.mongoRepository'
import { BaseSqliteRepository } from '../repository/base.sqliteRepository'
import { IUser, UserModel } from '../models/User'

export interface IUserService {
	GetUser(id: string): Promise<IUser>
	GetUsers(): Promise<IUser[]>
	AddUser(user: IUser): Promise<void>
	DeleteUser(id: string): Promise<void>
}