let store = require('../store');

module.exports = {
    getPosts(req, res){
        res.send(store.posts)    
    },
    addPost(req, res){ 
        if(!req.body){return res.sendStatus(400)}
        store.posts.push(req.body);
        console.log('created', store.posts[store.posts.length - 1]);
        res.sendStatus(201);      
    },
    updatePost(req, res){
        if(!req.body){return res.sendStatus(400)}
        Object.assign(store.posts[req.params.postId], req.body);
        console.log('updated', store.posts[req.params.postId]);
        res.sendStatus(204);
    },
    removePost(req, res){
        deletedItem = store.posts.splice(req.params.postId, 1);
        console.log('deleted', deletedItem);
        res.sendStatus(204);
    }
}
