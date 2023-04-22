const Cha = require('../modelo/Character');
const Epi = require('../modelo/Episode');
const Loc = require('../modelo/Location');

const resolvers = {

    Query:{
        hello: () => 'Hola Mundo',
        async characters(_,args) {
            const pagina = args;
            console.log(pagina);

            const character = await  Cha.find().skip(pagina).limit(20).exec()
            return character
        },
        async character(_,args){
            const {id} = args;
            let personaje = await Cha.findById(id);
            const idLocation = personaje.location;
            const idOrigin = personaje.origin;
            const location = await Loc.findById(idLocation);
            const origin = await Loc.findById(idOrigin);
            personaje.location.name = location.name;
            personaje.origin.name = origin.name;
            return personaje
        },
        
        // episodes

        async episodes(_,args) {
            const pagina = args;
            let episodes = await  Epi.find().skip(pagina).limit(20).exec() 
            return episodes
        },
        async episode(_,args){
            const {id} = args;
            let episode = await Epi.findById(id);
            return episode
        },
        // Location

        async locations(_,args) {
            const pagina = args;
            let locations = await  Loc.find().skip(pagina).limit(20).exec() 
            return locations
        },
        async location(_,args){
            const {id} = args;
            let location = await Loc.findById(id);
            return location
        }

    },

    Mutation: {
        createCharacter: async (parent,args) => {
            const {_id,name, status, species} = args.input
            const newCharacter = new Cha({_id,name, status, species});
            console.log(' nuevo personaje' +newCharacter);
            await newCharacter.save();
            return newCharacter
        },
        async deleteCharacterPorId(_,{id}){
            console.log('eliminar por id ' + id);
            await Cha.findByIdAndDelete(id);
            return 'Personaje Eliminado'
        },
        async updateCharacter(_,{id, input}){
            const characterUpdated = await Cha.findByIdAndUpdate(id, {
                $set: input
            }, {new :true});
            return characterUpdated
        }
        
    }
}
 module.exports = resolvers;