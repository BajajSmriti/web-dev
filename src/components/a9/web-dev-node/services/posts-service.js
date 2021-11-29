// const postJson = require('../../Practice/ReduxExamples/reducers/data/posts.json');
const dao = require('../db/posts/post-dao');

module.exports = (app) => {

    const findAllPosts = (req, res) => {
        dao.findAllPosts()
            .then(posts => res.json(posts));
    }

    const createPost = (req, res) => {
        dao.createPost(req.body)
            .then((insertedPost) => res.json(insertedPost));
    }

    const deletePost = (req, res) => {
        dao.deletePost(req.params.id)
            .then((status) => res.send(status))
    }

    const likePost = (req, res) => {
        dao.updatePost(req.params.id, req.body)
            .then(status => res.send(status))
    }

    app.put('/api/posts/:id/like', likePost);

    app.delete('/api/posts/:id', deletePost);

    app.post('/api/posts', createPost);

    app.get('/api/posts', findAllPosts);
};


