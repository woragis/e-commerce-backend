import dotenv from 'dotenv';
const env: string = 'dev';
dotenv.config({ path: __dirname + '/config/.env.' + env });
import app from './app';
import connectDatabase from './db';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Express Server Running on port ' + PORT);
  connectDatabase();
});
