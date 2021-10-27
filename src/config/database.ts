import mongoose from 'mongoose';

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@ripley-bank-api-bd.g2yi1.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(uri || 'test')
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));