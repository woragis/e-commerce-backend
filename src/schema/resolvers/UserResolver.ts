import { genSalt, hash } from 'bcrypt';
import AddressModel from '../../models/AddressModel';
import CardModel from '../../models/CardModel';
import ReviewModel from '../../models/ReviewModel';
import UserModel from '../../models/UserModel';
import { addAddressArgs, deleteAddressArgs, editAddressArgs, readAddressArgs } from '../../types/Address.type';
import { addCardArgs, deleteCardArgs, editCardArgs, readCardArgs } from '../../types/Card.type';
import { Review } from '../../types/Review.type';
import { GraphqlContext, GraphqlParent, SearchOptions } from '../../types/Server.type';
import { createUserResolverArgs, readUserResolverArgs, updateUserResolverArgs, deleteUserResolverArgs, User } from '../../types/User.type';

const userResolvers = {
  Query: {
    users: async (parent: any, { offset, limit }: SearchOptions) => {
      const users = await UserModel.find().skip(offset).limit(limit);
      return users;
    },
    user: async (parent: any, { _id }: readUserResolverArgs) => {
      const user = await UserModel.findById(_id);
      return user;
    },
  },
  Mutation: {
    createUser: async (parent: any, args: createUserResolverArgs) => {
      try {
        console.log(args.input.name, args.input.username, args.input.email, args.input.password, args.input.admin);
        const salt = await genSalt(12);
        const encryptedPassword = await hash(args.input.password, salt);
        const newUser = new UserModel({
          name: args.input.name,
          username: args.input.username,
          email: args.input.email,
          password: encryptedPassword,
          admin: args.input.admin,
          addresses: args.input.addresses,
          cards: args.input.cards,
        });
        await newUser.save();
        return newUser;
        newUser
          .save()
          .then(savedUser => {
            return savedUser;
          })
          .catch(reason => {
            return reason;
          });
      } catch (error) {
        console.error('Error creating user ' + error);
        return error;
      }
    },
    updateUser: async (parent: any, args: updateUserResolverArgs) => {
      const encryptedPassword = await hash(args.input.password, 12);
      const updatedUser = await UserModel.updateOne(
        { _id: args.input._id },
        {
          name: args.input.name,
          username: args.input.username,
          email: args.input.email,
          password: encryptedPassword,
          admin: args.input.admin,
          cards: args.input.cards,
          addresses: args.input.addresses,
        }
      );
      console.log(updatedUser);
      return updatedUser;
    },
    deleteUser: async (parent: any, { _id }: deleteUserResolverArgs) => {
      const deletedUser = await UserModel.deleteOne({ _id });
      return deletedUser;
    },
  },
  User: {
    reviews: async (parent: GraphqlParent, args: SearchOptions) => {
      const reviews = await ReviewModel.find({ user_id: parent._id } as Review)
        .skip(args.offset)
        .limit(args.limit);
      return reviews;
    },
    userCards: async (parent: GraphqlParent, args: SearchOptions) => {
      const cards = await CardModel.find({ user_id: parent._id }).skip(args.offset).limit(args.limit);
      return cards;
    },
    userCard: async (parent: GraphqlParent, args: readCardArgs) => {
      const card = await CardModel.findById(args._id);
      return card;
    },
    userAddCard: async (parent: GraphqlParent, args: addCardArgs) => {
      const newCard = new CardModel({
        cardNickname: args.cardNickname,
        user_id: parent._id,
        cardholderName: args.cardholderName,
        cardNumber: args.cardNumber,
        expirationDate: args.expirationDate,
        cvv: args.cvv,
      });
      await newCard.save();
      return newCard;
    },
    userEditCard: async (parent: GraphqlParent, args: editCardArgs) => {
      const editedCard = await CardModel.findByIdAndUpdate(args._id, {
        cardNickname: args.cardNickname,
        cardholderName: args.cardholderName,
        cardNumber: args.cardNumber,
        expirationDate: args.expirationDate,
        cvv: args.cvv,
      });
      return editedCard;
    },
    userDeleteCard: async (parent: GraphqlParent, args: deleteCardArgs) => {
      const deletedCard = await CardModel.findByIdAndDelete(args._id);
      return deletedCard;
    },
    userAddresses: async (parent: GraphqlParent, args: SearchOptions) => {
      const addresses = await AddressModel.find({ user_id: parent._id }).skip(args.offset).limit(args.limit);
      return addresses;
    },
    userAddress: async (parent: GraphqlParent, args: readAddressArgs) => {
      const address = await AddressModel.findById(args._id);
      return address;
    },
    userAddAddress: async (parent: GraphqlParent, args: addAddressArgs) => {
      const newAddress = new AddressModel({
        user_id: parent._id,
        addressName: args.addressName,
        state: args.state,
        city: args.city,
        cep: args.cep,
        neighborhood: args.neighborhood,
        street: args.street,
        number: args.number,
        reference: args.reference,
      });
      await newAddress.save();
      return newAddress;
    },
    userEditAddress: async (parent: GraphqlParent, args: editAddressArgs) => {
      const editedAddress = await AddressModel.findByIdAndUpdate(args._id, {
        addressName: args.addressName,
        state: args.state,
        city: args.city,
        cep: args.cep,
        neighborhood: args.neighborhood,
        street: args.street,
        number: args.number,
        reference: args.reference,
      });
      return editedAddress;
    },
    userDeleteAddress: async (parent: GraphqlParent, args: deleteAddressArgs) => {
      const deletedAddress = await AddressModel.findByIdAndDelete(args._id);
      return deletedAddress;
    },

    // email preferences
  },
};

export default userResolvers;
