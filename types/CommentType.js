import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} from "graphql";

import AuthorModel from "../models/AuthorModel";
import NoteModel from "../models/NoteModel";

import AuthorType from "./AuthorType";
import NoteType from "./NoteType";

const CommentType = new GraphQLObjectType({
    name: "Comment",
    description: "...",
    fields: () => ({
        id: {
            type: GraphQLString,
            resolve: comment => comment.id
        },
        text: {
            type: GraphQLString,
            resolve: comment => comment.text
        },
        author: {
            type: AuthorType,
            resolve: comment => AuthorModel.getAuthor(comment.written_by)
        },
        note: {
            type: NoteType,
            resolve: comment => NoteModel.getNote(comment.on_note_id)
        }
    })
});

export default CommentType;
