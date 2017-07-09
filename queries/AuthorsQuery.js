import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} from "graphql";

import AuthorModel from "../models/AuthorModel";
import AuthorType from "../types/AuthorType";

export default {
    type: new GraphQLList(AuthorType),
    args: {},
    resolve: (root, args, info) => {
        return AuthorModel.getAuthors();
    }
};
