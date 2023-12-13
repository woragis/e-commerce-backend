import ProductModel from '../../models/ProductModel';
import { GraphqlParent, SearchOptions } from '../../types/Server.type';
import { addProductArgs, deleteProductArgs, editProductArgs, readProductArgs } from '../../types/Product.type';
import { Review, readReview } from '../../types/Review.type';
import ReviewModel from '../../models/ReviewModel';

const productResolvers = {
  Query: {
    products: async (parent: any, args: SearchOptions) => {
      const products = await ProductModel.find().skip(args.offset).limit(args.limit);
      return products;
    },
    product: async (parent: any, args: readProductArgs) => {
      const product = await ProductModel.findById(args._id);
      return product;
    },
  },
  Mutation: {
    addProduct: async (parent: any, args: addProductArgs) => {
      const newProduct = new ProductModel<addProductArgs>({
        name: args.name,
        price: args.price,
        description: args.description,
        images: args.images,
        quantity: args.quantity,
        specs: args.specs,
      });
      newProduct
        .save()
        .then(savedProduct => {
          return savedProduct;
        })
        .catch((error: any) => {
          console.error('Error saving product ' + error);
        });
    },
    editProduct: async (parent: any, args: editProductArgs) => {
      const editedProduct = await ProductModel.findByIdAndUpdate(args._id, {
        name: args.name,
        price: args.price,
        discount: args.discount,
        discount_price: args.discount_price,
        description: args.description,
        specs: args.specs,
        images: args.images,
        quantity: args.quantity,
      });
      if (editedProduct) {
        editedProduct
          .save()
          .then(product => {
            return product;
          })
          .catch((error: any) => {
            console.log('Error updating product ' + error);
          });
      } else {
        return null;
      }
    },
    deleteProduct: async (parent: any, args: deleteProductArgs) => {
      const deletedProduct = await ProductModel.findByIdAndDelete(args._id);
      if (deletedProduct.ok) {
        return 'ok';
      }
    },
  },
  Product: {
    productReviews: async (parent: GraphqlParent, args: SearchOptions) => {
      const reviews = await ReviewModel.find({ product: parent._id } as Review)
        .skip(args.offset)
        .limit(args.limit);
      return reviews;
    },
    productReview: async (parent: GraphqlParent, args: readReview) => {
      const review = await ReviewModel.findOne({ _id: args._id, product: parent._id } as Review);
      return review;
    },
    // maybe they are useless here
    productAddReview: async () => {},
    productEditReview: async () => {},
    productDeleteReview: async () => {},
  },
};

export default productResolvers;
