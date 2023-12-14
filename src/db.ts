import mongoose from 'mongoose';
import dotenv from 'dotenv';
const env: string = process.env.NODE_ENV || 'dev';
dotenv.config({ path: __dirname + '/config/.env.' + env });

const mongoUri = process.env.MONGO_DB_URI || 'mongodb+srv://masteringthecode:woragis2004@cluster0.lvar0nb.mongodb.net/?retryWrites=true&w=majority';

const connectDatabase = async () => {
  mongoose.connect(mongoUri);

  const database = mongoose.connection;

  database.on('error', console.error.bind(console, 'MongoDB connection error:'));
  database.once('open', () => {
    console.log('Connected to MongoDB');
  });
};

export default connectDatabase;
