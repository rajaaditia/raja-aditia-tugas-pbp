const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const studentRoutes = require('./routers/user_routers');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', studentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});