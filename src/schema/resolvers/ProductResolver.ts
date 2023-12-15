import ProductModel from '../../models/ProductModel';
import { GraphqlContext, GraphqlParent, SearchOptions } from '../../types/Server.type';
import { addProductArgs, deleteProductArgs, editProductArgs, readProductArgs } from '../../types/Product.type';
import { Review, readReviewArgs } from '../../types/Review.type';
import ReviewModel from '../../models/ReviewModel';

const productResolvers = {
  Query: {
    products: async (parent: any, { offset, limit }: SearchOptions) => {
      const products = await ProductModel.find().skip(offset).limit(limit);
      console.log(products);
      return products;
    },
    product: async (parent: any, args: readProductArgs) => {
      const product = await ProductModel.findById(args._id);
      console.log(product);
      return product;
    },
  },
  Mutation: {
    addProduct: async (parent: any, args: addProductArgs) => {
      try {
        const newProduct = new ProductModel({
          name: args.input.name,
          price: args.input.price,
          discount: args.input.discount,
          discount_price: args.input.discount_price,
          quantity: args.input.quantity,
          description: args.input.description,
          images: args.input.images,
          specs: args.input.specs,
        });
        await newProduct.save();
        return newProduct;
      } catch (error) {
        console.log('Error adding product ' + error);
        return 'Error adding product ' + error;
      }
    },
    editProduct: async (parent: any, args: editProductArgs) => {
      try {
        const editedProduct = await ProductModel.findByIdAndUpdate(args.input._id, {
          name: args.input.name,
          price: args.input.price,
          discount: args.input.discount,
          discount_price: args.input.discount_price,
          quantity: args.input.quantity,
          description: args.input.description,
          images: args.input.images,
          specs: args.input.specs,
        });
        // .then(
        //   async product => {
        //     await product?.save();
        //     return product;
        //   },
        //   reason => {
        //     console.error('Edit product rejected ' + reason);
        //   }
        // );
        if (editedProduct) {
          return editedProduct;
        }
      } catch (error) {
        console.log('Error updating product ' + error);
        return 'Error updating product ' + error;
      }
    },
    deleteProduct: async (parent: any, args: deleteProductArgs) => {
      try {
        const deletedProduct = await ProductModel.findByIdAndDelete(args._id);
        if (deletedProduct.ok) {
          return 'Deleted Product';
        }
      } catch (error) {
        console.error('Error deleting user ' + error);
        return 'Error deleting user ' + error;
      }
    },
  },
  Product: {
    productReviews: async (parent: GraphqlParent, args: SearchOptions) => {
      const reviews = await ReviewModel.find({ product_id: parent._id } as Review)
        .skip(args.offset)
        .limit(args.limit);
      return reviews;
    },
    productReview: async (parent: GraphqlParent, args: readReviewArgs) => {
      const review = await ReviewModel.findOne({ _id: args._id, product_id: parent._id } as Review);
      return review;
    },
    // maybe they are useless here
    productAddReview: async () => {},
    productEditReview: async () => {},
    productDeleteReview: async () => {},
  },
};

export default productResolvers;
