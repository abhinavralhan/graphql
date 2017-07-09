import { GraphQLNonNull, GraphQLInt, GraphQLString } from "graphql";

import AuthorModel from "../models/AuthorModel";
import AuthorType from "../types/AuthorType";

export default {
    type: AuthorType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: (root, args, info) => {
        return AuthorModel.getAuthor(args.id);
    }
};
