import UserModel from '../../models/UserModel';
import { createUserResolverArgs, readUserResolverArgs, updateUserResolverArgs, deleteUserResolverArgs } from '../../types/User.type';

const userResolvers = {
  Query: {
    users: async () => {
      const users = await UserModel.find();
      return users;
    },
    user: async (parent: any, args: readUserResolverArgs) => {
      const user = await UserModel.findById(args.id);
      return user;
    },
  },
  Mutation: {
    createUser: async (parent: any, args: createUserResolverArgs) => {
      const newUser = new UserModel({ email: args.email, password: args.email });
      await newUser.save();
      return newUser;
    },
    updateUser: async (parent: any, args: updateUserResolverArgs) => {
      const updatedUser = await UserModel.updateOne(
        { id: args.id },
        { email: args.email, password: args.password, cards: args.cards, addresses: args.addresses }
      );
      return updatedUser;
    },
    deleteUser: async (parent: any, args: deleteUserResolverArgs) => {
      const deletedUser = await UserModel.deleteOne({ id: args.id });
      return deletedUser;
    },
  },
  User: {
    // cards
    // email preferences
    // addresses
  },
};

export default userResolvers;
