const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/graph", {
    useMongoClient: true
});

const Schema = mongoose.Schema;
const authorSchema = new Schema({
    firstName: String,
    lastName: String
});

var AuthorModel = mongoose.model("Author", authorSchema);

export default {
    getAuthors: () => {
        return new Promise((resolve, reject) => {
            AuthorModel.find((err, reply) => {
                err ? reject(err) : resolve(reply);
            });
        });
    },
    getAuthor: id => {
        return new Promise((resolve, reject) => {
            AuthorModel.findOne({ _id: id }, (err, reply) => {
                err ? reject(err) : resolve(reply);
            });
        });
    },
    createAuthor: author => {
        return new Promise((resolve, reject) => {
            new AuthorModel(author).save((err, reply) => {
                err ? reject(err) : resolve(reply);
            });
        });
    }
};
