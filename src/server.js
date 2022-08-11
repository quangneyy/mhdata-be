import express from 'express';
import configViewEngine from './config/viewEngine';
import initWebRoutes from './routes/web';
import initApiRoutes from './routes/api';
import configCors from './config/cors';
import connection from './config/connectDB';
import { initTables } from './service/initDatabaseService';

require("dotenv").config();
import bodyParser from 'body-parser';
// import connection from './config/connectDB';

const app = express();
const PORT = process.env.PORT || 8080;

// config cors
configCors(app);

// config view engine
configViewEngine(app);

// config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// test connection db 
connection();

// init web routes
initWebRoutes(app);
initApiRoutes(app);

// init sample data for database
// initTables().then(() => {
    app.listen(PORT, () => {
        console.log(">>> Service Backend Node.js is running on the port = " + PORT);
    })
// }).catch(err => {
//     console.log(">>> CAN NOT START APP, ERROR DURING INIT DATABASE TABLES...");
//     console.log(err);
// });

