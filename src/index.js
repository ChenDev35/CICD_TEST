import express from 'express';

const port = process.env.port || 3000;
const app = express();

app.get('/', (req, res) => {
    console.log('a blank request has arrived');
    res.send('<h1> Hello Worldi </h1>');
});

app.listen(port, () => {
    console.log(`server is up and running on port: ${port}`);
});

app.get('/apple', (req, res) => {
    console.log('an apple request has arrived');
    res.send('<h1> Apple Page </h1>');
});

app.get('/profile', (req, res) => {
    console.log('an apple request has arrived');
    res.send('<h1> Profile Page </h1>');
});
