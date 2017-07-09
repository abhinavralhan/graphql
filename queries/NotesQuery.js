import { GraphQLInt, GraphQLList } from "graphql";

import NoteModel from "../models/NoteModel";

import NoteType from "../types/NoteType";

export default {
    type: new GraphQLList(NoteType),
    args: {
        author_id: { type: GraphQLInt }
    },
    resolve: (root, args, info) => {
        if (Object.keys(args).indexOf("author_id") > -1) {
            return NoteModel.getAuthorNotes(args.author_id);
        }
        return NoteModel.getNotes();
    }
};
