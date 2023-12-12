import server from './server';
import connectDatabase from './db';

let port = 3002;

server.listen(port, () => {
  console.log('Express Server Running on port ' + port);
  connectDatabase();
});
