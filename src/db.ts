import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://masteringthecode:woragis2004@cluster0.lvar0nb.mongodb.net/?retryWrites=true&w=majority';

const connectDatabase = async () => {
  mongoose.connect(MONGODB_URI);

  const database = mongoose.connection;

  database.on('error', console.error.bind(console, 'MongoDB connection error:'));
  database.once('open', () => {
    console.log('Connected to MongoDB');
  });
};

export default connectDatabase;
