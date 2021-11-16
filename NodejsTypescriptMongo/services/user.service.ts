import { BaseMongoRepository } from '../repository/base.mongoRepository'
import { BaseSqliteRepository } from '../repository/base.sqliteRepository'
import { IUserService } from '../services/IUser.service'
import { IUser, UserModel } from '../models/User'

export class UserService implements IUserService {
	//userRepo = new BaseSqliteRepository<IUser>();
	userRepo = new BaseMongoRepository<IUser>(UserModel);

	async GetUser(id: string): Promise<IUser> {
		return await this.userRepo.GetById(id);
	}

	async GetUsers(): Promise<IUser[]> {
		return await this.userRepo.GetAll({});
	}

	async AddUser(user: IUser): Promise<void> {
		await this.userRepo.AddOrUpdate(user);
	}

	async DeleteUser(id: string): Promise<void> {
		await this.userRepo.DeleteById(id);
	}
}