import mongoose from 'mongoose';


// connection string: create collection in compass with collection name StudentDatabase
await mongoose.connect('mongodb://127.0.0.1:27017/StudentDatabase', { useNewUrlParser: true, useUnifiedTopology: true });

//defining the model for students with all fields required
// if field input is incomplete, there will be an error
const Student = mongoose.model('Student', {
    stdnum: {type: String, required: true},
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    age: {type: Number, required: true}
})

export{Student};