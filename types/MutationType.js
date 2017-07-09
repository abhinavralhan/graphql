import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} from "graphql";

import AuthorMutation from "../mutations/AuthorMutation";
import NoteMutation from "../mutations/NoteMutation";
import CommentMutation from "../mutations/CommentMutation";

const MutationType = new GraphQLObjectType({
    name: "Mutation",
    description: "...",
    fields: () => ({
        createAuthor: AuthorMutation.createAuthor,
        createNote: NoteMutation.createNote,
        createComment: CommentMutation.createComment
    })
});

export default MutationType;
