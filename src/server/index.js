
const express = require('express');
const port = 3030;

const vidCtrl = require('./Controller/vidController')

// 
const commCtrl = require('./Controller/commController')
// 
const app = express();

app.use(express.json());

app.get("/api/data/:id", vidCtrl.specificVideo)


// 
app.get("/api/comms/:id", commCtrl.specificComm)

app.post("/api/comms", commCtrl.addComm)
// 

app.delete(`/api/comms/:id`, commCtrl.deleteComm)


app.put('/api/comms', commCtrl.editComm);

app.listen(port, ()=> {
    console.log(`listening on port ${port}`);
})