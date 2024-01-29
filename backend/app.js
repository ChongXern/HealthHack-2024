const express = require('express');

// express app
const app = express();

// listen for request
app.listen(3000); // also returns instance of server ie http.createServer()

// middleware & static files
app.use(express.static('public')); //all can use public files
app.use(express.urlencoded({ extended: true })); // CAN READ req.body
app.use(express.json());

// User class and initialise dummy users
class User {
    #userId;
    #username;
    #firstName;
    #lastName;
    #userType;
    postIds = [];

    constructor (userId, username, firstName, lastName, userType) {
        this.userId = userId;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userType = userType;
    }
    
    getUserId () {
        return this.#userId;
    }
    getUsername () {
        return this.#username;
    }
    getFirstName () {
        return this.#firstName;
    }
    getLastName () {
        return this.#lastName;
    }
    getUserType () {
        return this.#userType;
    }
    addPostId (newPostId) {
        this.postIds.push(newPostId);
    }
}

let users = [];
let userCount = 0;
users.push(new User(++userCount, "testmoderator", "John", "Smith", "Moderator"));
users.push(new User(++userCount, "testmedicalstudent", "Mary", "Jane", "Medical Student"));
users.push(new User(++userCount, "testanony1", "Tom", "Holland", "Public"));
users.push(new User(++userCount, "testanony2", "Margot", "Robbie", "Public"));
users.push(new User(++userCount, "testanony3", "Chris", "Evans", "Public"));


// Post class and initialise dummy posts
class Post {
    #postId;
    #content;
    #userId;
    #firstName;
    #lastName;

    constructor (postId, content, userId, firstName, lastName) {
        this.postId = postId;
        this.content = content;
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getPostId () {
        return this.postId;
    }
    getContent () {
        return this.content;
    }
    getUserId () {
        return this.userId;
    }
    getFirstName () {
        return this.firstName;
    }
    getLastName () {
        return this.lastName;
    }
}

let posts = [];
let postCount = 0;
posts.push(new Post(++postCount, "This is the content of the first post.", users[2].getUserId(), users[2].getFirstName(), users[2].getLastName()));
users[2].addPostId(postCount);
posts.push(new Post(++postCount, "This is the content of the second post.", users[3].getUserId(), users[3].getFirstName(), users[3].getLastName()));
users[3].addPostId(postCount);
posts.push(new Post(++postCount, "This is the content of the third post.", users[4].getUserId(), users[4].getFirstName(), users[4].getLastName()));
users[4].addPostId(postCount);

// Keep track of current user status
let isSignedIn = false;
let currentUser = null;

// API endpoints

// Current user
app.get('/api/currentuser', (req, res) => {
    const resCurrentUser = {
        currentUser: currentUser
    };
    
    res.json(resCurrentUser);
})

// All users
app.get('/api/users', (req, res) => {
    const allUsers = {
        users: users
    };

    res.json(allUsers);
})

// All posts
app.get('/api/posts', (req, res) => {
    const allPosts = {
        posts: posts
    };

    res.json(allPosts);
})

// Sign up
app.post('/api/signup', (req, res) => {
    const newUser = req.body;

    users.push(new User(++userCount, newUser.username, newUser.firstName, newUser.lastName, newUser.userType));

    res.redirect('/');
})

// Sign in
app.post('/api/signin', (req, res) => {
    const newSignIn = req.body;

    for(let i = 0; i < userCount; i++){
        if(newSignIn.username == users[i].username){
            isSignedIn = true;
            currentUser = users[i];
            break;
        }
    }

    res.redirect('/');
})

// Sign out
app.post('/api/signout', (req, res) => {
    isSignedIn = false;
    currentUser = null;
    
    res.redirect('/');
})

// New post
app.post('/api/newpost', (req, res) => {
    const newPost = req.body;

    posts.push(new Post(++postCount, newPost.content, currentUser.getUserId(), currentUser.getFirstName(), currentUser.getLastName()));
    currentUser.addPostId(postCount);

    res.redirect('/');
})


