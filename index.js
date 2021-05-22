const Express = require('express');
const BP = require('body-parser');
const Mongoose = require('mongoose');
const Routes = require('./routes');
const Cors = require('cors');
const DotEnv = require('dotenv');
const bodyParser = require('body-parser');
const PORT = 8081;

const app = Express();
app.use(Cors());
app.use(BP.json())
app.use(BP.urlencoded({extended:true}));
Routes(app);
DotEnv.config();

Mongoose.connect(process.env.db_connect,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
   })

app.get('/',(req, res)=>
    {
        res.send("WELCOME !")
    }
)
app.listen(process.env.PORT || PORT, ()=>console.log("Server listening to : "+ PORT));