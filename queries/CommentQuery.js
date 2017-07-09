import { GraphQLNonNull, GraphQLInt, GraphQLString } from "graphql";

import CommentProvider from "../providers/CommentProvider";
import CommentType from "../types/CommentType";

export default {
    type: CommentType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: (root, args, info) => {
        return CommentProvider.getComment(args.id);
    }
};
