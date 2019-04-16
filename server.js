const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
// const errorhandler = require('error-handler');

const app = express(); 

app.use(bodyParser.json());
//app.use(errorhandler());
app.use(logger('dev'));
const posts = require('./routes/posts');
const comments = require('./routes/comments');

app.get('/posts/:postId/comments', (req, res) => {
    comments.getComments(req, res);
});
app.post('/posts/:postId/comments', (req, res) => {
    comments.addComment(req, res);
});
app.put('/posts/:postId/comments/:commentId', (req, res) => {
    comments.updateComment(req, res);
});
app.delete('/posts/:postId/comments/:commentId', (req, res) => {
    comments.removeComment(req, res);
});
app.get('/posts', (req, res) => {
    posts.getPosts(req, res);
});
app.post('/posts', (req, res) => {
    posts.addPost(req, res);
});
app.put('/posts/:postId/', (req, res) => {
    posts.updatePost(req, res);
});
app.delete('/posts/:postId/', (req, res) => {
    posts.removePost(req, res);
});

app.listen(3000);
