const { connect } = require('mongoose')


const connectDB = async () => {

    try {
        await connect('mongodb+srv://octavio:aXjjMOxFMZLDj5gm@cluster0.dueoq8z.mongodb.net/rickandmorty-octavio')        
    } catch (error) {
        console.log(error)
    }

};

module.exports = connectDB;