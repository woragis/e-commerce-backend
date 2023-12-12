import ReviewModel from '../../models/ReviewModel';
import UserModel from '../../models/UserModel';
import { Review } from '../../types/Review.type';
import { SearchOptions } from '../../types/Server.type';
import { createUserResolverArgs, readUserResolverArgs, updateUserResolverArgs, deleteUserResolverArgs } from '../../types/User.type';

const userResolvers = {
  Query: {
    users: async (parent: any, args: SearchOptions) => {
      const users = await UserModel.find().skip(args.offset).limit(args.limit);
      return users;
    },
    user: async (parent: any, args: readUserResolverArgs, context: any) => {
      context.session;
      if (context.session.user.userId == null) {
        return { message: 'not allowed' };
      }
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
    reviews: async (parent: any, args: SearchOptions) => {
      const reviews = await ReviewModel.find({ user: parent.id } as Review)
        .skip(args.offset)
        .limit(args.limit);
      return reviews;
    },
    // cards
    // email preferences
    // addresses
  },
};

export default userResolvers;
