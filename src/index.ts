import app from './app';
import connectDatabase from './db';

let port = 3002;

app.listen(port, () => {
  console.log('Express Server Running on port ' + port);
  connectDatabase();
});
