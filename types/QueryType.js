import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} from "graphql";

import AuthorModel from "../models/AuthorModel";
import NoteModel from "../models/NoteModel";

import AuthorType from "./AuthorType";
import NoteType from "./NoteType";

import AuthorsQuery from "../queries/AuthorsQuery";
import AuthorQuery from "../queries/AuthorQuery";
import NotesQuery from "../queries/NotesQuery";
import NoteQuery from "../queries/NoteQuery";

const QueryType = new GraphQLObjectType({
    name: "Query",
    description: "...",
    fields: () => ({
        authors: AuthorsQuery,
        author: AuthorQuery,
        notes: NotesQuery,
        note: NoteQuery
    })
});

export default QueryType;
