import express from 'express';
import {marketItemRouter} from './app/api/marketItem.route'; 
import {connectDb} from './app/common/initDb/connectDb'; 
import bodyParser from 'body-parser'; 


const app = express();

app.use(bodyParser.json()) 
app.use('/marketItem',marketItemRouter()); 

connectDb().then(async ()=> { 
    app.listen(3000, () => {
        console.log('The application is listening on port 3000!');
    })
})

