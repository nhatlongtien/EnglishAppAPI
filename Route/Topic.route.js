const express = require('express');
const router = express.Router();
const controller = require('../Controllers/topic.controller');
//
router.get('/addTopic', function(req, res) {
    res.render('topic_add');
});
router.post('/addTopic', controller.insertNewTopic);
module.exports = router;
//
router.get('/listTopic', controller.getAllTopic);
// 
router.get('/editTopic/:id', controller.getInfoToEdit);
router.post('/editTopic', controller.editTopic);
//
router.get('/deleteTopic/:id', controller.deleteSelectedTopic);