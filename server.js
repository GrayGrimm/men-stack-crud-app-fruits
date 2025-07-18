// Here is where we import modules
// We begin by loading Express

const express = require('express');
const app = express()

//get route to slash
app.get('/', async (req, res) => {
    // res.send('hello,friend') add these lines throughough out the process to check the get route
    res.render('index.ejs');
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
});