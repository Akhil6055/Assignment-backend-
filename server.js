const server = require('./app');
const mongoose = require('mongoose');

const dbUrl = "mongodb+srv://Akhil6055:Akhil605518@cluster0.jakvk.mongodb.net/Cluster0?retryWrites=true&w=majority";

mongoose.connect(dbUrl,{
    useFindAndModify:false,
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB Connected');
}).catch((err) => {
    console.log(err);
})

server.listen(5000,() => {
    console.log('Application started');
});