import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/routes';

const app = express();

app.use(bodyParser.json());
app.use('/api/v1', router);


app.listen(process.env.PORT || 4000, () => {
    console.log('now listening on port 4000');
  });

module.exports = app;