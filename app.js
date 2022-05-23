const express = require('express');

const app = express();

app.set('view engine','ejs');
app.set('views','templates');

app.listen(3000);

app.get('/home',(req,res) => {

    res.render('index');

});
app.get('/skins',(req,res) => {

    res.render('skins');

});
app.get('/input',(req,res) => {

    res.render('input');

});

app.use((req,res) => {
    res.status(404).render('bogus');
})