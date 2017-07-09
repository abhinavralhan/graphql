import { GraphQLInt, GraphQLNonNull, GraphQLString } from "graphql";

import NoteModel from "../models/NoteModel";

import NoteType from "../types/NoteType";

export default {
    type: NoteType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: (root, args, info) => {
        return NoteModel.getNote(args.id);
    }
};
