const Topic = require('../Models/topicSchema')
    //Insert new Topic
module.exports.insertNewTopic = function(req, res) {
        var newTopic = new Topic({
            title: req.body.txtTitle
        });
        newTopic.save(function(error) {
            if (error) {
                res.json({
                    result: "Fail",
                    message: `Fail to create new topic. Error is: ${error}`
                })
            } else {
                res.redirect('/admin/topic/listTopic')
            }
        })
    }
    //Get all Topic 
module.exports.getAllTopic = function(req, res) {
        Topic.find().sort({ createDate: 'descending' }).exec(function(error, data) {
            if (error) {
                res.json({
                    result: "Fail",
                    Message: `Fail to retrive all topic. Error is ${error}`
                });
            } else {
                res.render('topic_list', { listTopic: data });
            }
        });
    }
    //Get info of topic selected 
module.exports.getInfoToEdit = function(req, res) {
        Topic.findById(req.params.id, function(error, data) {
            if (error) {
                res.json({
                    result: "Fail",
                    Message: `Fail to retrive this topic. Error is ${error}`
                });
            } else {
                res.render('topic_edit', { selectedTopic: data });
            }
        });
    }
    //Edit Topic
module.exports.editTopic = function(req, res) {
    Topic.findByIdAndUpdate(req.body.idTopic, {
        title: req.body.txtTitle
    }, function(error) {
        if (error) {
            res.json({
                result: "Fail",
                Message: `Fail to update this topic. Error is ${error}`
            });
        } else {
            res.redirect('/admin/topic/listTopic');
        }
    });
};
//Delete topic. 
module.exports.deleteSelectedTopic = function(req, res) {
    Topic.findByIdAndRemove(req.params.id, function(error) {
        if (error) {
            res.json({
                result: "Fail",
                Message: `Fail to delete this topic. Error is ${error}`
            });
        } else {
            res.redirect('/admin/topic/listTopic');
        }
    });
}