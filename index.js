
import listOfActivities from './activities.js'
import express from 'express';
import helmet from 'helmet';

const app = express();
const port = 3000;

app.use(helmet());

app.get('/', (req, res) =>{
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


app.get('/activities', async (req, res) => {
  try {
    const activities = await listOfActivities();
    res.status(200).json({
      "success" : true,
      "payload" : activities
    });
  } catch (error) {
    res.status(500).json({
      error: "An error occurred while fetching activities"
    });
  }
});