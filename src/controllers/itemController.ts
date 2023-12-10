import { ItemModel, IItem } from '../models/Item';

export const createItem = async (input: IItem): Promise<IItem> => {
  try {
    const newItem = new ItemModel(input);
    const savedItem = await newItem.save();
    return savedItem;
  } catch (error) {
    throw new Error('di' + error);
  }
};

export const getItemById = async (itemId: string): Promise<IItem | null> => {
  try {
    const item = await ItemModel.findById(itemId);
    return item;
  } catch (error) {
    throw new Error('Error fetching item ' + error);
  }
};
