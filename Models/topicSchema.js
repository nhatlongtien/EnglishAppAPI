const mongoose = require('mongoose');
var topicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    lessonId: {
        type: [{ type: mongoose.SchemaTypes.ObjectId }],
        default: []
    },
    createDate: {
        type: Date,
        default: Date.now()
    }
});
// a seter
topicSchema.path("title").set((inputString) => {
    return inputString[0].toUpperCase() + inputString.slice(1);
});
module.exports = mongoose.model('Topic', topicSchema);