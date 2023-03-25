const express = require('express');
const app = express();
const cors = require('cors')
const mlbRoutes = require('./routes/mlb-routes');
const nbaRoutes = require('./routes/nba-routes');
const db = require('./db');
require('dotenv').config();
const port = 3000;

db();

app.use(express.json());
app.use(cors({origin: 'http://localhost:5173'}))
app.use('/mlb', mlbRoutes)
app.use('/nba', nbaRoutes)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});