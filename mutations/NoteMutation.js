import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} from "graphql";

import NoteModel from "../models/NoteModel";
import NoteType from "../types/NoteType";

export default {
    createNote: {
        type: NoteType,
        description: "...",
        args: {
            title: {
                type: GraphQLString,
                description: "..."
            },
            note: {
                type: GraphQLString,
                description: "..."
            },
            written_by: {
                type: GraphQLString,
                description: "..."
            }
        },
        resolve: (root, args, info) => {
            return NoteModel.createNote({
                title: args.title,
                note: args.note,
                written_by: args.written_by
            });
        }
    }
};
