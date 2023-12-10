import { UserModel, IUser } from '../models/UserModel';

export const createUser = async (input: IUser): Promise<IUser> => {
  try {
    const newUser = new UserModel(input);
    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    throw new Error('Error creating user ' + error);
  }
};

export const getUserById = async (userId: string): Promise<IUser | null> => {
  try {
    const user = await UserModel.findById(userId);
    return user;
  } catch (error) {
    throw new Error('Error fetching user: ' + error);
  }
};
