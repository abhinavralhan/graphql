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
import CommentType from "./CommentType";

const NoteType = new GraphQLObjectType({
    name: "Note",
    description: "...",
    fields: () => ({
        id: {
            type: GraphQLString,
            resolve: note => note.id
        },
        title: {
            type: GraphQLString,
            resolve: note => note.title
        },
        note: {
            type: GraphQLString,
            resolve: note => note.note
        },
        author: {
            type: AuthorType,
            resolve: note => AuthorModel.getAuthor(note.written_by)
        },
        comments: {
            type: new GraphQLList(CommentType),
            resolve: note => NoteModel.getNoteComments(note.id)
        }
    })
});

export default NoteType;
