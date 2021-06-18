const express = require('express');
const app = express();
const router = require('./server/router');
const cors = require('cors');
const config = require('./server/config/config');
const path = require('path');




require('./server/config/db');
require('./server/config/express')(app);

console.log(process.env.NODE_ENV);
app.use(express.static(path.join(__dirname , 'dist')));
console.log(path.join(__dirname + '/dist/client'));
app.use(cors({
    origin: config.origin,
    credentials: true,
}))
app.use(router);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname , '..client/dist/client/index.html'));
  });



 console.log(config)
console.log(`Current port is ${config.PORT}`);
app.listen(config.PORT , () => console.log(`Server is listening on port ${config.PORT}`));