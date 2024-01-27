const express = require('express');
const Blog = require('./models/blog.js');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs'); // app.set('views','name-of-view-folders');

// listen for request
app.listen(3000); // also returns instance of server ie http.createServer()

// middleware & static files
app.use(express.static('public')); //all can use public files
app.use(express.urlencoded({ extended: true })); // CAN READ req.body 

// GLOBAL
var Blogs = [];

// POST
app.post('/blogs/create', (req, res) => {
    const blog = new Blog(req.body); //currently Blog only has 3 arguments

    Blogs.push(blog);
    console.log("after POST");
    // Blogs.forEach((blog) => { //testing
    //     console.log(blog);
    // });
    res.redirect('/');
});

// GET
app.get('/', (req, res) => {
    console.log("GET all-blogs ==========================================");
    res.render('index', { title: 'Home', Blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/create', (req, res) => {
    res.render('create', { title: 'CREATE' });
});

// 404 page (middleware, like switch, will run by default)
app.use((req, res) => {
    res.status(404).render('404', { title: '404 ripp' });
});

// IGNORE
// const mongoose = require('mongoose');
// connect to db
// const dbURI = "mongodb+srv://test:goodmorningsir@mycluster.hswac7k.mongodb.net/sample_mflix?retryWrites=true&w=majority";
// mongoose.connect(dbURI);
// .then((result) => console.log('connected to db'))
// .catch((err) => {
//     console.log("cannot");
//     console.log(err);
// });

// // redirects
// app.get('/about-me', (req, res) => {
//     res.redirect('/about'); // res.setHeader('Location', './about')
// });

// res.send('<h1>home tag</h1>'); //instead of res.write(), res.end()
// res.sendFile('./views/index.html', { root: __dirname }); // absolute path!