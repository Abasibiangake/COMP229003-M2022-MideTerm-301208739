// Do not expose your credentials in your code.
let atlasDB = "mongodb+srv://midtermcarcustomer:ejYrEERlHufWwWG5@clustercars.ophnzv7.mongodb.net/StoreDB?retryWrites=true&w=majority";
//"mongodb+srv://<username>:<passoword>@<cluster>/carstore?retryWrites=true&w=majority";

//username:midtermcarcustomer 	
//password: ejYrEERlHufWwWG5

// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;
}