const express = require('express');
let bcrypt = require('bcrypt');

// express app
const app = express();

// listen for request
app.listen(3030); // also returns instance of server ie http.createServer()

// middleware & static files
app.use(express.static('public')); //all can use public files
app.use(express.urlencoded({ extended: true })); // CAN READ req.body
app.use(express.json());

// User class and initialise dummy users

async function hashPw(password) {
    let hashPw = "";
    const salt = await bcrypt.genSalt(1);
    // console.log(salt);
    hashPw = await bcrypt.hash(password, salt);
    // console.log(password + " is now: ");
    // console.log(hashPw + '\n');
    return hashPw;
}

class User {
    #userId;
    #username;
    #firstName;
    #lastName;
    #userType;
    #email;
    #password;
    postIds = [];

    constructor(userId, username, firstName, lastName, userType, email, password) {
        this.userId = userId;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userType = userType;
        this.email = email;
        this.password = password;
    }

    getUserId() {
        return this.#userId;
    }
    getUsername() {
        return this.#username;
    }
    getFirstName() {
        return this.#firstName;
    }
    getLastName() {
        return this.#lastName;
    }
    getUserType() {
        return this.#userType;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
    addPostId(newPostId) {
        this.postIds.push(newPostId);
    }
}

let users = [];
let userCount = 0;
users.push(new User(++userCount, "testmoderator", "John", "Smith", "Moderator", "email1", "password1"));
users.push(new User(++userCount, "testmedicalstudent", "Mary", "Jane", "Medical Student", "email2", "password2"));
users.push(new User(++userCount, "testanony1", "Tom", "Holland", "Public", "email3", "password3"));
users.push(new User(++userCount, "testanony2", "Margot", "Robbie", "Public", "email4", "password4"));
users.push(new User(++userCount, "testanony3", "Chris", "Evans", "Public", "email5", "password5"));

// Post class and initialise dummy posts
class Post {
    #postId;
    #content;
    #userId;
    #firstName;
    #lastName;

    constructor(postId, content, userId, firstName, lastName) {
        this.postId = postId;
        this.content = content;
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getPostId() {
        return this.postId;
    }
    getContent() {
        return this.content;
    }
    getUserId() {
        return this.userId;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
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
//testing
app.set('view engine', 'ejs')
app.get('/test', (req, res) => {
    res.render('newUser', { users });
})

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

function isValid(newUser) { //checks repeated email, username
    for (var i = 0; i < users.length; i++) {
        if ((users[i].email == newUser.email)) {
            console.log("invalid user coz repeated email" + '\n');
            return 0;
        } else if (users[i].username == newUser.username) {
            console.log("invalid user coz repeated username" + '\n');
            return 0;
        }
    }
    console.log("valid user" + '\n');
    return 1;
}

// Sign up
app.post('/api/signup', async (req, res) => {
    // TODO: HASH password using bcrypt (testing purposes)
    const newUser = new User(
        ++userCount,
        username = req.body.username,
        firstName = "Awe", //replace w req.body.<property> etc
        lastName = "some",
        userType = "student",
        email = req.body.email,
        password = await hashPw(req.body.password)
    );
    if (isValid(newUser)) { // TODO: isValid function: checks repeated email, username, password    // }
        users.push(newUser);
    } else {
        //console.log(("user invalid")); 
        // redirect to user sign up page w error message
    }
    //res.redirect('/');

    res.redirect('/test'); // testing
})

// Sign in
app.post('/api/signin', (req, res) => {
    const newSignIn = req.body;

    for (let i = 0; i < userCount; i++) {
        if ((newSignIn.username == users[i].username) &&
            (newSignIn.password == users[i].password)) {
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


