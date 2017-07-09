const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/graph", {
    useMongoClient: true
});

const Schema = mongoose.Schema;
const noteSchema = new Schema({
    title: String,
    note: String,
    written_by: String,
    comments: [
        {
            text: String
        }
    ]
});

var NoteModel = mongoose.model("Note", noteSchema);

export default {
    getNotes: () => {
        return new Promise((resolve, reject) => {
            NoteModel.find((err, reply) => {
                err ? reject(err) : resolve(reply);
            });
        });
    },
    getNote: id => {
        return new Promise((resolve, reject) => {
            NoteModel.find({ _id: id }, (err, reply) => {
                err ? reject(err) : resolve(reply);
            });
        });
    },
    getAuthorNotes: author_id => {
        return new Promise((resolve, reject) => {
            NoteModel.find({ written_by: author_id }, (err, reply) => {
                err ? reject(err) : resolve(reply);
            });
        });
    },
    createNote: note => {
        return new Promise((resolve, reject) => {
            NoteModel(note).save((err, reply) => {
                err ? reject(err) : resolve(reply);
            });
        });
    },
    getAuthorComments: author_id => {
        return new Promise((resolve, reject) => {
            NoteModel.find(
                { "comments.written_by": author_id },
                { comments: 1 },
                (err, reply) => {
                    err ? reject(err) : resolve(reply);
                }
            );
        });
    },
    getNoteComments: note_id => {
        return new Promise((resolve, reject) => {
            NoteModel.find({ _id: note_id }, { comments: 1 }, (err, reply) => {
                err ? reject(err) : resolve(reply);
            });
        });
    },
    createComment: comment => {
        let on_note_id = comment.on_note_id;
        delete comment.on_note_id;
        return new Promise((resolve, reject) => {
            NoteModel.findOneAndUpdate(
                { _id: on_note_id },
                { $push: { comments: comment } },
                { new: true },
                (err, reply) => {
                    if (!reply) {
                        reject("Note does not exist");
                        return;
                    }
                    let comment = reply.comments[reply.comments.length - 1];
                    err ? reject(err) : resolve(comment);
                }
            );
        });
    }
};
