// express
const express = require('express');
const app = express();
app.listen(process.env.PORT || 3001, () => {
    console.log('Listening on port ${port}!')});

// cors
const cors = require('cors');
app.use(cors({origin:'*'}));

// mongoose
const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb+srv://RedfordHudson:EvKBVYWr3F688F0s@cluster0.jalzw.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(process.env.MONGODB_URI || MONGODB_URI);
const database = mongoose.connection;
database.once('open',()=>{console.log('Connected to Database!')});

// middleware
app.use(express.json());
app.use(express.urlencoded());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// router
const programRouter = require('./routes/route.program');
app.use('/programs',programRouter);

const blueprintRouter = require('./routes/route.blueprint');
app.use('/blueprints',blueprintRouter);