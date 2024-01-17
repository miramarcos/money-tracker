const express = require('express');
const cors = require('cors');
const TransactionModel = require('./models/Transaction');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.get('/api/test', (req, res) => {
    res.json('test ok');
})

app.post('/api/transaction', (req, res) => {
    console.log(process.env.MONGO_URL)
    //mongoose.connect('')
    const { name, description, datetime } = res.body;

    res.json(req.body);
})

app.listen(4000);

//money-tracker-test