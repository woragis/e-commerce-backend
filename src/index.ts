import app from './app';
import connectDatabase from './db';
import dotenv from 'dotenv';
const env: string = process.env.NODE_ENV || 'development';
dotenv.config({ path: 'src/config/.env.' + env });

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('Express Server Running on port ' + PORT);
  connectDatabase();
});
