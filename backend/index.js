
const express = require('express');
const userRouter = require('./routers/userRouter');
const PodcastRouter = require('./routers/PodcastRouter');
const UtilRouter = require('./routers/Util');




const cors = require('cors');
const app = express();

const port = 5000;

app.use(express.json());
app.use (cors({
    origin : ['http://localhost:3000']
}))
app.use('/user',userRouter);
app.use('/podcast',PodcastRouter);
app.use('/util',UtilRouter);

app.use(express.static('./static/uploads'));
//routes

app.listen(port, () => {
    console.log('server started........')
})