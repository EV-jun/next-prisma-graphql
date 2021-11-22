import { gql } from "apollo-server-micro";

export const typeDefs = gql`
    type Link {
        id: String
        title: String
        description: String
        url: String
        category: String
        imageUrl: String
        users: [String]
    }

    # Purely for reading operation
    type Query {
        links: [Link]! # This will never be null
    }

    # If you define mutation here and you don't have anything inside, it will break the program
    #  Create, Update, Delete
    # type Mutation {

    # }
`