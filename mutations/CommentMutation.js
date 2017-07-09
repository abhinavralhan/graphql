import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} from "graphql";

import NoteModel from "../models/NoteModel";
import CommentType from "../types/CommentType";

export default {
    createComment: {
        type: CommentType,
        description: "...",
        args: {
            text: {
                type: GraphQLString,
                description: "..."
            },
            written_by: {
                type: GraphQLString,
                description: "..."
            },
            on_note_id: {
                type: GraphQLString,
                description: "..."
            }
        },
        resolve: (root, args, info) => {
            return NoteModel.createComment({
                text: args.text,
                written_by: args.written_by,
                on_note_id: args.on_note_id
            });
        }
    }
};
