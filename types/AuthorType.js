import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} from "graphql";

import AuthorModel from "../models/AuthorModel";
import NoteModel from "../models/NoteModel";

import NoteType from "./NoteType";
import CommentType from "./CommentType";

const AuthorType = new GraphQLObjectType({
    name: "Author",
    description: "...",
    fields: () => ({
        id: {
            type: GraphQLString,
            resolve: author => author.id
        },
        firstName: {
            type: GraphQLString,
            resolve: author => author.firstName
        },
        lastName: {
            type: GraphQLString,
            resolve: author => author.lastName
        },
        notes: {
            type: new GraphQLList(NoteType),
            resolve: author => {
                return NoteModel.getAuthorNotes(author.id);
            }
        },
        comments: {
            type: new GraphQLList(CommentType),
            resolve: author => {
                return NoteModel.getAuthorComments(author.id);
            }
        }
    })
});

export default AuthorType;
