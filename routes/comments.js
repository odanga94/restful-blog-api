let store = require('../store');

module.exports = {
    getComments(req, res){
        res.send(store.posts[req.params.postId].comments); 
        console.log(store.posts[req.params.postId].comments);
    },
    addComment(req, res){       
        if(!req.body.text){return res.sendStatus(400)}
        store.posts[req.params.postId].comments.push(req.body);
        console.log('created', store.posts[req.params.postId].comments[store.posts[req.params.postId].comments.length - 1]);
        res.sendStatus(201);
    },
    updateComment(req, res){
        if(!req.body.text){return res.sendStatus(400)}
        Object.assign(store.posts[req.params.postId].comments[req.params.commentId], req.body);
        console.log('updated', store.posts[req.params.postId].comments[req.params.commentId]);
        res.sendStatus(204);
    },
    removeComment(req, res){
        deletedItem = store.posts[req.params.postId].comments.splice(req.params.commentId, 1);
        console.log('deleted', deletedItem);
        res.sendStatus(204);
    }
}
