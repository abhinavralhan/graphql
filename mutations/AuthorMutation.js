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
    createAuthor: {
        type: AuthorType,
        description: "...",
        args: {
            firstName: {
                type: GraphQLString,
                description: "..."
            },
            lastName: {
                type: GraphQLString,
                description: "..."
            }
        },
        resolve: (root, args, info) => {
            return AuthorModel.createAuthor({
                firstName: args.firstName,
                lastName: args.lastName
            });
        }
    }
};
