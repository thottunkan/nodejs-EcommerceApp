const MongoClient = require('mongodb').MongoClient;
const state = {
    database:null
}
    
  

  module.exports.connect = function (data) {
    const uri = "mongodb+srv://root:mongodb@cluster0.4sip9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const dbname = 'ecom';
    MongoClient.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true},(err,client)=>{
        
        if (err) {
          console.log("connection failed")
        }
        else {
            //client.db('ecom').collection('user').insertOne(req.body);
            console.log("connected to atlas")
            state.database = client.db(dbname);
        }
          
      })
  }

  module.exports.get = function(){
      return state.database;
  }