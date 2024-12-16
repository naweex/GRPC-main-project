const { default: mongoose } = require("mongoose");

module.exports = mongoose.connect('mongodb://localhost:27017/grpc-project').then(() => {
    console.log('connected sto data base successfully');
}).catch((err) => {
    console.log('got error with connecting to database' + err);
})