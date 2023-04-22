const { gql } = require('apollo-server-express');


const characterDef = gql`

type Episode {
    id: ID
    name: String
    air_date: String
    episode: String
    characters: [String]
    created: String
}

type Location {
    id: ID
    name: String
    type: String
    dimension: String
    residents: [String]
    created: String
}

type Character {
    id: ID
    name: String
    status: String
    species: String
    type: String
    gender: String
    origin: Location
    image: String
    created: String
    location: Location
    episode: [Episode]
 }

type Query {
    hello: String
    characters(page: Int): [Character]
    character(id:ID!): Character
    ## episodes
    episodes(page: Int): [Episode]
    episode(id:ID!): Episode

    ## location
    locations(page: Int): [Location]
    location(id:ID!): Location
}
input CharacterInput {
        _id: String
        name: String
        status: String
        species: String
    }
type Mutation {
    createCharacter(input:CharacterInput! ): Character
    deleteCharacterPorId(id:ID!):String
    updateCharacter(id:ID, input: CharacterInput): Character
}
`

 module.exports = characterDef;