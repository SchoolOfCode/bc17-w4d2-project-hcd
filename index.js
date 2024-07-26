
// import {listOfActivities} from './activities.js'
import activityList from './activities.json' with {type:"json"};
import express from 'express';
import helmet from 'helmet';
import { v4 as uuid4 } from 'uuid';

const app = express();
const port = 8080;


app.use(helmet());
app.use(express.json());

//Hello World test 

app.get('/', (req, res) =>{
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


//GET request 

app.get('/activities', async (req, res) => {
  try {
    const activities = await activityList;
    res.status(200).json({
    "success" : true,
    "payload" : activities
    });
} catch (error) {
    res.status(500).json({
      error: "An error occurred while fetching activities",
      "success" : false,
      "payload" : null
    });
  }
});

//POST request

app.post('/activities', (req, res) =>{
    const newActivity = req.body;
    if (!newActivity) {
        res.status(400).json({
        error: "No activity data provided",
        "success" : false,
        "payload" : null
    });
}
const activity ={
    ...newActivity,
    id:uuid4(),
    activity_submitted:Date.now(),
}
activityList.push(activity);
console.log(activity);
console.log(activityList);

res.status(200).json ({
  "success" : true,
  "payload" : activity
})
});

// DELETE request 

app.delete('/activities/activity_id_here', (req,res) =>{
  const activityId = req.body;
  if (activityId===id){
    res.status(200).json({
      error: "Activity Deleted",
      "success" : true,
      "payload" : activities
    })
  } else{
    res.status(400).json({
      error: "No ID provided",
      "success" : false,
      "payload" : null})
  };
})











