import express from 'express';
import helmet from 'helmet';

const app = express();
const port = 3000;

app.use(
    helmet({
      XPoweredBy : false,
    }),
  );

app.get('/', (imp, res) =>{
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

