const graphql = require('graphql');
const { resolve } = require('q');
const { GraphQLObjectType , GraphQLString , GraphQLSchema , GraphQLID , GraphQLInt  ,GraphQLList} = graphql;

const Movies = require('../models/Movie')
const Directors = require('../models/Director')


// const directorJson = [
//     { "name":"Will smith" , "age":56}, //60ff2733ef3cd8a4f266a70a
//     { "name":"Jackie Chan" , "age":36}, //
//     { "name":"Jetli" , "age":66}, //
//     { "name":"Torreto" , "age":76},
// ]    

// const moviesJson = [
//{"name":"Happy", "genre":"Motivate" ,"directorID": },
//     { "name":'Henkock' , "genre":'Crime' , "directorID": ""},
//     { "name":"King of Monkey" , "genre":"Horror" , "directorID":"60ff1639ef3cd8a4f25ec637"},
//     { "name":"Shpion neig" , "genre":"Rated" , "directorID": "60ff1565ef3cd8a4f25e5f42"},
//     { "name":"God of Might" , "genre":"Rated", "directorID":"60ff1565ef3cd8a4f25e5f42"},
//     { "name":"Kiss of Dragon" , "genre":"Rated" , "directorID":"60ff1639ef3cd8a4f25ec637"},
//     { "name":'Furios' , "genre":'Rated' , "directorID":},
//     { "name":'X' , "genre":'Rated' , "directorID":},

// ]

// const director = [
//     {id:'1', name:'Will smith' , age:56},
//     {id:'2', name:'Jackie Chan' , age:36},
//     {id:'3', name:'Jetli' , age:66},
//     {id:'4', name:'Torreto' , age:76},
// ]

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        director:{
            type:Director,
            resolve(parent , args){
                // return director.find(director => director.id == parent.id)
                return Directors.findById(parent.directorID)
            }
        }
    })
})


const Director = new GraphQLObjectType({
    name: 'Director',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        movies:{
            type: new GraphQLList(MovieType),
            resolve(parent , args){
                // return movies.filter(movie => movie.directorID === parent.id)
                return Movies.find({directorID : parent.id})
            }
        }
    })
})



const Query = new GraphQLObjectType({
    name: 'Query',
    fields:{
        movie: {
            type: MovieType,
            args : { id: { type: GraphQLID}},
            resolve(parent , args){
                // return movies.find(movie => movie.id == args.id)
                return Movies.findById(args.id)
            }
        },
        director: {
            type: Director,
            args : { id: { type: GraphQLID}},
            resolve(parent , args){
                // return director.find(director => director.id == args.id)
                return Directors.findById(args.id)

            }
        },
        movies:{
            type: new GraphQLList(MovieType),
            resolve(parent , args){
                return Movies.find({})

            }
        },
        directors:{
            type: new GraphQLList(Director),
            resolve(parent , args){
                return Directors.find({})

            }
        }
    }
})


module.exports = new GraphQLSchema({
    query:Query
})